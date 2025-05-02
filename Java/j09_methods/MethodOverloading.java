package j09_methods;

public class MethodOverloading {
    // static methods are shared to all in a class, we don't need to make object for that.
    // Array and Object is passed by reference to a method.

    // Method Overloading : Two or more methods can have same name but different parameters is known as method overloading.

    static void king(String city){
        System.out.println("King lives in "+city);
    }
    
    static void king(int pin){
        System.out.println("King your secret code : "+pin);
    }

    public static void main(String[] args) {
        king("New York");
        king(849741);

        // Since the datatype of the parameters of the methods are different that's why it is working, if all things were same then this will not work.
        // Name of the parameter does't make any different, it has to be the datatype of the parameter.
        // For Example:
            // static void king(String city){}
            // and
            // static void king(String power){}
        // don't work because the datatype in both the methods is String (name of the parameter don't make any change, even if it is same or not).

        // Method overloading can be done by:
        // 1. Changing the number of parameters of the methods.
        // 2. Changing the datatype of the parameter (if the number of parameters in both methods are same).
        
        // Note: It cannot be done by changing the datatype of the methods.
        // e.g. : static int hola(){}; static void hola(){}; --> This is invalid.
    }
}
