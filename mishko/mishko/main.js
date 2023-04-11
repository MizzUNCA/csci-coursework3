async function getCharacter() {
    const response = await fetch('https://api.jikan.moe/v4/characters?q=naruto');
    const obj = await response.json();
    console.log(obj);
    for (let i = 0; i < obj.data.length; i++) {
        const item = obj.data[i];
        const template = `
            <section>
                <img src="${item.images.jpg.image_url}" />
                <p>${item.name}</p>
            </section>`;
        document.querySelector('main').insertAdjacentHTML('beforeend', template);
    }
}

async function otherTest() {
    const response = await fetch('https://api.jikan.moe/v4/characters/17/manga');
    const obj = await response.json();
    console.log(obj);
    for (let i = 0; i < obj.data.length; i++) {
        const item = obj.data[i];
        const template = `
            <section>
                <img src="${item.manga.images.jpg.image_url}" />
                <p>${item.manga.title}</p>
            </section>`;
        document.querySelector('main').insertAdjacentHTML('beforeend', template);
    }
}


// getCharacter();
otherTest();