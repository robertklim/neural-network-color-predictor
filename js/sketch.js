let r, g, b;
let nn;
let color_choice = 'black';

function pickColor() {
    r = random(255);
    g = random(255);
    b = random(255);
}

function mousePressed() {
    pickColor();
}

function setup() {
    createCanvas(600, 400);
    pickColor();

    nn = new NeuralNetwork(3, 3, 2);
}

function colorPredictor(r, g, b) {
    if (r + g + b > 300) {
        return 'black';
    } else {
        return 'white';
    }
}

function draw() {
    background(r, g, b);

    textSize(64);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    text('black', 150, 150);
    fill(255);
    text('white', 450, 150);

    color_choice = colorPredictor(r, g, b);

    if (color_choice === 'black') {
        fill(0);
        ellipse(150, 250, 50);
    } else {
        fill(255);
        ellipse(450, 250, 50);
    }

}