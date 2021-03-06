package com.github.mtjody.day1;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class FuelCalculator {
    public static void main(String[] args) {
        String fileName = new FuelCalculator().getClass().getClassLoader().getResource("day1/input.txt").getFile();

        try (Stream<String> lines = Files.lines(Paths.get(fileName))) {
            int result = lines.mapToInt(numAsString -> Integer.parseInt(numAsString))
                .map(num -> num / 3 - 2)
                .sum();
            System.out.print("Result is " + result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
