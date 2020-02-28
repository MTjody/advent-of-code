package com.github.mtjody.day2;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.stream.Stream;

public class IntCode {

    // Opcodes
    private static final int ADD = 1;
    private static final int MULTIPLY = 2;
    private static final int HALT = 99;

    private int[] memory;

    public IntCode() {
        String fileName = getClass().getClassLoader().getResource("day2/input.txt").getFile();

        try (Stream<String> lines = Files.lines(Paths.get(fileName))) {
            String[] codeList = lines.findFirst().get().split(",");

            setMemory(Arrays.asList(codeList).stream().mapToInt(Integer::valueOf).toArray());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Can be used for testing, e.g. so that file reading is excluded from tests.
    public IntCode(int[] initialMemory) {
        setMemory(initialMemory);
    }

    public int[] getMemory() {
        return memory;
    }

    public void setMemory(int[] memory) {
        this.memory = memory;
    }

    public int[] runProgram() {
        for (int i = 0; i < memory.length; i = i + 4) {
            switch (memory[i]) {
                default: {
                    throw new IllegalArgumentException(
                            "The opcode was not one of 1, 2, or 99. Index: " + i + ". Value:" + memory[i]);
                }
                case HALT: {
                    System.out.println("Program came to a halt. Result:" + memory[0]);
                    return memory;
                }
                case ADD: {
                    int firstAddress = memory[i + 1];
                    int secondAddress = memory[i + 2];
                    int outputAddress = memory[i + 3];

                    memory[outputAddress] = memory[firstAddress] + memory[secondAddress];
                    break;
                }
                case MULTIPLY: {
                    int firstAddress = memory[i + 1];
                    int secondAddress = memory[i + 2];
                    int outputAddress = memory[i + 3];

                    memory[outputAddress] = memory[firstAddress] * memory[secondAddress];
                    break;
                }
            }
        }
        return memory;
    }

    public static void main(String[] args) {
        IntCode computer = new IntCode();

        int[] initialMemory = computer.getMemory();

        int[] alteredMemory = initialMemory;
        alteredMemory[1] = 12;
        alteredMemory[2] = 2;
        computer.setMemory(alteredMemory);
        computer.runProgram();
    }
}
