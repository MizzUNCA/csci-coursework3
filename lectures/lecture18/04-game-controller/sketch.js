let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // noFill();
    fill(fillColor);
    //circle(x, y, width);
    drawCreature(x, y, fillColor);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    if (ev.code === 'ArrowUp') {
        y = y - 10;
    } else if (ev.code === 'ArrowDown') {
        y = y + 10;
    } else if (ev.code === 'ArrowLeft') {
        x = x - 10;
    } else if (ev.code === 'ArrowRight') {
        x = x + 10;
    } else if (ev.code === 'Space') {
        width = width + 5;
    } else if (ev.code === 'Minus') {
        width = width - 5;
    } else if (ev.code === "KeyR") {
        fillColor = "red";
    } else if (x === 900) {
        fillColor = 'blue';
    }


    // redraw circle:
    clear();
    // noFill();
    fill(fillColor);
    drawCreature(x, y, fillColor);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);

function drawCreature(x, y, fillColor) {
    fill(fillColor);
    ellipse(x, y, 250, 300, 50); //x, y, w, h, extra
    //face
    fill('black')
    ellipse(x, y - 159, 200, 75);
    fill('black')
    curve(x - 1300, y - 750, x - 50, y + 50, x - 25, y + 125, x, y + 150, x - 25, y + 125);
    fill('black');
    strokeWeight(10);
    point(x - 75, y - 25, 1);
    strokeWeight(10);
    fill('black');
    point(x - 25, y -25, 1);
    // strokeWeight(10);
}