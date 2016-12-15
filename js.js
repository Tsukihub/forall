var i = 1
var clicks = 0;
   function scoreadd() {
       clicks += 1;
       document.getElementById("clicks").innerHTML = clicks;

   };

   var granny = 0;
   	function grannyClick(){
   		clicks = clicks + 4;
   		document.getElementById("clicks").innerHTML = clicks;
   	};