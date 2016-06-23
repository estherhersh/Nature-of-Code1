var unit = 10;
var count;
var w = [];
var mouse;
var distance;
var dotfill;


function setup() {
  createCanvas(720, 360);
  noStroke();
  var wideCount = width / unit;
  var highCount = height / unit;
  count = wideCount * highCount;

  var index = 0;
  for (var y = 0; y < highCount; y++) {
    for (var x = 0; x < wideCount; x++) {
      w[index++] = new Walker(x * unit, y * unit);

    }
  }
}

function draw() {
  background(200)
  for (var i = 0; i < count; i++) {
    w[i].update();
    w[i].display();
  }
}


function Walker(x, y) {
  this.x = x
  this.y = y
  this.pos = createVector(this.x, this.y);
  this.vel = createVector(0, 0);

}

Walker.prototype.update = function() {
  var mouse = createVector(mouseX, mouseY);
  //static subtraction. doesnt change the variable its subtracting from 
  this.acc = p5.Vector.sub(mouse, this.pos);
  this.acc.setMag(-1);

  var distance = p5.Vector.dist(mouse, this.pos);

  if (distance < 25) {
    dotfill = color(255,0,200,100)
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  } else {
    for (var x = 0; x < width; x += 50)
      dotfill = color(255, 0, 200)
  }
}

Walker.prototype.display = function() {
  fill(dotfill);
  ellipse(this.pos.x, this.pos.y, 10, 10);
}