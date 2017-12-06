var fraga = document.getElementById("fraga");
console.log(fraga.innerHTML);
var knapp = document.getElementById("knapp1");
knapp.addEventListener("click", function() {
console.log("Det var rätt")
fraga.innerHTML = "Hoppsan Hejsan";
}); 
