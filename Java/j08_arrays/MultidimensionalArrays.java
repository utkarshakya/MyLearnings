package j08_arrays;

public class MultidimensionalArrays {
    public static void main(String[] args) {
        int [][] classRollNo = {{1,2,3,4,5}, {10,12,13,14}, {23,24,32,42}};
        System.out.println("This is the 2nd element of the 0th element of the array "+classRollNo[0][2]);
        for (int[] c : classRollNo) { // since element of classRollNo i.e. c is also an array.
            for (int rollNo : c) {
                System.out.print(rollNo+" ");
            }
            System.out.println();
        }
        // This is way to print 2d array from for each loop.
    }
}