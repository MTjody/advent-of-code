package com.github.mtjody._2019.day3;

import java.util.Objects;

public class Point {

    private int x;
    private int y;
    private int distanceTravelled;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getDistanceTravelled() {
        return distanceTravelled;
    }

    public void setDistanceTravelled(int distanceTravelled) {
        this.distanceTravelled = distanceTravelled;
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

    @Override
    public int hashCode() {
        return Objects.hash(x, y);
    }

    @Override
    public String toString() {
        return "(" + this.getX() + "," + this.getY() + ")";
    }
}