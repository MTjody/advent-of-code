package com.github.mtjody._2019.day1;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class Day1_1 {
    public static void main(String[] args) {
        String fileName = new Day1_2().getClass().getClassLoader().getResource("_2019/day1/input.txt").getFile();

        try (Stream<String> stream = Files.lines(Paths.get(fileName))) {
            int result = stream.mapToInt(numAsString -> Integer.parseInt(numAsString))
                .map(num -> num / 3)
                .map(num -> num - 2)
                .sum();
            System.out.print("Result is " + result);
        } catch (IOException e) {
            e.printStackTrace();
        }
        // Sum of all lines
        // Each line divide by 3 rounded down and subtract 2
    }
}
