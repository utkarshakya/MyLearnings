package j06_conditionals_and_operators;

import java.util.Scanner;

public class SwitchCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a day number : ");
        int n = sc.nextInt();
        switch (n) {
            case 1:
                System.out.println("Monday");
                break; // This will break the switch and come out of it. If we don't use it then all statements comes after any true case executed including default case.
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid! Day Number");
                break;
        }

        /*
        switch (n) {
            case 1 -> {
                System.out.println("Monday");
            }
            case 2 -> System.out.println("Tuesday");
            case 3 -> System.out.println("Wednesday");
            case 4 -> System.out.println("Thursday");
            case 5 -> System.out.println("Friday");
            case 6 -> System.out.println("Saturday");
            case 7 -> System.out.println("Sunday");
            default -> System.out.println("Invalid! Day Number");
        }
        */
        // This Is Called Enhanced Switch. And This Do Not Required break, You can uncomment it to check.
        
        sc.close();
    }
}
