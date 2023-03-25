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

    drawCreature();
    // for debugging:
    // drawGrid(canvasWidth, canvasHeight)
}

function drawCreature() {
    fill('tan');
    ellipse(1300, 750, 250, 300, 50); //x, y, w, h, extra
    fill('black')
    ellipse(1300, 600, 200, 75);
    fill('black')
    curve(0, 0, 1250, 800, 1275, 875, 1300, 900, 1275, 875);
    fill('black');
    strokeWeight(10);
    point(1225, 725, 1);
    strokeWeight(10);
    fill('black');
    point(1275, 725, 1);
    strokeWeight(10);
}