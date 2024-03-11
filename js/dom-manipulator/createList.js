/**
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungerà al dom un nuovo nodo che sarà un tag li contenente il titolo della movie
 * @param {Array} dei film
 * @returns 
 */

// funzione che crea una lista di film
export const createTrendingMoviesList = (movies) => {
    const cardContainer = document.getElementById("movies-cards");
    movies.forEach(element => {
        //Creiamo i nodi
        const card = document.createElement("div");
        const textContainer = document.createElement("div");
        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
        image.alt = "poster";
        const title = document.createElement("h1");
        title.innerText = element.title;
        const description = document.createElement("p");
        description.innerText = element.overview;
        const cardButton = document.createElement("button");

        //Appendiamo i nodi al DOM
        textContainer.appendChild(title);
        textContainer.appendChild(description);
        textContainer.appendChild(cardButton);
        card.appendChild(textContainer);
        card.appendChild(image);
        card.classList.add();
        cardContainer.appendChild(card);

        //AGGIUNGERE LO STYLE
    });
}
//funzione che crea una lista di serie tv
export const createTrendingTV = (tv) => {
    const list = document.getElementById("trending-tv-list");
    tv.forEach(element => {
        const listItem = document.createElement("li");
        listItem.textContent = element.name;
        list.appendChild(listItem);
    });
}


//funzione che crea una lista di persone
export const createTrendingPeople = (people) => {
    const list = document.getElementById("trending-people-list");
    people.forEach(element => {
        const listItem = document.createElement("li");
        listItem.textContent = element.name;
        list.appendChild(listItem);
    });
}