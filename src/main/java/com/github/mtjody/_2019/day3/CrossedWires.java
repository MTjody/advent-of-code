package com.github.mtjody._2019.day3;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.stream.Stream;

public class CrossedWires {

    private int wireCount;

    public CrossedWires() {
        String fileName = getClass().getClassLoader().getResource("_2019/day3/input.txt").getFile();

        try (Stream<String> lines = Files.lines(Paths.get(fileName))) {
            lines.forEach(line -> {
                wireCount++;
                String[] path = line.split(",");
                walkPath(path, wireCount);
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private void walkPath(String[] path, int wireCount) {
        Arrays.asList(path).forEach(instruction -> {
            String direction = Character.toString(instruction.charAt(0));
            switch (direction) {
                case "U": {

                }
                case "D": {

                }
                case "L": {

                }
                case "R": {

                }
                default: {
                    throw new IllegalStateException("Whoops..!");
                }
            }
        });
    }

    public static void main(String[] args) {
        CrossedWires cw = new CrossedWires();
    }

}
