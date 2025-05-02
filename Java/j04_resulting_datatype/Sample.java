package j05_resulting_datatype;

/*
Here is a list of how expressions with different datatype evaluated in java:
b + s --> int
s + i --> int
l + f --> float
i + f --> float
c + i --> int
c + s --> int
l + d --> double
f + d --> double
WHERE (b -> byte, s -> short, i -> integer, l -> long, f -> float, d -> double, c -> character)

NOTE: Refer to JavaPrecedenceAndAssociativity.gif file for Precedence and Associativity in Java.
*/
public interface Sample {
    public static void main(String[] args) {
        System.out.println(2.4f + 'A');
        System.out.println(4 + 'A');
        System.out.println(2.4f + 5);
        System.out.println(2.4f + 5.1d);
    }
}