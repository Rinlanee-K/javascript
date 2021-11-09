let index=8;
console.log(4+4); //8
console.log(10-2); //8
console.log(4*2); //8
console.log(24/3); //8
console.log(2**3); //8
console.log(20%12); // 8 resten


//Uppgift 2
let farg = "Blå";
let langd = farg.length;

//String formating
console.log(`Bilen är ${farg} ${langd}.`);

//Upg 3
let höst=true;

if(höst){
    console.log("Potatis.");
}else{
    console.log("Ingen Potatis");
}


let frukt = 1;

if (frukt>0){
    console.log("Finns frukt kvar.")
}else if(frukt<0){
    console.log("Ingen frukt kvar")
}

let aland = {egenskap:"fint på sommaren, svenskspråkig, färjor, mycket hav,"};
console.log(aland.egenskap);

let varldshav = ["Stilla Havet", "Atlanten", "Indiska Oceanen", "Norra Ishavet", "Antarktiska Oceanen"];
let hav1=varldshav.shift();
console.log(hav1);
let hav2=varldshav.pop();
console.log(hav2);

varldshav.splice(1,0, "Ålandshav");
console.log(varldshav);


