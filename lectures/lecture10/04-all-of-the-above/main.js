const changeColor = () => {
    console.log();
    const el = document.querySelector('.panel');
    if (el.style.background == 'hotpink') {
        document.querySelector('.panel').style.background = 'white';
    } else if (el.style.background !== 'hotpink'){
        document.querySelector('.panel').style.background = 'hotpink';
    }
    // document.querySelector('.panel').style.background = 'hotpink';
};

const changeTitle = () => {
    //what do we want to change?
    const textElement = document.getElementById('ogText');
    if (textElement.textContent == 'My Title') {
        textElement.textContent = 'Your Title';
    } else if (textElement.textContent == 'Your Title') {
        textElement.textContent =  'My Title';
    }
};

function addImage() {
    console.log('add cat image!');
    const el = document.querySelector('.panel');
    const img = document.createElement('img');
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKOOpLy92UjzQxq8NCxgxOQJbj_YVdfHO_g&s";
    img.alt = "Cat";
    el.append(img);
    // adds the following image to each panel:
    // 1. what element do you want to select?
    //`<img src="https://media1.britannica.com/eb-media/22/65322-004-8FF21CDA.jpg" />`;
}

const clearDiv = () => {
    // clears all of the panels of content
    const el = document.querySelector('.panel');
    el.style.background = "none";
    el.innerHTML = ""



};
