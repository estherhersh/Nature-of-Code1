var grasses;

function preload () {

	blade = loadImage("assets/grass1.png");

}

function makeBlade(x, y, w) { //x location, y locaiton, mass value
	this.pos = createVector(x,y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.angle = random(100,360);
	this.previousAngle = 0;

	this.weight = w;

	this.applyForce = function(force) {
	//this copy makes it so can apply the force to different objects without changing it's value
		var wind = force.copy();
		wind.div(this.weight);
		this.acc.add(wind + random(-1,1));

	}

	this.update = function() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.set(.01,.01);

	}

	this.spin = function() {
		angleMode(DEGREES);
		this.angle += .05 * this.weight; // image to rotate 1/2 degree every frame

		if (this.angle > 360){
			this.angle = 0;
		}

		translate(0, 0);
		rotate(this.angle);
		this.previousAngle = this.angle;

	}

	this.display = function() {
		imageMode(CENTER);


		grasses = image(blade,this.pos.x,this.pos.y,10,100);
			// ellipse(this.pos.x,this.pos.y, this.weight * 10,this.weight *10).fill(0,255,0).noStroke();

	}

	this.edges = function() {
		if (this.pos.y > height) {
			this.vel.y *= -1;
			this.pos.y = height;
		}
		if (this.pos.y < 0){
			this.vel.y *= -1;
			this.pos.y = 0;
		}
		if (this.pos.x > width - 50) {
			this.vel.x *= -1;
			this.pos.x = width-50;
		}

		if (this.pos.x < 0){
			this.vel.x *= -1;
			this.pos.x = 0;
		}
	}
}
