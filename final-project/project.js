// let animeArray = ["Black Clover", "Danganronpa", "Dragon Ball", "Hunter x Hunter"];
// for(i=0; i < animeArray.length; i++) {
//     getCharacter()
// }

// async function getCharacter() {
//     const response = await fetch('https://api.jikan.moe/v4/anime?q=');
//     const obj = await response.json();
//     console.log(obj);
//     for (let i = 0; i < obj.data.length; i++) {
//         const item = obj.data[i];
//         const template = `
//             <section>
//                 <img src="${item.images.jpg.large_image-url}" />
//                 <p>${item.name}</p>
//             </section>`;
//         document.querySelector('.item.homework').insertAdjacentHTML('beforeend', template);
//     }
// }
// getCharacter();

// const canvasWidth = window.innerWidth;
// const canvasHeight = window.innerHeight; 

// function setup() {
//     createCanvas(canvasWidth, canvasHeight);
// }

// function draw() {
//     clear();
//     drawGrid(canvasWidth, canvasHeight);
// }



