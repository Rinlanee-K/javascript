let slumpTal = Math.floor(Math.random()*100)+0;

console.log(slumpTal);

let alder = 18;

if (alder>18){
    console.log("Myndig")
}else if(alder<18){
    console.log("Minderårig")
}

let side = Math.floor(Math.random()*6)+1;

switch(side){
    case(1):
    console.log("Ett");
    break;
    case(2):
    console.log("Två");
    break;
    case(3):
    console.log("Tre");
    break;
    case(4):
    console.log("Fyra");
    break;
    case(5):
    console.log("Fem");
    break;
    case(6):
    console.log("Sex");
    break;
}


for(let i=17;i>=0;i--){
    console.log(i);
}

for(let i=0;i<18;i++){
    console.log(i);
}

for(let i=147;i>=134;i--){
    console.log(i);
}

index=Math.floor(Math.random()*5)

let namn=["Din","Mamma","Bror","Gunnel"];
for(let i=0; i<namn.length; i++){
    console.log(namn[i]);
}


let ord="keihanaikukauakahihuliheekahaunaele";
let Array=[];

for(let i=0;i< ord.length;i++){
        Array.push(ord.charAt(i));
}
console.log(Array);

for(let i=0;i< ord.length;i++){
    console.log(Array[i]);
}