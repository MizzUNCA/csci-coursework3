
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.color = 'white';
    document.querySelector('#section1').style.fontSize = '25px';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.color = 'white';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('body').style.backgroundColor = 'pink';
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section3').style.color = 'white';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('body').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.color = 'white';
};

function multicolor() {
    //change all of the section colors at once
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.innerHTML = 'Hello';
    document.querySelector('#section2').style.backgroundColor = 'blue';
    document.querySelector('#section2').style.innerHTML = 'I';
    document.querySelector('#section3').style.backgroundColor = 'pink';
    document.querySelector('#section3').style.innerHTML = 'Am';
    document.querySelector('#section4').style.backgroundColor = 'orange'
    document.querySelector('#section4').style.innerHTML = 'Underwater';
}

