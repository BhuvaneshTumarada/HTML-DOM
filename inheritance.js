class Animal {
    speak() {
        console.log("Animal Sound");
    }
}
class Dog extends Animal {
}
let d = new Dog();
d.speak();