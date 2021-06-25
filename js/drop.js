function drop() {
  this.x = random(width);
  this.y = random(-2000, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 2);
  this.weight = random(1,5);
  this.colourred = random(0,255);
  this.colourblue = random(0,255);
  this.colourgreen = random(0,255);
  this.grav = map(this.z, 0, 20, 0, 0.05);

  
  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + this.grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 1, 2);
      this.x = random(width);
    }
  };

  this.show = function() {
    stroke(this.colourred,this.colourblue,this.colourgreen);
    strokeWeight(this.weight);
    line(this.x, this.y, this.x, this.y + this.len);
  };

  this.justFall = function() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + this.grav;
  }
}