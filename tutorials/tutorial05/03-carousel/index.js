let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel-item");
    // If the button clicked's direction is forward, it triggers this if statement for moving on to the next picture.
    if (direction == "forward") {
        // minus 2 b/c first 2 slides already showing
        // if the current position is the last image, it will return false and not move
        if (currentPosition >= items.length - 2) {
            return false;
        }
        //moves the position to show the next image
        currentPosition++;
    // If the button clicked's direction is not forward, it triggers this if statement for moving to the previous picture.
    } else {
        //if the current position is the first image, it will return false and not move
        if (currentPosition == 0) {
            return false;
        }
        //moves the position to show the previous image
        currentPosition--;
    }

    //works on the transition to another image
    const offset = (slideWidth + gap) * currentPosition;

    //this does the transformation to the next image
    for (const item of items) {
        item.style.transform = `translateX(-${offset}px)`;
    }
}
