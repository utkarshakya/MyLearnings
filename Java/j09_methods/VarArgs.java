package j09_methods;

public class VarArgs {
    // VarArgs = Variable Arguments
    // when we want to pass variable value to any method we use VarArgs which is
    // ...name. Yes, this ... will make things easy.
    // Lets see.
    static int sum(int ...number) { // here ...number will create an array of all the values that are passed to it.
        int sum = 0;
        for (int i : number) {
            sum += i;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(sum(2, 2,2));
        System.out.println(sum(2, 3));
        System.out.println(sum(10));
        System.out.println(sum());
    }
}
