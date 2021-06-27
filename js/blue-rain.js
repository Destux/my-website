var BlueDrops=[];
var blueDeadDrops = 0;
var	blueHalfdeadDrops = 0;
var blueTotalDrops = 0;

function setupOfBlueRain(){
	blueTotalDrops += numberOfDrops;
	for(var i = blueHalfdeadDrops; i < blueTotalDrops; i++){
		BlueDrops[i]=new drop();
		BlueDrops[i].colourred = 77;
		BlueDrops[i].colourblue = 126;
		BlueDrops[i].colourgreen = 182;
	}
}

function drawOfBlueRain(){
	background(0,0,0,0);
	for (var i = blueHalfdeadDrops; i < blueTotalDrops; i++) {
		BlueDrops[i].fall();
    	BlueDrops[i].show();
  	}
  	for(var i = blueDeadDrops; i < blueHalfdeadDrops; i++){
		BlueDrops[i].justFall(blueDeadDrops);
		BlueDrops[i].show();
  	}
}

function blueDeadDropsAdder(){
	blueHalfdeadDrops += numberOfDrops;
}

/*function stopBlueRain() {
	for(var i = 0;i < BlueDrops.length; i++){
		BlueDrops[i].justFall(deadDrops);
		BlueDrops[i].show();
	}
}

function pauseBlueRain() {
	for(var i = 0;i < BlueDrops.length; i++){
		BlueDrops[i].show();
	}
}*/