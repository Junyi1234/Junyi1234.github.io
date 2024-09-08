
let currentBackground = 0;
const backgrounds = [
    'img/background1.jpg',
    'img/background2.jpg',
    'img/background3.jpg'
];

function changeBackground(direction) {
    currentBackground = (currentBackground + direction + backgrounds.length) % backgrounds.length;
    document.getElementById('hero').style.backgroundImage = `url(${backgrounds[currentBackground]})`;
}

setInterval(() => changeBackground(1), 5000); 
