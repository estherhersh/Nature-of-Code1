var boat;
var ocean;
var circle;

function preload () {

	boat = loadImage("assets/boat.png");

}

function setup() {
	createCanvas(800,800);
	sailing = new Sailor();
	waving = new Wave();

}

function draw() {
	background(255);

	waving.display();
	sailing.update();
	sailing.display();

}

function Wave() {
	var xoff = 0.0;
	var xincrement = 0.00005;

		this.pos = createVector(0,0);
		this.display = function() {

			for (var i = 0; i < height; i +=10){
				line(i, 0, i, height)
			}

				for (var i = 0; i < height; i+=10) { //this loop makes the lines
					var kennyp = noise(xoff) * width;
					xoff += xincrement;
						line(this.pos.x , i + kennyp , width, i + kennyp);

					}
				}

}



function Sailor() { //this is the walker object! ObjectOrientedP!

	this.pos = createVector(width/2, height/2);
	this.vel = createVector(0,0);

	this.update = function() {
			var mouse = createVector(mouseX, mouseY);
			this.acc = p5.Vector.sub(mouse, this.pos);// == this.x,this.y
				this.acc.normalize();
				this.acc.mult(0.05);
			this.vel.add(this.acc); //acceleration changes velocity
			this.pos.add(this.vel); //velocity changes position


		}


	this.display = function() {
		for (var i = 0; i < 20; i++){
			image(boat,  i * this.pos.x ,this.pos.y, 100,100);
		}
	}
}
