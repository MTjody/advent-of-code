package com.github.mtjody._2019.day3;

public class Point {

    private int x;
    private int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    @Override 
    public boolean equals(Object other) {
        if (this == other) return true;
        if (!(other instanceof Point)) return false;
        Point otherPoint = (Point) other;

        return this.getX() == otherPoint.getX() 
            && this.getY() == otherPoint.getY();
    }
}