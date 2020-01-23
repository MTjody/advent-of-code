package com.github.mtjody._2019.day2;

public class IntCode2 {
    private static final int NOUN = 1;
    private static final int VERB = 2;

    public static void main(String[] args) {
        IntCode computer = new IntCode();

        int[] initialMemory = computer.getMemory();

        // What pair of inputs below [0-99 inclusive] produce 19690720 ?
        // What is 100 * noun + verb?
        for (int i = 0; i <= 99; i++) {
            for (int j = 0; j <= 99; j++) {
                int[] alteredMemory = initialMemory.clone();
                alteredMemory[NOUN] = i;
                alteredMemory[VERB] = j;
                computer.setMemory(alteredMemory);
                int[] result = computer.runProgram();
                if (result[0] == 19690720) {
                    System.out.println("Noun is: " + i + ", Verb is: " + j);
                    System.out.println("100 * noun + verb is: " + (i * 100 + j));
                    System.exit(0);
                };
            }
        }
    }

}
