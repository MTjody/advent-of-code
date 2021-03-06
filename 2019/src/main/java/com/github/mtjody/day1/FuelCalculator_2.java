package com.github.mtjody.day1;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class FuelCalculator_2 {
    public static void main(String[] args) {
        String fileName = new FuelCalculator_2().getClass().getClassLoader().getResource("day1/input.txt").getFile();

        try (Stream<String> lines = Files.lines(Paths.get(fileName))) {
            int result = lines.mapToInt(numAsString -> Integer.parseInt(numAsString))
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
