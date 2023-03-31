const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOnOff() {
    if (elem.src === imgOn) { //"==" converts data types when comparing, "===" does not convert data types
        elem.src = imgOff;
    } else {
        elem.src = imgOn;
    }
}