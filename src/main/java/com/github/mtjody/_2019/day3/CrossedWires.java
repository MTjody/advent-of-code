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

    private Point startingPoint;
    private Map<Point, Set<Integer>> pointToWires;
    private List<String[]> wirePaths;
    private int wireCount;

    public CrossedWires() {
        startingPoint = new Point(0, 0);
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

    public void setWirePaths(List<String[]> wirePaths) {
        this.wirePaths = wirePaths;
    }

    public int calculateClosestDistance(List<Point> intersections) {
        return intersections.stream()
            .map(point -> Math.abs(point.getX()) + Math.abs(point.getY())) // starting point is always 0
            .min(Comparator.naturalOrder())
            .get();
    }

    private List<Point> getIntersectionPoints() {
        return pointToWires.entrySet()
            .stream()
            .filter(entry -> entry.getValue().size() > 1)
            .map(entry -> entry.getKey())
            .collect(Collectors.toList());
    }

    private Map<Point, Set<Integer>> walkPath(String[] path) {
        Set<Point> points = new HashSet<>();
        points.add(startingPoint);

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
                if (direction == "U") {
                    point = new Point(x, y + i);

                } else if (direction == "D") {
                    point = new Point(x, y - i);

                } else if (direction == "R") {
                    point = new Point(x + i, y);

                } else if (direction == "L") {
                    point = new Point(x - i, y);

                }
                lastKnownPoint = point;
                points.add(point);
                if (pointToWires.containsKey(point)) {
                    pointToWires.get(point).add(wireCount);
                } else {
                    Set<Integer> wires = new HashSet<>();
                    pointToWires.put(point, wires);
                }
            }            
        }
        return pointToWires;
    }

    public static void main(String[] args) {
        CrossedWires cw = new CrossedWires();
        cw.getWirePaths().forEach(path -> {
            cw.increaseWireCount();
            cw.walkPath(path);
        });
        List<Point> intersectionPoints = cw.getIntersectionPoints();
        int distance = cw.calculateClosestDistance(intersectionPoints);
        System.out.println("The closest point is: " + closestPoint.toString() + " with a distance of: " + distance);
    }

    private int calculateManhattanDistance(Point closestPoint) {
        return 0;
    }

    private void increaseWireCount() {
        wireCount++;
    }

}
