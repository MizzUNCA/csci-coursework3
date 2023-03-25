function defaultTheme() {
    // your code here.
    document.querySelector('.content').style.backgroundColor = 'white';
    document.querySelector('header').style.backgroundColor = '#EAE8E8';
    document.querySelector('h1').style.color = 'black';
}

function oceanTheme() {
   // your code here.
   document.querySelector('.content').style.backgroundColor = 'cyan';
   document.querySelector('header').style.backgroundColor = 'navy';
   document.querySelector('h1').style.color = 'white';
}

function desertTheme() {
   // your code here.
   document.querySelector('.content').style.backgroundColor = '#FAD5A5';
   document.querySelector('header').style.backgroundColor = '#977D2B';
   document.querySelector('h1').style.color = 'white';
}

function highContrastTheme() {
    // your code here.
    document.querySelector('.content').style.backgroundColor = 'white';
    document.querySelector('header').style.backgroundColor = '#000000';
    document.querySelector('h1').style.color = 'white';
}

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/
