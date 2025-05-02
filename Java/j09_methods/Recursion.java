package j09_methods;

public class Recursion {
    static int factorial(int n){
        if(n == 2){
            return 2;
        }
        return n*factorial(n-1); // This is called recursion, method calling itself.
    }
    public static void main(String[] args) {
        int n = 5;
        System.out.println("Factorial of "+n+" = "+factorial(n));
    }
}