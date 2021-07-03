var ball;
var m = 0;
var n = 0;
var gameOn = true;
var clearer = true;
var nhalf = 0;

function setup() {
	var canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	rectMode(CENTER);
	ball = new ball(windowWidth,windowHeight);
	document.getElementById("score").innerHTML = m + ' - ' + n;
}

function draw() {
	if(gameOn){
		clearer = true;
		strokeWeight(4);
		stroke(0,255,255);
		fill(0);
		rect(windowWidth/2,windowHeight/2,1000,500);
		noStroke();
		fill(0,255,255);
		var playerY;
		//making player racket within restraints
		if(mouseY > windowHeight/2 + 150)
			playerY = windowHeight/2 + 150;
		else if(mouseY < windowHeight/2 - 150)
			playerY = windowHeight/2 - 150;
		else
			playerY = mouseY;
		//when ball hits a wall (upper or lower)
		if(ball.positionY >= windowHeight/2 + 225 || ball.positionY <= windowHeight/2 - 225)
			ball.hitWall();

		if(ball.positionY >= windowHeight/2 + 150)
			racket_positionY = windowHeight/2 + 150;
		else if(ball.positionY <= windowHeight/2 - 150)
			racket_positionY = windowHeight/2 - 150;
		else
			racket_positionY = ball.positionY;
		//when ball hits bot racket
		if(ball.positionX <= windowWidth/2 - 425)
			ball.hitRacket();
		//when ball hits player racket
		if(ball.positionX >= windowWidth/2 + 425){
			if(ball.hitPlayer(playerY)){}
			else{
				n++;
				ball.reinitialize();
			}
		}
		rect(windowWidth/2-450,racket_positionY,25,200);
		rect(windowWidth/2+450,playerY,25,200);			//player racket
		circle(ball.positionX,ball.positionY,30);		//ball
		ball.updater();
		if(nhalf%30 == 0 && nhalf != 0){
			nhalf++
			m++;
		}
		document.getElementById("score").innerHTML = m + ' - ' + n;
	}
	else {
		if(clearer){
			clear();
			clearer = false;
		}
		/*remove();
		/*document.getElementById("gamePaused").innerHTML = "Game Paused";
		document.getElementById("restartGame").innerHTML = "Restart Game";
		document.getElementById("home").innerHTML = "Home";
		document.getElementById("menu").style.zIndex = "5";*/
	}
}

function ball(windowWidth, windowHeight) {
	this.positionX = windowWidth/2;
	this.positionY = windowHeight/2;
	this.speedX = 5;
	this.speedY = 0;
	this.hitWall = function() {
		this.speedY *= -1;
	}
	this.hitRacket = function() {
		this.speedX *= -1;
		nhalf++;
	}
	this.updater = function() {
		this.positionX += this.speedX;
		this.positionY += this.speedY;
		if(this.speedX>25){
		}
		else{
			this.speedX += this.speedX*0.0005;
		}
	}
	this.hitPlayer = function(playerY) {
		var diff;
		this.speedX *= -1;
		if(this.positionY >= playerY - 100 && this.positionY <= playerY + 100){
			diff = this.positionY - playerY;
		}
		else
			return false;
		this.speedY = map(diff,-100,100,-5,5);
		console.log(diff + "   " + this.speedY);
		return true;
	}
	this.reinitialize = function() {
		nhalf = 0;
		this.positionX = windowWidth/2;
		this.positionY = windowHeight/2;
		this.speedX = 5;
		this.speedY = 0;
	}
}

function openMenu() {
	gameOn = false;
	document.getElementById("closeMenu").style.display = "inline";
	document.getElementById("openMenu").style.display = "none";
	document.getElementById("menu").style.display = "inline";
	document.getElementById("menu").style.zIndex = "15";
}
function closeMenu(){
	gameOn = true;
	document.getElementById("closeMenu").style.display = "none";
	document.getElementById("openMenu").style.display = "inline";
	document.getElementById("menu").style.display = "none";
}