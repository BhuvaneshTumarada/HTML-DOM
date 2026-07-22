let set=new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20);               //duplicate value
console.log(set);
set.delete(20);
console.log(set);
console.log(set.has(10));
console.log(set.has(20));
console.log(set.size);
set.clear();
console.log(set);