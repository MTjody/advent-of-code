package com.github.mtjody._2019.day1;

import org.testng.annotations.Test;
import org.testng.Assert;

import static com.github.mtjody._2019.day1.Day1_2.calculateFuel;

public class Day1_2Test {

    @Test(groups = { "Day1" }, description = "Test that the recursive calculator works for first example")
    public void testCalculateFirstExample() {
        int result = calculateFuel(14);
        Assert.assertEquals(result, 2, "nope");
    }

    @Test(groups = { "Day1" }, description = "Test that the recursive calculator works for second example")
    public void testCalculateSecondExample() {
        int result = calculateFuel(1969);
        Assert.assertEquals(result, 966, "nope");
    }

    @Test(groups = { "Day1" }, description = "Test that the recursive calculator works for third example")
    public void testCalculateThirdExample() {
        int result = calculateFuel(100756);
        Assert.assertEquals(result, 50346, "nope");
    }
}
