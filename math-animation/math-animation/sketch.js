let a;
let b;
let c = 150;
let d = 0;
let e = 1;
let f = false;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  a = width / 2;
  b = height / 2;
  textFont('monospace');
}

function draw() {
  background(245);

  if (!f) {
    d = (d + e) % 360;
    if (d < 0) d += 360;
  }

  let g = a + c * cos(d);
  let h = b + c * sin(d);

  noFill();
  stroke(180);
  circle(a, b, c * 2);
  line(a, b, a + c, b);

  stroke(60, 120, 220);
  line(a, b, g, h);
  stroke(220, 80, 80);
  line(a, b, g, b);
  stroke(60, 170, 90);
  line(g, b, g, h);

  noStroke();
  fill(30);
  circle(a, b, 8);
  fill(220, 60, 60);
  circle(g, h, 28);

  fill(20);
  textSize(14);
  textAlign(LEFT, TOP);
  text('angle = ' + nf(d, 1, 1) + ' deg', 15, 15);
  text('cos(angle) = ' + nf(cos(d), 1, 3), 15, 35);
  text('sin(angle) = ' + nf(sin(d), 1, 3), 15, 55);
  text('dot x = ' + nf(g, 1, 1) + '   dot y = ' + nf(h, 1, 1), 15, 75);
  text('speed = ' + e + ' deg/frame', 15, 95);

  text('SPACE / click: pause   UP/DOWN: speed   R: reset', 15, height - 30);
  if (f) text('PAUSED', 15, 115);
}

function keyPressed() {
  if (key === ' ') f = !f;
  if (keyCode === UP_ARROW) e += 0.5;
  if (keyCode === DOWN_ARROW) e -= 0.5;
  if (key === 'r' || key === 'R') d = 0;
  return false;
}

function mousePressed() {
  f = !f;
}
