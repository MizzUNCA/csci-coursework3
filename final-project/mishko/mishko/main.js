async function getCharacter(anime) {
    const url = `https://api.jikan.moe/v4/anime?q=${[anime]}`
    console.log(url);
    const response = await fetch(url);
    const obj = await response.json();
    console.log(obj);
    for (let i = 0; i < 1; i++) {
        const item = obj.data[i];
        const template = `
            <section>
                <img src="${item.images.jpg.image_url}" />
                <p>${item.title}</p>
                <p>Rating: ${item.score}</p>
            </section>`;
        document.querySelector('main').insertAdjacentHTML('beforeend', template);
    }
  }

// getCharacter("danganronpa");

const animeList = ["Akebi-chan no Sailor-fuku", "Kaijin Kaihatsu-bu no Kuroitsu-san", "Oshi no Ko"];


for(i = 0; i < animeList.length; i++) {
    getCharacter(animeList[i]);
}


async function getAlbums (term) {

    document.querySelector('#albums').innerHTML = "";

    const url = `https://api.jikan.moe/v4/anime?q=${term}`
    const data = await fetch(url).then(response => response.json());
    console.log(data);

    if (data.length > 0) {
        for(i = 0; i < data.length; i++) {
            const album = data[i];
            const template = `
            <section class="album-card" id="${[album.data.mal_id]}">
            <div>
                <img src="${[album.data.images.jpg]}" alt="${[album.data.title]}, album">
                <h2>${[album.data.title]}</h2>
                <div class="footer">
                    <a href="${[album.data.url]}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
            </section>
            `
            document.querySelector('#albums').innerHTML += template;
        }
    } else if (data.length == 0) {
        const template = `
        <section id="albums">No albums were returned.</section>
        `
        document.querySelector('#albums').innerHTML = template;
    }
}

// async function getPerson() {
//     const response = await fetch('https://api.jikan.moe/v4/anime?q=danganronpa');
//     const obj = await response.json();
//     console.log(obj);
//     for (let i = 0; i < obj.data.length; i++) {
//         const item = obj.data[i];
//         const template = `
//             <section>
//                 <img src="${item.images.jpg.image_url}" />
//                 <p>${item.title}</p>
//             </section>`;
//         document.querySelector('main').insertAdjacentHTML('beforeend', template);
//     }
//   }


// async function otherTest() {
//     const response = await fetch('https://api.jikan.moe/v4/characters/17/manga');
//     const obj = await response.json();
//     console.log(obj);
//     for (let i = 0; i < obj.data.length; i++) {
//         const item = obj.data[i];
//         const template = `
//             <section>
//                 <img src="${item.manga.images.jpg.image_url}" />
//                 <p>${item.manga.title}</p>
//             </section>`;
//         document.querySelector('main').insertAdjacentHTML('beforeend', template);
//     }
// }

// async function getCharacter() {
//     const response = await fetch('https://api.jikan.moe/v4/characters?q=mai+sakurajima');
//     const obj = await response.json();
//     console.log(obj);
//     for (let i = 0; i < obj.data.length; i++) {
//         const item = obj.data[i];
//         const template = `
//             <section>
//                 <img src="${item.images.jpg.image_url}" />
//                 <p>${item.name}</p>
//             </section>`;
//         document.querySelector('main').insertAdjacentHTML('beforeend', template);
//     }
// }



//otherTest();
