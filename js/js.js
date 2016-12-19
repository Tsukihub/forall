var highscore = 0;
var clicks = 0;
var i = 1;
var z = 1;


function cookieCreate(scoreHaut) {
  document.cookie ='highscore='+scoreHaut+'; expires=Sun, 28 Feb 2040 00:00:00 UTC';//fonction qui créée le cookie
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  /*alert(ca);*///affiche tous les cookies
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}// fonction qui lit le cookie

if (readCookie("highscore")) {
highscore = readCookie("highscore");// si cookie existe lire cookie
// stcokage du cookie dans highscore
alert(highscore);
document.getElementById("high").innerHTML = highscore;}//affichage highscore dans le html 
else{cookieCreate(highscore);}//sinon on appelle la fonction créer cookie

   function scoreadd() {
       clicks += i;
       document.getElementById("clicks").innerHTML = clicks;
       if (highscore < clicks) {
        highscore = clicks;
        document.getElementById("high").innerHTML = clicks;
        cookieCreate(highscore);//appelle  de la fonction créér cookie 
      }
   }

   var granny = 0;
    function grannyClick(){
      document.getElementById("clicks").innerHTML = clicks;
      if (clicks >= 50) {
        i = i + 1;
        clicks -= 50;
        document.getElementById("clicks").value = clicks;
      }
      else{
       alert("Pas assez de cookies!");
      }
    }
     
     function ajout10() {
      document.getElementById("clicks").innerHTML = clicks;
      if (clicks >=100) {
        i= i + 10;
        clicks -= 100;
      }
      else {
        alert("Pas assez de cookies!");
      }
     }

    var nIntervId;
     function  autoclick() {
      if (nIntervId) return;
      if (clicks >= 200){
          clicks -= 200;
          nIntervId = setInterval(scoreadd, 1000);
          clicks = clicks + 1;

            }
            else {
              alert("Pas assez de cookies!");
            }
}

function reset(){
  clearInterval(nIntervId);
  nIntervId= null;
  granny = 0;
  document.getElementById("clicks").innerHTML = clicks;
  clicks = 0;
  i = 1;

 }

function myFunction() {
    document.getElementById("clicksForm").reset();
}
