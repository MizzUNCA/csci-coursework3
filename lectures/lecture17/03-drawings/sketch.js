function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    // fill("teal")
    // circle(550, 100, 100); //x, y, diameter

    // // https://p5js.org/reference/#/p5/rect
    // fill('hotpink')
    // rect(30, 20, 55, 55);

    // // add your drawing here:
    // // https://p5js.org/reference/#/p5/point
    // fill('black');
    // circle(1250, 725, 50);
    // fill('black');
    // circle(1350, 725, 50);

    // // https://p5js.org/reference/#/p5/text
    // // text("Here is some text", 200, 40);

    // // https://p5js.org/reference/#/p5/ellipse
    // fill('tan');
    // ellipse(1300, 750, 250, 300, 50); //x, y, w, h, extra

    // fill('black')
    // ellipse(1300, 600, 200, 75);

    // // Other shapes...
    // // Polygon: https://p5js.org/reference/#/p5/beginShape
    // // Line: https://p5js.org/reference/#/p5/line
    
    // // Curve: https://p5js.org/reference/#/p5/curve

    // fill('black')
    // curve(0, 0, 1250, 800, 1275, 875, 1300, 900, 1275, 875);

    drawCreature(100, 350, 'tan');
    drawCreature(500, 150, 'blue');
    drawCreature(700, 550, 'green');
    // for debugging:
    // drawGrid(canvasWidth, canvasHeight)
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

function mouseClicked() {
    drawCreature(mouseX, mouseY, 'tan');
}