let NUM_OF_PARTICLES = 350;
let scroll = 0;
let particles = [];
let bgR = 255;
let bgG = 255;
let bgB = 255;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  background(bgR, bgG, bgB);
}

function draw() {
  console.log(window.scrollY);
  scroll = window.scrollY;

  if (scroll >= 0 && scroll < 315) {
    drawIntro();
  }
  if (scroll >= 315 && scroll < 559) {
    drawMiddle();
  }
  else if (scroll >= 559 && scroll < 1087) {
    drawTheme1();
  }
  else if (scroll >= 1087 && scroll < 1621) {
    drawTheme2();
  }
  else if (scroll >= 1621 && scroll < 2214) {
    drawTheme3();
  }
  else if (scroll >= 2214 && scroll < 2877) {
    drawTheme4();
  }
  else if (scroll >= 2877 && scroll < 3200) {
    drawTheme5();
  }
  else if (scroll >= 3200 && scroll < 5209) {
    drawTheme6();
  }
  else if (scroll >= 5209 && scroll < 7797) {
    drawTheme7();
  }
  else if (scroll >= 7797 && scroll < 9055) {
    drawTheme8();
  }
  else if (scroll >= 9055 && scroll < 10000) {
    drawTheme9();
  }
}
function drawIntro() {
  push();
  let freq1 = frameCount * 0.03; // blurry sun
  let sinVal1 = sin(freq1);
  let dia1 = map(sinVal1, -1, 1, 500, 600);
  let changingColor = map(sinVal1, -1, 1, 0, 140);

  bgR = map(scroll, 0, 3000, 255, 255);
  bgG = map(scroll, 0, 3000, 255, 255);
  bgB = map(scroll, 0, 3000, 255, 255);
  background(bgR, bgG, bgB, 50);

  particles.push(new Particle(mouseX, mouseY));
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
  }
  while (particles.length > NUM_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first "oldest" object.
  }

  rectMode(CENTER);
  if (mouseIsPressed === true) {
    fill(changingColor, 150, 190)
  } else {
    fill(changingColor)
  }
  push();
  textSize(300);
  textFont("ZCOOL QingKe HuangYou");
  text("周馨", width / 2.94
    , height / 2);
  pop();
  push();
  textFont("Khand")
  textSize(35);
  text("GALLERY", width / 2.19, height / 1.55)
  pop();
  pop();
}
function drawMiddle() {
  let freq1 = frameCount * 0.03; // blurry sun
  let sinVal1 = sin(freq1);
  let dia1 = map(sinVal1, -1, 1, 500, 600);
  let changingColor = map(sinVal1, -1, 1, 0, 140);
  bgR = map(scroll, 0, 3000, 255, 255);
  bgG = map(scroll, 0, 3000, 255, 255);
  bgB = map(scroll, 0, 3000, 255, 255);
  background(bgR, bgG, bgB, 50);
  particles.push(new Particle(mouseX, mouseY));
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.move();
    p.display();
  }
  while (particles.length > NUM_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first "oldest" object.
  }

  rectMode(CENTER);
  if (mouseIsPressed === true) {
    fill(changingColor, 150, 190)
  } else {
    fill(changingColor)
  }
}
function drawTheme1() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 80, 130);
  bgR = map(scroll, 3000, 3500, 50, 50);
  bgG = map(scroll, 3000, 3500, g, g);
  bgB = map(scroll, 3000, 3500, 50, 50);
  background(bgR, bgG, bgB, 50);
  x = width / 2;
  y = height / 2;
  noStroke();
  fill(255);
  circle(x, y, dia);
  pop();
}
function drawTheme2() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 200, 255);
  bgR = map(scroll, 3000, 3500, g, g);
  bgG = map(scroll, 3000, 3500, 150, 150);
  bgB = map(scroll, 3000, 3500, 150, 150);
  background(bgR, bgG, bgB, 50);
  x = width / 2;
  y = height / 2;
  noStroke();
  fill(255);
  circle(x, y, dia);
  pop();
}
function drawTheme3() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 60, 110);
  bgR = map(scroll, 3000, 3500, 20, 20);
  bgG = map(scroll, 3000, 3500, 70, 70);
  bgB = map(scroll, 3000, 3500, g, g);
  background(bgR, bgG, bgB, 50);
  x = width / 2;
  y = height / 2;
  noStroke();
  fill(255);
  circle(x, y, dia);
  pop();
}
function drawTheme4() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 200, 230);
  bgR = map(scroll, 3000, 3500, 150, 150);
  bgG = map(scroll, 3000, 3500, 200, 200);
  bgB = map(scroll, 3000, 3500, g, g);
  background(bgR, bgG, bgB, 50);
  x = width / 2;
  y = height / 2;
  noStroke();
  fill(255);
  circle(x, y, dia);
  pop();
}
function drawTheme5() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 100, 150);
  bgR = map(scroll, 3000, 3500, 230, 230);
  bgG = map(scroll, 3000, 3500, 200, 200);
  bgB = map(scroll, 3000, 3500, g, g);
  background(bgR, bgG, bgB, 50);
  x = width / 2;
  y = height / 2;
  noStroke();
  fill(255);
  circle(x, y, dia);
  pop();
}
function drawTheme6() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 80, 130);

  bgR = map(scroll, 3000, 3500, 255, 255);
  bgG = map(scroll, 3000, 3500, 255, 255);
  bgB = map(scroll, 3000, 3500, 255, 255);
  background(bgR, bgG, bgB, 50);

  if (mouseIsPressed === true) {
    background(50, g, 50, 50);
  } else {
    background(bgR, bgG, bgB, 50);
  }
  pop();
}
function drawTheme7() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 200, 230);

  bgR = map(scroll, 3000, 3500, 255, 255);
  bgG = map(scroll, 3000, 3500, 255, 255);
  bgB = map(scroll, 3000, 3500, 255, 255);
  background(bgR, bgG, bgB, 50);
  if (mouseIsPressed === true) {
    background(150, 200, g);
  } else {
    background(bgR, bgG, bgB, 50);
  }
  pop();
}
function drawTheme8() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 60, 110);
  bgR = map(scroll, 3000, 3500, 255, 255);
  bgG = map(scroll, 3000, 3500, 255, 255);
  bgB = map(scroll, 3000, 3500, 255, 255);
  background(bgR, bgG, bgB, 50);
  if (mouseIsPressed === true) {
    background(20, 70, g);
  } else {
    background(bgR, bgG, bgB, 50);
  }
  pop();
}
function drawTheme9() {
  push();
  let freq = frameCount * 0.015;
  let sinVal = sin(freq);
  let dia = map(sinVal, -1, 1, 1000, 1200);
  let g = map(sinVal, -1, 1, 100, 150);
  bgR = map(scroll, 3000, 3500, 255, 255);
  bgG = map(scroll, 3000, 3500, 255, 255);
  bgB = map(scroll, 3000, 3500, 255, 255);
  background(bgR, bgG, bgB, 50);
  if (mouseIsPressed === true) {
    background(230, 200, g);
  } else {
    background(bgR, bgG, bgB, 50);
  }
  pop();
}



class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpd = random(-0.5, 0.1);
    this.ySpd = random(-0.5, 0.1);
    this.dia = random(4, 20);
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  display() {

    let freq1 = frameCount * 0.03; // blurry sun
    let sinVal1 = sin(freq1);
    let dia1 = map(sinVal1, -1, 1, 500, 600);
    let changingColor = map(sinVal1, -1, 1, 40, 200);

    if (mouseIsPressed === true) {
      fill(200, 120, changingColor)
    } else {
      fill(changingColor)
    }

    push();
    noStroke();
    translate(this.x, this.y);
    circle(0, 0, this.dia);
    pop();
  }
}


function showPopup(name) {
  let divId = "popup-" + name;
  console.log(divId);

  let div = document.getElementById(divId);
  div.style.display = "flex";
}

function closePopup() {
  let divs = document.getElementsByClassName("pop-up");
  for (let i = 0; i < divs.length; i++) {
    let div = divs[i];
    div.style.display = "none";
  }
}