var BlueDrops=[];
var canvas;

function setupOfBlueRain(){
	for(var i=0;i<numberOfDrops;i++){
		BlueDrops[i]=new drop();
		BlueDrops[i].colourred = 77;
		BlueDrops[i].colourblue = 126;
		BlueDrops[i].colourgreen = 182;
	}
}

function drawOfBlueRain(){
	background(0,0,0,0);
	for (var i = 0; i < BlueDrops.length; i++) {
		BlueDrops[i].fall();
    BlueDrops[i].show();
  }
}

function stopBlueRain() {
	for(var i = 0;i < BlueDrops.length; i++){
		BlueDrops[i].justFall();
		BlueDrops[i].show();
	}
}

function pauseBlueRain() {
	for(var i = 0;i < BlueDrops.length; i++){
		BlueDrops[i].show();
	}
}