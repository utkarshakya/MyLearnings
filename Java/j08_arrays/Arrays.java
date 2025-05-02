package j08_arrays;

public class Arrays {
    public static void main(String[] args) {

         int[] score; // Declaration Of Array.
         score = new int[5]; // Memory Allocation.
         score[0] = 90; // Initialization
         
         int[] marks = new int[5]; // Declaration + Memory Allocation
         marks[4] = 57; // Initialization

         int[] pinCode = {440022, 332211, 449900, 334455, 669901}; // Declaration + Initialization
         pinCode[0] = 111111; // Updating (Arrays are mutable)

         // These are the Three ways to create array in java i.e. : 
            // 1. Declaration then Memory Allocation then Initialization.
            // 2. Declaration and Memory Allocation then Initialization.
            // 3. Declaration and Initialization, Memory Allocated Automatically In This Case.

         System.out.println(score[0]);
         System.out.println(marks[4]);
         System.out.println(pinCode[0]);
    }
}
