var RedBubbles=[];

function setupOfRedBubbles(){
	for(var i=0;i<numberOfBubbles-10;i++){
		RedBubbles[i]=new bubble();
		RedBubbles[i].colourred = 226;
		RedBubbles[i].colourblue = 92;
		RedBubbles[i].colourgreen = 91;
	}
}

function drawOfRedBubbles(){
	background(0,0,0,0);
	for (var i = 0; i < RedBubbles.length; i++) {
		if(RedBubbles[i].x < 1275 && RedBubbles[i].x > 275){
    		fill('rgba(226,92,91,0.1)');
			RedBubbles[i].rise();
    		RedBubbles[i].show();
    	}
    	else {
    		fill('rgba(226,92,92,0.4)');
    		RedBubbles[i].rise();
    		RedBubbles[i].show();
    	}
	}
}

function stopRedBubbles() {
	for(var i = 0;i < RedBubbles.length; i++){
		if(RedBubbles[i].x < 1275 && RedBubbles[i].x > 275){
    		fill('rgba(226,92,91,0.1)');
			RedBubbles[i].justRise();
    		RedBubbles[i].show();
    	}
    	else {
    		fill('rgba(226,92,91,0.4)');
    		RedBubbles[i].justRise();
    		RedBubbles[i].show();
    	}	
    }
}

function pauseRedBubbles() {
	for(var i = 0;i < RedBubbles.length; i++){
		RedBubbles[i].show();
	}
}