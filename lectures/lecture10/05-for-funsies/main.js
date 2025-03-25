// let canvasWidth = document.documentElement.clientWidth - 20;
// let canvasHeight = document.documentElement.clientHeight - 20;

let canvasWidth = 500;
let canvasHeight = 500;
function setup() {
    rectMode(CENTER);
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.style.position = 'relative';
    canvas.style.top = '1000px';
    canvas.style.left = '1000px';

}

function changeColor(color) {
    console.log(color);
    if (color === 'black') {
     fill('black');
     stroke('black');
    } else if (color === 'white') {
        fill('white');
        stroke('white');
       } else if (color === 'red') {
        fill('red');
        stroke('red');
       } else if (color === 'orange') {
        fill('orange');
        stroke('orange');
       } else if (color === 'yellow') {
        fill('yellow');
        stroke('yellow');
       } else if (color === 'green') {
        fill('green');
        stroke('green');
       } else if (color === 'blue') {
        fill('blue');
        stroke('blue');
       } else if (color === 'indigo') {
        fill('darkblue');
        stroke('darkblue');
       } else if (color === 'violet') {
        fill('darkviolet');
        stroke('darkviolet');
       } else if (color === 'mystery') {
        let le =  getColor();
        fill(le);
        stroke(le);
       } 

}

function changeColorFill(color) {
    console.log(color);
    if (color === 'black') {
     canvas.fill('black');
    } else if (color === 'white') {
        fill('white');
        stroke('white');
       } else if (color === 'red') {
        fill('red');
        stroke('red');
       } else if (color === 'orange') {
        fill('orange');
        stroke('orange');
       } else if (color === 'yellow') {
        fill('yellow');
        stroke('yellow');
       } else if (color === 'green') {
        fill('green');
        stroke('green');
       } else if (color === 'blue') {
        fill('blue');
        stroke('blue');
       } else if (color === 'indigo') {
        fill('darkblue');
        stroke('darkblue');
       } else if (color === 'violet') {
        fill('darkviolet');
        stroke('darkviolet');
       } else if (color === 'mystery') {
        let le =  getColor();
        fill(le);
        stroke(le);
       } 
    }


function getColor() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return[r, g, b];
}

function shapeDrawer() {
    changeColor(color);
    circle(mouseX, mouseY, 10);
}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
    // in p5.js, mouseX and mouseY are
    // built-in global variabls that track the
    // current position of your mouse.
    // square(mouseX, mouseY, (Math.random*1000));
    shapeDrawer();
    // bullsEye();

}  

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
    shapeDrawer();
    // bullsEye();
    
}


