var canvas;

function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
}

function draw(){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);

	drawOfBlueRain();
	drawOfRedRain();
	drawOfBlueBubbles();
	drawOfRedBubbles();
	/*
	if(blueSwitch == 1)
		drawOfBlueRain();
	else
		stopBlueRain();

	if(redSwitch == 1)
		drawOfRedRain();
	else
		stopRedRain();


	if(blueBubbleSwitch == 1){
		drawOfBlueBubbles();
	}
	else{

		stopBlueBubbles();
	}

	if(redBubbleSwitch == 1){
		fill('rgba(226,92,91,0.4)')
		drawOfRedBubbles();
	}
	else{
		fill('rgba(226,92,91,0.4)')
		stopRedBubbles();
	}*/
}