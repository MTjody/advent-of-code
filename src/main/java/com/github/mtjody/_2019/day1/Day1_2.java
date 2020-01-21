package com.github.mtjody._2019.day1;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class Day1_2 {
    public static void main(String[] args) {
        String fileName = new Day1_2().getClass().getClassLoader().getResource("_2019/day1/input.txt").getFile();

        try (Stream<String> stream = Files.lines(Paths.get(fileName))) {
            int result = stream.mapToInt(numAsString -> Integer.parseInt(numAsString))
                .map(num -> calculateFuel(num))
                .sum();

            System.out.print("Result is " + result);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static int calculateFuel(int fuel) {
        int calculated = fuel / 3 - 2;
        if (calculated <= 0) {
            return 0;
        }
        return calculated + calculateFuel(calculated);
    }
}
