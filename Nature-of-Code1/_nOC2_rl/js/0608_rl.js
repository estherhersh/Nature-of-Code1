var grass = [];


function setup() {
	createCanvas(800,800);


	for (var i = 0; i < 800; i++){

		grass[i] = new makeBlade(random(width), random(height), random(.01));
	}
}


function draw() {
	background(255);

	for (var i = 0; i < height; i += 50){
		line(i, 0, i, height)
	}

	for (var i = 0; i < width; i += 50){
		line(0, i, width, i)
	}

	for (var i = 0; i < grass.length; i++) {
		grass[i].display();
		grass[i].spin();
		grass[i].edges();
		grass[i].update();


	}


}
