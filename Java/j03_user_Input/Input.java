// Reading data from the keyboard required a Java Scanner class.

package j03_user_input;

import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter any number : ");
        int a = sc.nextInt();
        System.out.println("You entered "+ a);

        String str = sc.nextLine();
        System.out.println(str);

        sc.close();
    }
}
