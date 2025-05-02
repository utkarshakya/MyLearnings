package j08_arrays;

public class ArrayTraversal {
    public static void main(String[] args) {
        int[] marks = { 23, 42, 23, 53, 54 };
        int length = marks.length; // Arrays have length property.

        // To traverse an array we have forEach loop here in java. We can use any loop accordingly.
        for (int i : marks) { // This is for each loop
            System.out.print(i+" ");
        }
        System.out.println("\nLength of this array : "+length);
    }
    
}
