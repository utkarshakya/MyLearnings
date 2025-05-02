public class Literals{
    public static void main(String[] args){
        byte age = 23;
        char gender = 'M';
        long kingAge = 33444223764l;
        float roman = 2.3421f;
        double romania = 342.34523;
        boolean a = true;
        // Here 23 and M is a literals.
        // we have to add L/l and F/f at the end of a literal for long and float respectively. 

        System.out.println(age);
        System.out.println(gender);
        System.out.println(kingAge);
        System.out.println(roman);
        System.out.println(romania);
        System.out.println(a);

        String str = "king not always born"; // String is special type of literal.

        System.out.println(str);
    }
}