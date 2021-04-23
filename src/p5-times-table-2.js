let r;
let factor = 0;

let slider;

function setup() {
    var canvas = createCanvas(400, 400);
    slider = createSlider(0, 200);
    slider.parent('slider');
    slider.style('width', '80px');
    canvas.parent('algo-times-table-2'); // div id inside html
    r = width / 2 - 16;
}

function getVector(index, total) {
    const angle = map(index % total, 0, total, 0, TWO_PI);
    const vect = p5.Vector.fromAngle(angle + PI);
    vect.mult(r);
    return vect;
}

function draw() {
    background(0);
    const total = 200; //int(map(mouseX, 0, width, 0, 200));
    let val = slider.value();
    factor = val;
    let factor_val = document.getElementById('slider-val');
    factor_val.innerText = 'FACTOR VALUE : ' + factor;

    translate(width / 2, height / 2);
    stroke(255, 150);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, r * 2);

    strokeWeight(2);
    for (let i = 0; i < total; i++) {
        const a = getVector(i, total);
        const b = getVector(i * factor, total);
        line(a.x, a.y, b.x, b.y);
    }

}