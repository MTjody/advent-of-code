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
    private Map<Point, Integer> pointToSteps;
    private List<String[]> wirePaths;
    private int wireCount;

    public static void main(String[] args) {
        CrossedWires cw = new CrossedWires();
        List<Point> intersectionPoints = cw.getIntersectionPoints();
        if (intersectionPoints == null) throw new IllegalStateException("No intersectionpoints :(");

        int distance = cw.getManhattanDistance(intersectionPoints);
        System.out.println("The manhattan distance from the central point is: " + distance);
        int fewestCombinedSteps = cw.getFewestCombinedSteps(intersectionPoints);
        System.out.println("However, the fewest combined steps is: " + fewestCombinedSteps);
    }

    public CrossedWires() {
        pointToWires = new HashMap<>();
        pointToSteps = new HashMap<>();
        wirePaths = new ArrayList<>();
        String fileName = getClass().getClassLoader().getResource("_2019/day3/input.txt").getFile();

        try (Stream<String> lines = Files.lines(Paths.get(fileName))) {
            lines.forEach(line -> wirePaths.add(line.split(",")));
            wirePaths.forEach(path -> {
                increaseWireCount();
                walkPath(path);
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    List<Point> getIntersectionPoints() {
        return pointToWires.entrySet()
            .stream()
            .filter(entry -> entry.getValue().size() > 1)
            .map(entry -> entry.getKey())
            .filter(point -> ! (point.getX() == 0 && point.getY() == 0))
            .collect(Collectors.toList());
    }

    public int getManhattanDistance(List<Point> intersections) {
        return intersections.stream()
            // starting point is always 0, no need for -
            .map(point -> Math.abs(point.getX()) + Math.abs(point.getY()))
            .min(Comparator.naturalOrder())
            .get();
    }

    public int getFewestCombinedSteps(List<Point> intersections) {
        return intersections.stream()
            .map(point -> pointToSteps.get(point))
            .min(Comparator.naturalOrder())
            .get();
    }

    // For testing
    CrossedWires(List<String[]> wirePaths) {
        pointToWires = new HashMap<>();
        pointToSteps = new HashMap<>();
        this.wirePaths = wirePaths;
        this.wirePaths.forEach(path -> {
            increaseWireCount();
            walkPath(path);
        });
    }

    private Map<Point, Set<Integer>> walkPath(String[] path) {

        Point lastKnownPoint = null;
        int stepsFromCenter = 0;

        for (String instruction : Arrays.asList(path)) {
            String direction = Character.toString(instruction.charAt(0));
            int stepCount = Integer.parseInt(instruction.substring(1));
            int x = 0, y = 0;
            if (lastKnownPoint != null) {
                x = lastKnownPoint.getX();
                y = lastKnownPoint.getY();
            }
            for (int i = 1; i <= stepCount; i++) {
                Point point = null;
                stepsFromCenter++;
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
                //System.out.println(String.format("For point %s, direction stepcount %s %s and stepsFromCenter %s", point.toString(), direction, stepCount, stepsFromCenter));
                if (point.getX() == 0 && point.getY() == 0) stepsFromCenter = 0;
                
                if (pointToWires.containsKey(point)) {
                    int distanceTravelled = pointToSteps.get(point);
                    boolean added = pointToWires.get(point).add(wireCount);
                    if (added) {
                        pointToSteps.replace(point, stepsFromCenter + distanceTravelled);
                    }
                } else {
                    Set<Integer> wires = new HashSet<>();
                    pointToSteps.put(point, stepsFromCenter);
                    wires.add(wireCount);
                    pointToWires.put(point, wires);
                }
            }            
        }
        return pointToWires;
    }

    private void increaseWireCount() {
        wireCount++;
    }

}
