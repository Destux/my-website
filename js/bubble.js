function bubble() {
	this.x = random(width);
	this.y = random(height+50,height+100);
	this.z = random(0,20);
	this.radius = map(this.z, 0, 20, 100, 200);
	this.yspeed = map(this.radius, 100, 200, -1, -0.2);
	this.colourred = random(0,255);
	this.colourblue = random(0,255);
	this.colourgreen = random(0,255);
    this.weight = random(1,5);
    this.a = random(0,0.8);

	this.renew = function(){
		this.y = random(height+50,height+1000);
		this.yspeed = map(this.z, 0, 20, -1, -0.2);
		this.x = random(width);
		this.radius = map(this.z, 0, 20, 100, 200);
    }

	this.rise = function(){
		this.y = this.y + this.yspeed;

		if(this.y < -this.radius){
			this.renew();
		}
	}

	this.show = function() {
		stroke(this.colourred,this.colourblue,this.colourgreen);
    	strokeWeight(this.weight);
    	ellipse(this.x,this.y,this.radius);
	}

	this.justRise = function(deadBubbles) {
		this.y = this.y + this.yspeed;
		if(this.y > height + this.radius)
     		deadBubbles++;
    }
}