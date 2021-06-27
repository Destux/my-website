var RedBubbles=[];
var redDeadBubbles = 0;
var	redHalfdeadBubbles = 0;
var redTotalBubbles = 0;

function setupOfRedBubbles(){
	redTotalBubbles += numberOfBubbles;
	for(var i = redHalfdeadBubbles; i < redTotalBubbles; i++){
		RedBubbles[i]=new bubble();
		RedBubbles[i].colourred = 226;
		RedBubbles[i].colourblue = 92;
		RedBubbles[i].colourgreen = 91;
	}
}

function drawOfRedBubbles(){
	background(0,0,0,0);
	for (var i = redHalfdeadBubbles; i < redTotalBubbles; i++) {
		if(RedBubbles[i].x < 1275 && RedBubbles[i].x > 275){
    		fill('rgba(226,92,91,0.1)');
    	}
    	else{
    		fill('rgba(226,92,91,0.4)')
    	}
    	RedBubbles[i].show();
		RedBubbles[i].rise();
  	}
  	for(var i = redDeadBubbles; i < redHalfdeadBubbles; i++){
  		if(RedBubbles[i].x < 1275 && RedBubbles[i].x > 275){
    		fill('rgba(226,92,91,0.1)');
    	}
    	else{
    		fill('rgba(226,92,91,0.4)')
    	}
    	RedBubbles[i].show();
		RedBubbles[i].justRise(redDeadBubbles);
  	}
}

function redDeadBubblesAdder(){
	redHalfdeadBubbles += numberOfBubbles;
}

/*function stopRedRain() {
	for(var i = 0;i < RedBubbles.length; i++){
		RedBubbles[i].justFall(deadBubbles);
		RedBubbles[i].show();
	}
}

function pauseRedRain() {
	for(var i = 0;i < RedBubbles.length; i++){
		RedBubbles[i].show();
	}
}


var RedBubbles=[];

function setupOfRedBubbles(){
	for(var i=0;i<numberOfBubbles;i++){
		RedBubbles[i]=new bubble();
		RedBubbles[i].colourred = 77;
		RedBubbles[i].colourblue = 126;
		RedBubbles[i].colourgreen = 182;
	}
}

function drawOfRedBubbles(){
	background(0,0,0,0);
	for (var i = 0; i < RedBubbles.length; i++) {
		if(RedBubbles[i].x < 1275 && RedBubbles[i].x > 275){
    		fill('rgba(77,126,182,0.1)');
			RedBubbles[i].rise();
    		RedBubbles[i].show();
    	}
    	else {
    		fill('rgba(77,126,182,0.4)');
    		RedBubbles[i].rise();
    		RedBubbles[i].show();
    	}
	}
}

function stopRedBubbles() {
	for(var i = 0;i < RedBubbles.length; i++){
    	if(RedBubbles[i].x < 1275 && RedBubbles[i].x > 275){
    		fill('rgba(77,126,182,0.1)');
			RedBubbles[i].justRise();
    		RedBubbles[i].show();
    	}
    	else {
    		fill('rgba(77,126,182,0.4)');
    		RedBubbles[i].justRise();
    		RedBubbles[i].show();
    	}
	}
}

function pauseRedBubbles() {
	for(var i = 0;i < RedBubbles.length; i++){
		RedBubbles[i].show();
	}
}*/