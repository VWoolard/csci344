const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:

    drawGrid(canvasWidth, canvasHeight);

    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);
    
}


// function definition goes here:
function drawMonster(x, y, size, color, isSurprised) {
    rectMode(CENTER);
    //make face
    fill(color);
    stroke('black')
    rect(x, y, size, size);
    //make eyeballs
    fill('white');
    stroke('black');
    const eyeXLeft = x-size/3;
    const eyeXRight = x+size/3;
    const eyeY = y - size / 4;
    const eyeBallWidth = size/5;
    const pupilWidth = size/10;

    rect(eyeXLeft, eyeY, eyeBallWidth, eyeBallWidth);
    rect(eyeXRight, eyeY, eyeBallWidth, eyeBallWidth);
    //make pupils
    fill('black');
    stroke('black');
    rect(eyeXLeft, eyeY+size/20, pupilWidth, pupilWidth);
    rect(eyeXRight, eyeY+size/20, pupilWidth, pupilWidth);
    //make mouth
    if (isSurprised === true) {
        //small mouth
        rect(x, y +size/4, size/4, size/4);
    } else {
        //frog mouth
        rect(x, y+size/4, size/1.5, size/5);
    };
};