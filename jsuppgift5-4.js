
    let bokstav = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
    let skyltar = [];
    let skylt = "";
    let bokstavIndex, slumpSiffra;

    //Skapar 1000 olika registeringsskyltar t.ex. KJG-042
    for(let i=0;i<1000;i++){
        //Skapar bokstäver som är i grupp om 3 t.ex. GMA
        for(let j=0;j<3;j++){
            bokstavIndex=Math.floor(Math.random()*bokstav.length);
            skylt=skylt+bokstav[bokstavIndex];
        }
       skylt+="-";
       //Skapar random siffror till skyltarna t.ex. 535
        for(let k=0;k<3;k++){
            slumpSiffra= Math.floor(Math.random()*10);
            skylt=skylt+(slumpSiffra);
    }
    /*Om skylten inte finns lägger den till 
    skylten i arrayn skyltar, om skyltens kombination finns 
    då backar loopen ett steg så att skylten kan göras om.
    */
    if(!skyltar.includes(skylt)){
            skyltar.push(skylt);
    } else {
        i--;
    }

    skylt="";
}


//Delar upp skyltarna i 4 kolumner och skriver ut den i consolen.
    for(let i=0;i<1000;i++){
        console.log(`[${skyltar[i++]}] [${skyltar[i++]}] [${skyltar[i++]}] [${skyltar[i]}]`);
    }

    
