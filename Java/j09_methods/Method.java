/*
 Method are similar to functions.
 A Method is a function written inside a class.
 Syntax:
 datatype name(parameter){
    Method body
 }
*/

package j09_methods;


public class Method {
    static int add(int a, int b){
        int r = a+b;
        return r;
    }
    // Here, if static keyword is not used then we can not directly call this method, because it then did't belongs the same class.
    // To call a methods which are not static we need to make objects, (also in case of if a method belongs to different class).

    public static void main(String[] args) {
        int b = add(3,4); // Here we call the method directly
        System.out.println(b);

        /*
        Method obj = new Method(); // Created an objects
        int c = obj.add(34,45); // Calling the method using object
        // Note this will not work when the method is static.
        */
    }
}