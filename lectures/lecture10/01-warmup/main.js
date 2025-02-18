let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);
}

function getColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return[r, g, b];
}

function shapeDrawer() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    fill(r, g, b);
    let x = Math.random();
    if (x >= 0.5) {
    circle(mouseX, mouseY, (Math.random()*100));
    }
    else if (x < 0.5) {
    rect(mouseX, mouseY, (Math.random()*100)); 
    }
}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
    // in p5.js, mouseX and mouseY are
    // built-in global variabls that track the
    // current position of your mouse.
    // square(mouseX, mouseY, (Math.random*1000));

    // shapeDrawer();
    bullsEye();

}  

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
    // shapeDrawer();
    bullsEye();
    
}


function bullsEye() {
    circle(mouseX, mouseY, (125));
    fill(getColor());
    circle(mouseX, mouseY, (100));
    fill(getColor());
    circle(mouseX, mouseY, (75));
    fill(getColor());
    circle(mouseX, mouseY, (50));
    fill(getColor());
    circle(mouseX, mouseY, (25));
    fill(getColor());
}
/**
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
