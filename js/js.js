var clicks = 0;
var i = 1;
var user;
var score;


   function scoreadd() {
       clicks += i;
       document.getElementById("clicks").innerHTML = clicks;
   }

   var granny = 0;
   	function grannyClick(){
   		document.getElementById("clicks").innerHTML = clicks;
      if (clicks >= 2) {
        i = i += 1;
        clicks -= 2;
      }
      else{
       alert("Pas assez de points!");
      }
   	}

   function reset(){
user = prompt("nom");
score = clicks;

clicks = 0;
i = 1;
granny = 0;
alert(user + " votre score et " + score);
document.getElementById("clicks").innerHTML = clicks;
   }