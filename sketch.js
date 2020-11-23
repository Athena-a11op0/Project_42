var hr, min, sc;
var hrAngle, minAngle, scAngle;

function setup() {
  createCanvas(700,700);
  //createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(300, 300);
  rotate(-90);

  hr = hour();
  min = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(8);
  line(0, 0, 160, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(0, 255, 0);
  strokeWeight(8);
  line(0, 0, 130, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(8);
  line(0, 0, 90, 0);
  pop();

  point(0, 0);
  stroke(255, 0, 255);
  
  strokeWeight(10);
  noFill();

  stroke(255, 0, 0);
  arc(0, 0, 400, 400, 0, scAngle);

  stroke(0, 255, 0);
  arc(0, 0, 380, 380, 0, minAngle);

  stroke(0, 0, 255);
  arc(0, 0, 360, 360, 0, hrAngle);

  drawSprites();
}
