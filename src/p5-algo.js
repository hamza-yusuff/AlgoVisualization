let n = 0;
let d = 0;
let dSlider;

function setup() {
  var canvas = createCanvas(400, 400);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent("algo-rose");
  angleMode(DEGREES);
  // dSlider = createSlider(1,180,1);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  //d = dSlider.value();
  noFill();
  beginShape();
  strokeWeight(1);
  for (let i = 0; i < 361; i++) {
    let k = i * d;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape(CLOSE);

  noFill();
  stroke(255, 0, 255, 255);
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
    let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  n += 0.0099;
  d += 0.0029;
  if (n > 100 || d > 360) {
    n = 0;
    d = 0;
  }
}
