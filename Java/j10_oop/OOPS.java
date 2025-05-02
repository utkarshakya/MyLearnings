// Solving a problem by creating objects is one of the most popular approaches in programming. This is called object-oriented programming.
// Use DRY (Do not repeat yourself)
// Class : A class is a blueprint for creating objects.
// Object : An object is an instantiation of a class.

// Basic Terminology:
// 1. Abstraction --> Hiding Internal Details (Show only essential info!) like using a phone without bothering about how it made.
// 2. Encapsulation --> The act of putting various components together (in a capsule) like laptop encapsulates speaker, screen, keyboard, mouse and wifi etc in a single entity.
// 3. Inheritance --> The act of driving new things from the existing things like Smartphones From Phones. (**It actually implements DRY)
// 4. Polymorphism --> One entity but many forms like smartphone can be used as camera, calculator, mp3 player, video player etc.

package j10_oop;

class marvelHeroes { // Class Or more specifically custom class

    // These are attributes given below
    String name;
    String genre;
    int HP;
    int attack;

    void show() { // This is method
        System.out.println("Name: "+name);
        System.out.println("Class: "+genre);
        System.out.println("HP: "+HP);
        System.out.println("Attack: "+attack);
    }
}

public class OOPS {
    public static void main(String[] args) {
        marvelHeroes Wanda = new marvelHeroes();
        Wanda.name = "Scarlet Witch";
        Wanda.genre = "Mystic";
        Wanda.HP = 670;
        Wanda.attack = 795;
        Wanda.show();
    }
}
