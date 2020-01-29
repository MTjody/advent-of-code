package com.github.mtjody._2019.day3;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CrossedWires {

    private Map<Point, Set<Integer>> pointToWires;
    private List<String[]> wirePaths;
    private int wireCount;

    CrossedWires(List<String[]> wirePaths) {
        pointToWires = new HashMap<>();
        this.wirePaths = wirePaths;
    }

    public CrossedWires() {
        pointToWires = new HashMap<>();
        wirePaths = new ArrayList<>();
        String fileName = getClass().getClassLoader().getResource("_2019/day3/input.txt").getFile();

        try (Stream<String> lines = Files.lines(Paths.get(fileName))) {
            lines.forEach(line -> wirePaths.add(line.split(",")));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<String[]> getWirePaths() {
        return wirePaths;
    }

    public int calculateClosestDistance(List<Point> intersections) {
        return intersections.stream()
            // starting point is always 0, no need for -
            .map(point -> Math.abs(point.getX()) + Math.abs(point.getY()))
            .min(Comparator.naturalOrder())
            .get();
    }

    List<Point> getIntersectionPoints() {
        return pointToWires.entrySet()
            .stream()
            .filter(entry -> entry.getValue().size() > 1)
            .map(entry -> entry.getKey())
            .filter(point -> ! (point.getX() == 0 && point.getY() == 0))
            .collect(Collectors.toList());
    }

    Map<Point, Set<Integer>> walkPath(String[] path) {

        Point lastKnownPoint = null;

        for (String instruction : Arrays.asList(path)) {
            String direction = Character.toString(instruction.charAt(0));
            int stepCount = Integer.parseInt(instruction.substring(1));
            int x = 0, y = 0;
            if (lastKnownPoint != null) {
                x = lastKnownPoint.getX();
                y = lastKnownPoint.getY();
            }
            for (int i = 0; i <= stepCount; ++i) {
                Point point = null;
                if ("U".equals(direction)) {
                    point = new Point(x, y + i);
                } else if ("D".equals(direction)) {
                    point = new Point(x, y - i);
                } else if ("R".equals(direction)) {
                    point = new Point(x + i, y);
                } else if ("L".equals(direction)) {
                    point = new Point(x - i, y);
                } else {
                    throw new IllegalStateException("Direction was: " + direction);
                }
                lastKnownPoint = point;
                if (pointToWires.containsKey(point)) {
                    pointToWires.get(point).add(wireCount);
                } else {
                    Set<Integer> wires = new HashSet<>();
                    wires.add(wireCount);
                    pointToWires.put(point, wires);
                }
            }            
        }
        return pointToWires;
    }

    public static void main(String[] args) {
        CrossedWires cw = new CrossedWires();
        int distance = cw.getClosestDistance();
        
        System.out.println("The manhattan distance from the central point is: " + distance);
    }

    private Integer getClosestDistance() {
        getWirePaths().forEach(path -> {
            increaseWireCount();
            walkPath(path);
        });
        List<Point> intersectionPoints = getIntersectionPoints();
        if (intersectionPoints == null) throw new IllegalStateException("No intersectionpoints :(");
        return calculateClosestDistance(intersectionPoints);
    }

    void increaseWireCount() {
        wireCount++;
    }

}
