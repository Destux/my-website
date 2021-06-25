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
}