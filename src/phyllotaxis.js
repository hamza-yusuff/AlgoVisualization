var n = 0;
var c = 3;

var points = [];

var start = 0;

function setup() {
  var canvas = createCanvas(400, 400);
  // Move the canvas so it's inside our <div id="algo-phyll">.
  canvas.parent("algo-phyll");
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(n * 0.3);
  for (var i = 0; i < n; i++) {
    var a = i * 137.3;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    var hu = sin(start + i * 0.5);
    hu = map(hu, -1, 1, 0, 360);
    fill(hu, 255, 255);
    noStroke();
    ellipse(x, y, 4, 4);
  }
  n += 5;
  start += 5;
}

const animate = document.querySelector("#algo-phyll");

animate.addEventListener("click", () => {
  draw();
});
