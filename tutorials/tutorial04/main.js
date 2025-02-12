let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

// in p5.js, the function runs on page load:
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // invoke any drawing functions inside of setup.
    // functions should all go between "createCanvas()" and "drawGrid()"

    // drawNCirclesFlexible(4, 100, 100, 200);
    // drawNCirclesFlexible(8, 50, 700, 100);
    // drawNShapesFlexible(30, 30, 335, 0, "square");
    // drawNShapesFlexible(4, 100, 120, 200, "circle");
    // drawNShapesFlexible(8, 50, 725, 25, "square");
    // drawNShapesDirectionFlexible(30, 30, 335, 0, "square", "column");
    // drawNShapesDirectionFlexible(4, 100, 120, 200, "circle", "row");
    // drawNShapesDirectionFlexible(8, 50, 725, 425, "circle", "row");
    drawNShapesDirectionFlexible(100, 10, 90, 30, "circle", "row", "red");
    drawNShapesDirectionFlexible(40, 10, 90, 30, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 50, "circle", "row", "red");
    drawNShapesDirectionFlexible(40, 10, 90, 50, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 70, "circle", "row", "red");
    drawNShapesDirectionFlexible(40, 10, 90, 70, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 90, "circle", "row", "red");
    drawNShapesDirectionFlexible(40, 10, 90, 90, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 110, "circle", "row", "red");
    drawNShapesDirectionFlexible(40, 10, 90, 110, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 130, "circle", "row", "red");
    drawNShapesDirectionFlexible(40, 10, 90, 130, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 150, "circle", "row", "red");
    drawNShapesDirectionFlexible(40, 10, 90, 150, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 170, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 190, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 210, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 230, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 250, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 270, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 290, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 310, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 330, "circle", "row", "red");



    drawNShapesDirectionFlexible(100, 10, 90, 370, "circle", "row", "white");
    drawNShapesDirectionFlexible(100, 10, 90, 390, "circle", "row", "white");
    drawNShapesDirectionFlexible(100, 10, 90, 410, "circle", "row", "white");
    drawNShapesDirectionFlexible(100, 10, 90, 430, "circle", "row", "white");
    drawNShapesDirectionFlexible(100, 10, 90, 450, "circle", "row", "white");
    drawNShapesDirectionFlexible(100, 10, 90, 470, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 490, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 510, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 530, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 550, "circle", "row", "blue");
    drawNShapesDirectionFlexible(100, 10, 90, 570, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 590, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 610, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 630, "circle", "row", "red");
    drawNShapesDirectionFlexible(100, 10, 90, 650, "circle", "row", "red");

    // draw5RedSquares();
    //drawGrid(canvasWidth, canvasHeight);
}

// my first function
function draw5CirclesWhile() {
    noFill();
    let x = 100;
    let y = 200;
    let d = 50;

    let i = 0;
    // fill('red');
    while (i<5) {
        circle(x, y+50*i, d);
        i++ // centerX, centerY, radius
    }
}
function draw5CirclesFor() {

    let i = 100;
    let y = 200;
    let d = 50;
    for (let x = 0; x < 5; x += 1) {
        circle(i, y+50*x, d);
        }
}

function drawNCircles(n) {
    let i = 600;
    let y = 200;
    let d = 50;
    for (let x = 0; x < n; x += 1) {
        circle(i, y+50*x, d);
        } 
}

function drawNCirclesFlexible(n, size, x, y) {
    for (let i = 0; i < n; i += 1) {
        circle(x, y+size*i, size);
        } 
}

function drawNShapesFlexible(n, size, x, y, shape) {
    fill("hotpink");
    for (let i = 0; i < n; i += 1) {
        if (shape=="circle") {
            circle(x, y+size*i, size);
        } 
        else if (shape=="square") {
            square(x, y+size*i, size);
        }
    }
}

function drawNShapesDirectionFlexible(n, size, x, y, shape, direction, color) {
    fill(color);
    for (let i = 0; i < n; i += 1) {
        if (shape=="circle") {
            if (direction=="column") {
                circle(x, y+size*i, size);
            }
            else if (direction=="row") {
                circle(x+size*i, y, size);
            }
        } 
        else if (shape=="square") {
            if (direction=="column") {
                square(x, y+size*i, size);
            }
            else if (direction=="row") {
                square(x+size*i, y, size);
            }
        }
    }
}

function draw5RedSquares() {
    fill("red");
    square(320, 200, 50); // topLeftX, topLeftY, width
    square(320, 250, 50);
    square(320, 300, 50);
    square(320, 350, 50);
    square(320, 400, 50);
}
