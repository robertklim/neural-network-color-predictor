let r, g, b;
let nn;
let color_choice = 'black';

function pickColor() {
    r = random(255);
    g = random(255);
    b = random(255);
    redraw();
}

function setup() {
    createCanvas(600, 400);
    noLoop();
    nn = new NeuralNetwork(3, 3, 2);

    // initial training
    for (let i = 0; i < 100000; i++) {
        let r = random(255);
        let g = random(255);
        let b = random(255);
        let targets = trainColor(r, g, b);
        let inputs = [r / 255, g / 255, b / 255];
        nn.train(inputs, targets);
    }

    pickColor();
}

function mousePressed() {
    // manual training
    // let targets;

    // if (mouseX > width / 2) {
    //     targets = [0, 1];
    // } else {
    //     targets = [1, 0];
    // }
    
    // let inputs = [r / 255, g / 255, b / 255];
    
    // nn.train(inputs, targets);
    
    pickColor();
}

function colorPredictor(r, g, b) {
    console.log(floor(r + g + b));
    let inputs = [r / 255, g / 255, b / 255]; // Set and normalize inputs
    let outputs = nn.feedforward(inputs);

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

function trainColor(r, g, b) {
    // learn to predict color using 300 threshold
    // black > 300 > white
    if (r + g + b > 300) {
        return [1, 0];
    } else {
        return [0, 1];
    }
}

function draw() {
    background(r, g, b);

    // draw vertical line
    strokeWeight(2);
    stroke(0);
    line(width / 2, 0, width / 2, height);

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