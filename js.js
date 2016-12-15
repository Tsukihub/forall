var i = 1
var clicks = 0;
var granny = 1;


   function scoreadd() {
       clicks += i;
       document.getElementById("clicks").innerHTML = clicks;

   };


   	function grannyClick(){
   		document.getElementById("clicks").innerHTML = clicks;
   		if (clicks >= 2) {
   			i = i += 2;
   			clicks -= 2;
   		}
   		else{
   			alert("No more points to buy...");
   		}
   	};

	function res() {
			    var tb = document.getElementById('clicks');
			    tb.value = '';

	}