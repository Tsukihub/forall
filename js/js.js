var clicks = 0;
var i = 1;
      function reset(){

clicks = 0;
document.getElementById("clicks").innerHTML = clicks;
   }

   function scoreadd() {
       clicks += i;
       document.getElementById("clicks").innerHTML = clicks;
   }

   var granny = 0;
   	function grannyClick(){
   		document.getElementById("clicks").innerHTML = clicks;
      if (clicks >= 50) {
        
        i = i + 1;
        clicks -= 50;
      }
      else{
       alert("Pas assez de points!");
      }
   	}

   function reset(){

clicks = 0;
i = 1;
granny = 0
document.getElementById("clicks").innerHTML = clicks;
   }