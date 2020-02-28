package com.github.mtjody.day1;

import org.testng.annotations.Test;
import org.testng.Assert;

import static com.github.mtjody.day1.FuelCalculator_2.calculateFuel;

public class FuelCalculator_2Test {

    @Test(groups = { "day1" }, description = "Test that the recursive calculator works for first example")
    public void testCalculateFirstExample() {
        int result = calculateFuel(14);
        Assert.assertEquals(result, 2, "nope");
    }

    @Test(groups = { "day1" }, description = "Test that the recursive calculator works for second example")
    public void testCalculateSecondExample() {
        int result = calculateFuel(1969);
        Assert.assertEquals(result, 966, "nope");
    }

    @Test(groups = { "day1" }, description = "Test that the recursive calculator works for third example")
    public void testCalculateThirdExample() {
        int result = calculateFuel(100756);
        Assert.assertEquals(result, 50346, "nope");
    }
}
