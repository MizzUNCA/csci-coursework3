const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 10,
    color: 'hotpink'
};

const c2 = {
    x: 2500,
    y: 500,
    width: 350,
    speed: -7,
    color: 'cyan'
};

const c3 = {
    x: 100,
    y: 1000,
    speed: 4,
    fillColor: 'tan'
}

const c4 = {
    x: 2500,
    y: 1250,
    width: 100,
    speed: -2,
    color: 'red'
};



// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;

    c2.x += c2.speed;

    c3.x += c3.speed;

    c4.x += c4.speed;

    if (c1.x > canvasWidth + 150) {
        c1.x = 0;
        c1.speed += 1; 
    }

    if (c2.x < -250) {
        c2.x = 2500;
        c2.speed -= 2.5;
    }

    if (c3.x > canvasWidth + 150) {
        c3.x = 0;
        c3.speed += 3; 
    }

    if (c4.x < -250) {
        c4.x = 2500;
        c4.speed -= 5;
        c4.width += 10
    }

    


    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);

    drawCar(c2.x, c2.y, c2.width, c2.color);

    drawCreature(c3.x, c3.y, c3.fillColor);

    drawCar(c4.x, c4.y, c4.width, c4.color);

    
    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}

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
