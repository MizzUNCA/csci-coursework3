function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    let counter = 0;
    while (counter < 15) {
        circle(100, counter * 50, counter * 25);
        circle( counter * 50, counter * 25);
        circle(100, counter * 50, counter * 25);
        counter += 1; 
    }

    // let y = 0;
    // while (y <= 400) {
    //     circle(100, y, 50);
    //     y += 50;
    // }

    drawGrid(canvasWidth, canvasHeight);
}
