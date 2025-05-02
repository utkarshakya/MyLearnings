package j07_loops_and_jump_statements;

public class BreakAndContinue {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 10) {
            System.out.println(i);
            i++;
            if(i == 5){
                continue;
            }
            if(i == 8){
                break;
            }
        }
    }
}
