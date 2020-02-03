package com.github.mtjody._2019.day4;

import java.util.stream.IntStream;

import org.testng.Assert;
import org.testng.annotations.Test;

import static com.github.mtjody._2019.day4.SecureContainer.adjacentNumbers;
import static com.github.mtjody._2019.day4.SecureContainer.increasingNumbers;

public class SecureContainerTest {

    @Test(groups = "day4", description = "Test the count function")
    public void testCount() {
        Long count = IntStream.rangeClosed(0, 10)
            .filter(number -> number % 2 == 1)
            .count();

        Assert.assertEquals(count, (Long)  5L, "nope");
    }

    @Test(groups = "day4", description = "Test the adjacent numbers predicate")
    public void testAdjacentNumbers() {
        Long count = IntStream.rangeClosed(10, 20)
            .filter(adjacentNumbers)
            .count();
        Assert.assertEquals(count, (Long) 1L, "nope");

        Long count2 = IntStream.rangeClosed(10, 99)
            .filter(adjacentNumbers)
            .count();
        Assert.assertEquals(count2, (Long) 9L, "nope");
    }

    @Test(groups = "day4", description = "Test the increasing numbers predicate")
    public void testIncreasingNumbers() {
        Long count = IntStream.rangeClosed(10, 20)
            .filter(increasingNumbers)
            .count();

        Assert.assertEquals(count, (Long) 9L, "nope");

        int[] arr = IntStream.rangeClosed(10, 200)
            .filter(increasingNumbers)
            .toArray();

        Assert.assertEquals(arr.length, 9, "nope");
    }

    @Test(groups = "day4", description = "Test something")
    public void test() {

    }

}
