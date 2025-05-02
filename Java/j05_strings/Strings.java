package j05_strings;

public class Strings {
    public static void main(String[] args){
        // String is a class in Java, but due to its high usage java provide a functionality to use it as a datatype.
        // Using string as a class...
        String name = new String("El Nino");
        // Using  string as a datatype...
        String country = "India";

        int a = 2;
        System.out.println(name);
        System.out.printf("%s is the %dnd largest Economy", country, a); // Since Java Comes from C Language Thats why it has the support of printf()
    }
    // NOTE: Strings Are Immutable And Cannot Be Changed.
}