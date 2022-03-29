
document.getElementById("Send").addEventListener("click", function(){
let ListaCodici=[ 'YHDNU32', 'JANJC63',
 'PWKCN25', 'SJDPO96', 'POCIE24'
    ];

let Codice= document.getElementById("Code").value;
let ore= document.getElementById('Hours').value;
let PrezzoFinale=0;
let PrezzoBack= ore * 20.5;
let PrezzoFront=ore *15.3;
let PrezzoProject=ore*33.6;
let Scelta=document.getElementById('Work').value;
    if(Scelta=="Back-End Development"){
        PrezzoFinale=PrezzoBack;
    }else if(Scelta=="Front-End Development" ){
        PrezzoFinale=PrezzoFront;
    }else{
        PrezzoFinale=PrezzoProject;
    }
    if(ListaCodici.includes(Codice)){
        alert("Codice presente, avrai uno sconto del 25% !");
        PrezzoFinale= PrezzoFinale * 0.75;
    }else{
        alert("Mi dispiace, codice non presente !");
    } 
document.getElementById('risultato').innerHTML =  'Il prezzo finale è : '+  PrezzoFinale + ' €'  ;
});

