async function searchAnime(){
    //console.log('searchAnime function called')
    const query = document.getElementById('searchInput').value;

    // waiting for api response
    const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
    const data = await response.json(); // transforming received data to json
    //console.log(data)
    displayAnime(data.data);
}

function displayAnime(animeList){
    //console.log('displayAnime function called')
    const animeListContainer = document.getElementById('animeList')
    animeListContainer.innerHTML = ``; // clearing animeListContainer

    animeList.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.classList.add('anime-item');

        const title = anime.attributes.canonicalTitle;
        const synopsis = anime.attributes.synopsis; // anime summary
        const rating = anime.attributes.ageRating;
        const episodeCount = anime.attributes.episodeCount;
        const posterImage = anime.attributes.posterImage.original;

        // output the received data to the console
        /*console.log(`title: ${title}`)
        console.log(`synopsis: ${synopsis}`)
        console.log(`rating: ${rating}`)
        console.log(`episode count: ${episodeCount}`)*/

        animeItem.innerHTML = `
                <img src= "${posterImage}" alt="${title}">
                <h3>${title}</h3>
                <p>${synopsis}</p>
                <span>Рейтинг: ${rating}</span>
                <span>Эпизодов: ${episodeCount}</span>
                `;

        animeListContainer.appendChild(animeItem);
    })

}