async function getCharacter() {
    const response = await fetch('https://api.jikan.moe/v4/anime?q=danganronpa');
    const obj = await response.json();
    console.log(obj);
    for (let i = 0; i < obj.data.length; i++) {
        const item = obj.data[i];
        const template = `
            <section>
                <img src="${item.anime.images.jpg.large_image-url}" />
                <p>${item.mal_id}</p>
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
                <p>${item.volumes} </p>
            </section>`;
        document.querySelector('main').insertAdjacentHTML('beforeend', template);
    }
}

async function userTest() {
    const response = await fetch('https://api.jikan.moe/v4/anime?q=danganronpa');
    const obj = await response.json();
    console.log(obj);
    for (let i = 0; i < obj.data.length; i++) {
        const item = obj.data[i];
        const template = `
            <section>
                <img src="${item.jpg.image_url}" />
            </section>`;
        document.querySelector('main').insertAdjacentHTML('beforeend', template);
    }
}


getCharacter();
otherTest();
userTest();

