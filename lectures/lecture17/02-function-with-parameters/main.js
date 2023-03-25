// make a function:

// function makeRed() {
//     document.querySelector("body").style.backgroundColor="red";
// }

// function makeBlue() {
//     document.querySelector("body").style.backgroundColor="blue";
// }

// function makeGreen() {
//     document.querySelector("body").style.backgroundColor="green";
// }

function changeColor(color, selector) {
    document.querySelector(selector).style.backgroundColor= color;
}