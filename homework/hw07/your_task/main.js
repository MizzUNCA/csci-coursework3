const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getAlbums (term) {

    document.querySelector('#albums').innerHTML = "";

    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`
    const data = await fetch(url).then(response => response.json());
    console.log(data);

    if (data.length > 0) {
        for(i = 0; i < data.length; i++) {
            const album = data[i];
            const template = `
            <section class="album-card" id="${[album.id]}">
            <div>
                <img src="${[album.image_url]}" alt="${[album.name]}, album">
                <h2>${[album.name]}</h2>
                <div class="footer">
                    <a href="${[album.spotify_url]}" target="_blank">
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

async function getTracks (term) {

    //clear
    document.querySelector('#tracks').innerHTML = "";

    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    console.log(data);
    if(data.length >= 5) {
        for(i = 0; i < 5; i++){
            const track = data[i];
            const template = `
            <section class="track-item preview" onclick="loadTrack('${track.id}')">
            <img src="${[track.album.image_url]}" alt="${[track.name]}, song">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${[track.name]}</h2>
                    <p>
                        ${[track.artist.name]}
                    </p>
                </div>
            </section>
            `
        document.querySelector('#tracks').innerHTML += template;
        }
    } else if (data.length > 0) {
        for(i = 0; i < data.length; i++){
            const track = data[i];
            const template = `
            <section class="track-item preview" onclick="loadTrack('${track.id}')">
            <img src="${[track.album.image_url]}">
            <i class="fas play-track fa-play" aria-hidden="false"></i>
            <div class="label">
                <h2>${[track.name]}</h2>
                <p>
                    ${[track.name]}  
                </p>
            </div>
        </section>
        `
        document.querySelector('#tracks').innerHTML += template;
        } 
    } else if (data.length == 0) {
        const template = `
        <section id="tracks">No tracks found that match your search criteria.</section>
        `
        document.querySelector('#tracks').innerHTML = template;
    }
}

async function getArtist (term) {
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    // console.log(data);

    if (data.length > 1) {
        const artist = data[0];
        const template = `
            <section class="artist-card" id="${[data[0].id]}" onclick="loadTop()">
            <div>
                <img src="${[data[0].image_url]}" alt="${[data[0].id]}">
                <h2>${[data[0].name]}</h2>
                <div class="footer">
                    <a href="${[data[0].spotify_url]}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
            </section>
        `;
        document.querySelector('#artist').innerHTML = template;
    } else if (data.length == 0) {
        const template = `
        <section id="artist">No artist found that match your search criteria.</section>
        `
        document.querySelector('#artist').innerHTML = template;
    }
}

function loadTrack(trackID) {
    const template = `
        
        <section id="album-section">
        <h1>Now Playing</h1>
        </section>

        <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${[trackID]}?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template;
}

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}