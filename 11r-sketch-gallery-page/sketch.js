function setup() {
  let canvas = createCanvas(700, 700);
  canvas.parent("canvasContainer");
  background(220);
}

function draw() {

  background(95, 108, 151);
  for (var x = random(200); x < width; x += random(200)) {
    //stars!
    for (var y = random(200); y < height; y += random(200)) {
      noStroke();
      fill(255);
      circle(x, y, 1.3);
    }
  }

  strokeWeight(300); //ground
  stroke(28, 74, 60);
  line(-100, 650, 900, 850);

  fill(205, 199, 188); //creature
  strokeWeight(0.5);
  translate(50, -70);
  scale(1.1);
  rotate(0.2);
  stroke(0);
  hindLeg2();
  tailFeathers(450, 400);
  catOwlBody();
  hindLeg1();
  frontLeg2();
  frontLeg1();
  head();
  wings(290, 325);
}

function wings(x, y) {
  //everything wings
  translate(x, y);

  let deg = map(sin(frameCount * 0.05), -1, 1, -5, 5);
  rotate(radians(deg));

  translate(-270, -325);

  for (let angle2 = 500; angle2 < 502.2; angle2 += 0.1) {
    //outer
    push();
    fill(195, 146, 104);
    translate(260, 150);
    rotate(angle2);
    ellipse(1, 70, 20, 180);
    pop();
  }

  for (let angle3 = 500; angle3 < 502.2; angle3 += 0.1) {
    //inner
    push();
    fill(139, 101, 75);
    translate(260, 150);
    rotate(angle3);
    ellipse(1, 70, 20, 120);
    pop();
  }

  push(); //cleanup for wings
  noStroke();
  fill(95, 108, 151);
  circle(250, 150, 35);
  pop();

  push();
  fill(215, 182, 160);
  ellipse(290, 320, 50);
  rectMode(CENTER);
  translate(300, 270);
  rotate(60);
  rect(-3, -3, 20, 70);
  rotate(-0.8);
  rect(-20, 80, 18, 120);
  pop();
}
function head(x, y) {
  push();
  fill(85);
  triangle(120, 150, 100, 250, 150, 250); //left ear
  fill(215, 182, 160);
  triangle(100, 250, 150, 325, 250, 250); //head
  fill(150);
  triangle(230, 150, 200, 250, 250, 250); //right ear
  push();
  fill(40);
  triangle(90, 260, 140, 270, 120, 280); //left eye
  triangle(170, 270, 230, 260, 200, 280); //right eye
  fill(105, 96, 80);
  triangle(145, 295, 155, 295, 150, 340); //beak
  pop();
}
function frontLeg1(x, y) {
  push();
  fill(100);
  triangle(190, 410, 230, 410, 150, 599); //front leg 1
  fill(50);
  triangle(150, 599, 130, 585, 120, 599); //front leg 1 paw
  pop();
}
function frontLeg2(x, y) {
  push();
  fill(94, 48, 48);
  triangle(190, 410, 230, 410, 250, 580); //front leg 2
  fill(50);
  triangle(250, 581, 230, 560, 220, 581); //front leg 2 paw
  pop();
}
function hindLeg1(x, y) {
  push();
  fill(94, 67, 48);
  triangle(490, 350, 415, 460, 500, 500); //pt1
  triangle(500, 500, 535, 500, 500, 599); //pt2
  fill(50);
  triangle(500, 600, 480, 580, 470, 600); //paw
  pop();
}
function hindLeg2(x, y) {
  push();
  fill(100);
  triangle(440, 350, 360, 460, 420, 500); //pt1
  fill(94, 48, 48);
  triangle(420, 500, 440, 480, 410, 580); //pt2
  fill(50);
  triangle(410, 580, 400, 560, 380, 580); //paw
  pop();
}
function tailFeathers(x, y) {
  push();
  translate(x, y);

  let deg = map(sin(frameCount * 0.05), -1, 1, -5, 5);
  rotate(radians(deg));

  translate(-450, -400);

  push();
  fill(139, 101, 75);
  for (let angle = 360; angle < 360.8; angle += 0.09) {
    push();
    translate(490, 285);
    rotate(angle);
    ellipse(20, -70, 20, 250);
    pop();
  }
  pop();

  pop();
}
function catOwlBody(x, y) {
  push(); //cleanup for tail feathers
  noStroke();
  fill(95, 108, 151);
  circle(450, 270, 75);
  pop();

  fill(146, 132, 122);
  rect(190, 285, 300, 125); //body

}

function buttonClicked() {
  console.log("Button Clicked!");
  background(random(255));
}
