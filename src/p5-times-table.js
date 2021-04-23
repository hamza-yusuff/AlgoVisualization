let r;
let factor = 0;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('algo-times-table'); // div id inside html
    r = width / 2 - 16;
}

// getVector(index,total) returns a vector object
function getVector(index, total) {
    const angle = map(index % total, 0, total, 0, TWO_PI);
    const vect = p5.Vector.fromAngle(angle + PI);
    vect.mult(r);
    return vect;
}

function draw() {
    background(0);
    const total = 200;
    factor += 0.005;

    translate(width / 2, height / 2);
    stroke(255, 150);
    strokeWeight(2);
    noFill();
    ellipse(0, 0, r * 2);

    strokeWeight(2);

    //loops to find the product of each number in total (from 1 to 200)
    // and the factor value in that instant
    // then draws the line from the origin to the point in the circle
    // as per the coordinates of the vector objects v1 and v2
    for (let i = 0; i < total; i++) {
        const v1 = getVector(i, total);
        const v2 = getVector(i * factor, total);
        line(v1.x, v1.y, v2.x, v2.y);
    }

}