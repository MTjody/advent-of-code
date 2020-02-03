package com.github.mtjody._2019.day4;

import java.util.function.IntPredicate;
import java.util.stream.IntStream;

public class SecureContainer {

    private static final int BOTTOM_RANGE = 146810;
    private static final int TOP_RANGE = 612564;

    // two adjacent numbers are the same
    public static IntPredicate adjacentNumbers = (number) -> {
        String num = Integer.toString(number);
        for (int i = 1; i < num.length(); i++) {
            if (num.charAt(i - 1) == num.charAt(i)) {
                return true;
            }
        }
        return false;
    };

    // digit to right only same or bigger 
    public static IntPredicate increasingNumbers = (number) -> {
        String num = Integer.toString(number);
        boolean increasesOrSame = true;
        for (int i = 0; i < num.length(); i++) {
            if (Integer.valueOf(num.charAt(i - 1)) <= Integer.valueOf(num.charAt(i))) {
                increasesOrSame = false;
            }
        }
        return increasesOrSame;
    };

    public static void main(String[] args) {

        Long count = IntStream
            .rangeClosed(BOTTOM_RANGE, TOP_RANGE)
            .filter(increasingNumbers)
            .filter(adjacentNumbers)
            .count();

        System.out.println("Number of potential matches: " + count);
    }   
}
