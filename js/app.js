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
            //Gör om JSON till vanligt JavaScript-objekt
            var frageladan = JSON.parse(this.responseText);
            //SKapar en array av frågealternativen
            var alternativ = [frageladan.results[0].correct_answer,frageladan.results[0].incorrect_answers[0],frageladan.results[0].incorrect_answers[1],frageladan.results[0].incorrect_answers[2]];
            //Blandar alternativen
            shuffle(alternativ);
            
            //Skapar svarsalternativen
            var knapp = [];
                for (t = 0; t < alternativ.length; t++) {
                    var vilken ="alt"+t;
                    knapp[t] = document.getElementById(vilken);
                    knapp[t].innerHTML = alternativ[t];
                    knapp[t].addEventListener("click", function() {
                        var svar = this.innerHTML;
                        console.log(svar);
                        var ratt = frageladan.results[0].correct_answer;
                        kollaRatt(svar, ratt);
                    });
                    }
             
             //SKapar frågan
            var fraga = document.getElementById("fraga");
            var fraga1 = frageladan.results[0].question; 
            fraga.innerHTML = fraga1;
            
        }
    }
    xhr.send();

    function shuffle(array) {

        var currentIndex = array.length, temporaryValue, randomIndex;

        //While there remain elements to shuffle
        while (0 !== currentIndex) {

            //Pick a remaining element 
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            //And swap it with the current element 
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function kollaRatt(svar, ratt) {
        console.log(ratt);
        if(svar == ratt) {
            console.log("Du svarade rätt");
        }
        else {
            console.log("Du svarade fel");
        }
    }

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