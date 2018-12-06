let r, g, b;

function pickColor() {
    r = random(255);
    g = random(255);
    b = random(255);
}

function setup() {
    createCanvas(600, 400);
    pickColor();
}

function mousePressed() {
    pickColor();
}

function draw() {
    background(r, g, b);

    textSize(64);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    text('black', 150, 200);
    fill(255);
    text('white', 450, 200);

}