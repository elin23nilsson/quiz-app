/*
var fragor = [
{
    fraga: "Hur många hoppjerkor finns det?",
    rattSvar: 1,
    alternativ: ["25","32","12","14"]
},
{
    fraga:"Vilken färg hade Gustav Vasas vita häst?",
    rattSvar: 2,
    alternativ: ["Blå","Brun","Vit","Gul"]
}
];
*/


//Gör en AJAX-request

var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple', true)
    xhr.onload = function(){
        if(this.status == 200) {
            var frageladan = JSON.parse(this.responseText);
            console.log(frageladan); 
            console.log(frageladan.results[0].question);
            var fraga = document.getElementById("fraga");
            var fraga1 = frageladan.results[0].question; 
            fraga.innerHTML = fraga1;
            
            console.log(frageladan.results[0].correct_answer);
            var fraga = document.getElementById("fraga");
            var fraga1 = frageladan.results[0].question; 
            fraga.innerHTML = fraga1;
        }
    }
    xhr.send();

//Förra gången
/*
console.log(fragor[1].fraga);
var fragetext = document.getElementById("fraga");
fragetext.innerHTML = fragor[0].fraga;

var knapp = [];
for (t = 0; t < fragor[0].alternativ.length; t++) {
    var vilken ="alt"+t;
    knapp[t] = document.getElementById(vilken);
    knapp[t].innerHTML = fragor[0].alternativ[t];
    }
*/


//Gammal kod som jag kan titta på
/*
var fraga = document.getElementById("fraga");
var coolfraga = "Hur många mackor åt Henrik till frukost?";
var alternativ = ["Tre","Fyra","Sex","Tjugo"];

for (i = 0; i < alternativ.length; i++) { 
console.log(alternativ[i]);
}

fraga.innerHTML = coolfraga; 
var knapp = [];
for (t = 0; t < alternativ.length; t++) {
var vilken ="alt"+t;
knapp[t] = document.getElementById(vilken);
knapp[t].innerHTML = alternativ[t];
}
*/

/*
console.log(fraga.innerHTML);
var knapp = document.getElementById("alt1");
knapp.addEventListener("click", function() {
console.log("Det var rätt")
fraga.innerHTML = "Hoppsan Hejsan";
}); 
*/