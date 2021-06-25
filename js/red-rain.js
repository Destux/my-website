var RedDrops=[];
var canvas;

function setupOfRedRain(){
	for(var i=0;i<numberOfDrops-75;i++){
		RedDrops[i]=new drop();
		RedDrops[i].colourred = 226;
		RedDrops[i].colourblue = 92;
		RedDrops[i].colourgreen = 91;
	}
}

function drawOfRedRain(){
	background(0,0,0,0);
	for (var i = 0; i < RedDrops.length; i++) {
		RedDrops[i].fall();
    RedDrops[i].show();
  }
}

function stopRedRain() {
	for(var i = 0;i < RedDrops.length; i++){
		RedDrops[i].justFall();
		RedDrops[i].show();
	}
}