package j06_conditionals_and_operators;

public class IfElse {
    public static void main(String[] args) {
        int age = 16;
        if (age>18) {
            System.out.println("You Can Drive.");
        }
        else if(age >= 16){
            System.out.println("You can drive but Parent Guide Required.");
        }
        else{
            System.out.println("Sorry! You are not eligible to drive.");
        }
    }
}
