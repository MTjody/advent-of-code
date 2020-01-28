package com.github.mtjody._2019.day3;

import java.util.ArrayList;
import java.util.List;

import org.testng.Assert;
import org.testng.annotations.Test;

public class CrossedWiresTest {

    @Test(groups = "day3")
    public void testGetIntersectionPoints1() {
        List<String[]> testInputData = new ArrayList<>();
        String[] firstWire = {"R8","U5","L5","D3"};
        String[] secondWire = {"U7","R6","D4","L4"};
        testInputData.add(firstWire);
        testInputData.add(secondWire);
        CrossedWires cw = new CrossedWires(testInputData);
        cw.getWirePaths().forEach(path -> {
            cw.increaseWireCount();
            cw.walkPath(path);
        });
        List<Point> points = cw.getIntersectionPoints();
        Assert.assertNotNull(points, "Points was null");
        Assert.assertEquals(points.size(), 2, "Wrong amount of intersection points");
    } 


}