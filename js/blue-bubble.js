var BlueBubbles=[];
var blueDeadBubbles = 0;
var	blueHalfdeadBubbles = 0;
var blueTotalBubbles = 0;

function setupOfBlueBubbles(){
	blueTotalBubbles += numberOfBubbles;
	for(var i = blueHalfdeadBubbles; i < blueTotalBubbles; i++){
		BlueBubbles[i]=new bubble();
		BlueBubbles[i].colourred = 77;
		BlueBubbles[i].colourblue = 126;
		BlueBubbles[i].colourgreen = 182;
	}
}

function drawOfBlueBubbles(){
	background(0,0,0,0);
	for (var i = blueHalfdeadBubbles; i < blueTotalBubbles; i++) {
		if(BlueBubbles[i].x < 1275 && BlueBubbles[i].x > 275){
    		fill('rgba(77,126,182,0.1)');
    	}
    	else{
    		fill('rgba(77,126,182,0.4)')
    	}
    	BlueBubbles[i].show();
		BlueBubbles[i].rise();
  	}
  	for(var i = blueDeadBubbles; i < blueHalfdeadBubbles; i++){
  		if(BlueBubbles[i].x < 1275 && BlueBubbles[i].x > 275){
    		fill('rgba(77,126,182,0.1)');
    	}
    	else{
    		fill('rgba(77,126,182,0.4)')
    	}
    	BlueBubbles[i].show();
		BlueBubbles[i].justRise(blueDeadBubbles);
  	}
}

function blueDeadBubblesAdder(){
	blueHalfdeadBubbles += numberOfBubbles;
}

/*function stopBlueRain() {
	for(var i = 0;i < BlueBubbles.length; i++){
		BlueBubbles[i].justFall(deadBubbles);
		BlueBubbles[i].show();
	}
}

function pauseBlueRain() {
	for(var i = 0;i < BlueBubbles.length; i++){
		BlueBubbles[i].show();
	}
}


var BlueBubbles=[];

function setupOfBlueBubbles(){
	for(var i=0;i<numberOfBubbles;i++){
		BlueBubbles[i]=new bubble();
		BlueBubbles[i].colourred = 77;
		BlueBubbles[i].colourblue = 126;
		BlueBubbles[i].colourgreen = 182;
	}
}

function drawOfBlueBubbles(){
	background(0,0,0,0);
	for (var i = 0; i < BlueBubbles.length; i++) {
		if(BlueBubbles[i].x < 1275 && BlueBubbles[i].x > 275){
    		fill('rgba(77,126,182,0.1)');
			BlueBubbles[i].rise();
    		BlueBubbles[i].show();
    	}
    	else {
    		fill('rgba(77,126,182,0.4)');
    		BlueBubbles[i].rise();
    		BlueBubbles[i].show();
    	}
	}
}

function stopBlueBubbles() {
	for(var i = 0;i < BlueBubbles.length; i++){
    	if(BlueBubbles[i].x < 1275 && BlueBubbles[i].x > 275){
    		fill('rgba(77,126,182,0.1)');
			BlueBubbles[i].justRise();
    		BlueBubbles[i].show();
    	}
    	else {
    		fill('rgba(77,126,182,0.4)');
    		BlueBubbles[i].justRise();
    		BlueBubbles[i].show();
    	}
	}
}

function pauseBlueBubbles() {
	for(var i = 0;i < BlueBubbles.length; i++){
		BlueBubbles[i].show();
	}
}*/