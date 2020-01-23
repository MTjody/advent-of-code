package com.github.mtjody._2019.day2;

import org.testng.Assert;
import org.testng.annotations.Test;

public class IntCodeTest {

    @Test(groups = "day2", description = "Test the intcode computer from example 1")
    public void testIntCodeExample1() {
        int[] exampleInput = { 1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50 };
        IntCode computer = new IntCode(exampleInput);
        int[] resultingOutput = computer.runProgram();
        int[] expectedOutput = { 3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50 };
        Assert.assertEquals(resultingOutput, expectedOutput, "Nope =(");
    }

    @Test(groups = "day2", description = "Test the intcode computer from example 2")
    public void testIntCodeExample2() {
        int[] exampleInput = { 1, 0, 0, 0, 99 };
        IntCode computer = new IntCode(exampleInput);
        int[] resultingOutput = computer.runProgram();
        int[] expectedOutput = { 2, 0, 0, 0, 99 };
        Assert.assertEquals(resultingOutput, expectedOutput, "Nope =(");
    }

    @Test(groups = "day2", description = "Test the intcode computer from example 3")
    public void testIntCodeExample3() {
        int[] exampleInput = { 2, 3, 0, 3, 99 };
        IntCode computer = new IntCode(exampleInput);
        int[] resultingOutput = computer.runProgram();
        int[] expectedOutput = { 2, 3, 0, 6, 99 };
        Assert.assertEquals(resultingOutput, expectedOutput, "Nope =(");
    }

    @Test(groups = "day2", description = "Test the intcode computer from example 4")
    public void testIntCodeExample4() {
        int[] exampleInput = { 2, 4, 4, 5, 99, 0 };
        IntCode computer = new IntCode(exampleInput);
        int[] resultingOutput = computer.runProgram();
        int[] expectedOutput = { 2, 4, 4, 5, 99, 9801 };
        Assert.assertEquals(resultingOutput, expectedOutput, "Nope =(");
    }

    @Test(groups = "day2", description = "Test the intcode computer from example 5")
    public void testIntCodeExample5() {
        int[] exampleInput = { 1, 1, 1, 4, 99, 5, 6, 0, 99 };
        IntCode computer = new IntCode(exampleInput);
        int[] resultingOutput = computer.runProgram();
        int[] expectedOutput = { 30, 1, 1, 4, 2, 5, 6, 0, 99 };
        Assert.assertEquals(resultingOutput, expectedOutput, "Nope =(");
    }

}
