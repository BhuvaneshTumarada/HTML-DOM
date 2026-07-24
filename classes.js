class Student {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }

}
let s1 = new Student("Power Star");

s1.display();