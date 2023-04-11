//if I wanted to get the third image in this array:
// photos [2];
const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image');
    // target the image
    // change the source to whatever image is stored in index idx
    // photo[idx]

    let imageTemplate = `
    <img  src="${photos[idx]}" alt="current photo" />
    `
    //Ask what the difference is, and if ;you need to include the div class or not
    // let imageTemplate = `
    //     <div class="current-photo">
    //     <!-- Replace image here -->
    //     <img  src="${photos[idx]}" alt="current photo" />
    //     </div> 
    // `
    document.querySelector(".current-photo").innerHTML = imageTemplate;
    // document.querySelector(".current-photo").insertAdjacentHTML(
    //         "beforebegin", `<img src="${photos[idx]}">`
    //     )
    let captionTemplate = `
        <p class="caption">Image ${[idx + 1]} of 10</p>
    `
    document.querySelector(".caption").innerHTML = captionTemplate;
    //document.querySelector('.caption').insertAdjacentHTML("beforeend", `<p>Image ${[idx]} of 10</p>`)
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    console.log('forward');
    ++idx;
    if(idx > photos.length - 1) {
        idx = 0;
    }
    showImage();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    console.log('back');
    --idx;
    if(idx < 0) {
        idx = 9;
    }
    showImage();
}
