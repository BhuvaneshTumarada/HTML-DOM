function person(name,age){
    this.name=name;
    this.age=age;
}
var p1=new person("Ram",20);
console.log(p1.name);
console.log(p1.age);
var p2=new person("Ravi",21);
console.log(p2.name);
console.log(p2.age);
console.log(p1 instanceof person);