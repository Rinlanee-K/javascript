//En array tillsätts värde med []

index=Math.floor(Math.random()*3)

let fruits=["äpple","päron","banan"];

console.log(fruits[index]);
fruits[2]="kiwi";
console.log(fruits[2]);
console.log(fruits);
fruits.push("banana");
console.log(fruits);
//shift() och pop() tar ut första respektive sista medlemmen i arrayn
let eatFruits=fruits.shift();
console.log(eatFruits);
console.log(fruits);

//andra array metoder: reverse() sort() slice() concat() 

