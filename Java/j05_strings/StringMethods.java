package j05_strings;

public class StringMethods {
    public static void main(String[] args) {
        /*
         * Some of the commonly used String methods are :
         * .length()
         * .toLowerCase()
         * .toUpperCase()
         * .trim() --> removes leading and trailing whitespaces
         * .substring(int start, int end) --> returns a substring from start to end-1, start index is included but end index is excluded
         * .replace(old, new) --> returns a string after replacing the specified character or string (it replaces all occurrences and it is case sensitive)
         * .startsWith()
         * .charAt(int index)
         * .indexOf(str/char, int starts-from) --> returns first occurrence index (starts-from tells from where to start searching)
         * .lastIndexOf(str/char, int starts-from) --> returns the last occurrence index (Note: both returns -1 if character or string not found)
         * .equals() --> returns true or false (case sensitive)
         * .containes(char/str) --> returns true if string contains the char or string given otherwise returns false
        */
        String name = " La Nino";

        System.out.println("Length = "+name.length());
        System.out.println("Lower Case = "+name.toLowerCase());
        System.out.println("Upper Case = "+name.toUpperCase());
        System.out.println("Trimmed     = "+name.trim());
        System.out.println("Substring1 if end is not specified = "+name.substring(4));
        System.out.println("Substring1 if end is specified = "+name.substring(4, 6));
        System.out.println("Replaced String = "+name.replace("La", "El"));
        System.out.println("Replaced String only a character = "+name.replace('n', 'x'));
        System.out.println("Starts With Nino = "+name.startsWith("Nino"));
        System.out.println("Ends With Nino = "+name.endsWith("Nino"));
        System.out.println("Character At Index 1 = "+name.charAt(1));
        System.out.println("Index of N = "+name.indexOf("N"));

        String tempName = " La NiNo";

        System.out.println("Index of N when searching starts from 5th index = "+tempName.indexOf('N', 5));
        System.out.println("Index of N using lastIndexOf = "+tempName.lastIndexOf('N'));

        System.out.println("Does 'La Nino' is equals to 'La NiNo' = "+name.equals(tempName));
        System.out.println("Does 'La Nino' is equals to 'La NiNo' (if equalsIgnoreCase) = "+name.equalsIgnoreCase(tempName));
    }
}
