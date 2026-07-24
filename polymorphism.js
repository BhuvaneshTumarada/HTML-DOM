class Animal {
    speak() {
        console.log("Animal Sound");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Bark");
    }
}
let d = new Dog();
d.speak();