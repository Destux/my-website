var RedDrops = [];
var redDeadDrops = 0;
var	redHalfdeadDrops = 0;
var redTotalDrops = 0;

function setupOfRedRain(){
	redTotalDrops += numberOfDrops;
	for(var i = redHalfdeadDrops; i < redTotalDrops; i++){
		RedDrops[i]=new drop();
		RedDrops[i].colourred = 226;
		RedDrops[i].colourblue = 92;
		RedDrops[i].colourgreen = 91;
	}
}

function drawOfRedRain(){
	background(0,0,0,0);
	for (var i = redHalfdeadDrops; i < redTotalDrops; i++) {
		RedDrops[i].fall();
    	RedDrops[i].show();
  	}
  	for(var i = redDeadDrops; i < redHalfdeadDrops; i++){
		RedDrops[i].justFall(redDeadDrops);
		RedDrops[i].show();
  	}
}

function redDeadDropsAdder(){
	redHalfdeadDrops += numberOfDrops;
}

/*function stopRedRain() {
	for(var i = 0;i < RedDrops.length; i++){
		RedDrops[i].justFall(deadDrops);
		RedDrops[i].show();
	}
}

function pauseRedRain() {
	for(var i = 0;i < RedDrops.length; i++){
		RedDrops[i].show();
	}
}*/