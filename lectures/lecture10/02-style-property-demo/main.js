
const changeColor = (selector, color) => {
    console.log(selector, color);
    const el = document.querySelector(selector);
    if (el.style.backgroundColor == color) {
        document.querySelector(selector).style.backgroundColor = 'white';
    } else if (el.style.backgroundColor !== color){
        document.querySelector(selector).style.backgroundColor = color;
    }
};
// const makeRed = () => {
//     // your code here...
//     console.log('Change background to red');
//     document.querySelector('#section1').style.backgroundColor = 'red';
// };

// const makeBlue = () => {
//     // your code here...
//     console.log('Change background to blue');
//     document.querySelector('#section2').style.backgroundColor = 'blue';
// };

// const makePink = () => {
//     // your code here...
//     console.log('Change background to pink');
//     document.querySelector('#section3').style.backgroundColor = 'pink';
// };

// const makeOrange = () => {
//     // your code here...
//     console.log('Change background to orange');
//     document.querySelector('#section4').style.backgroundColor = 'orange';
// };

