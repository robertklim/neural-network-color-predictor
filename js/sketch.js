let r, g, b;
let nn;
let color_choice = 'black';

function pickColor() {
    r = random(255);
    g = random(255);
    b = random(255);
    redraw();
}

function mousePressed() {
    pickColor();
}

function setup() {
    createCanvas(600, 400);
    noLoop();
    nn = new NeuralNetwork(3, 3, 2);
    pickColor();
}

function colorPredictor(r, g, b) {
    let inputs = [r / 255, g / 255, b / 255]; // Set and normalize inputs
    let outputs = nn.feedforward(inputs);
    console.table(outputs);

    if (outputs[0] > outputs[1]) {
        return 'black';
    } else {
        return 'white';
    }
    // No NeuralNetwork
    // if (r + g + b > 300) {
    //     return 'black';
    // } else {
    //     return 'white';
    // }
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