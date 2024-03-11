/**
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungerà al dom un nuovo nodo che sarà un tag li contenente il titolo della movie
 * @param {Array} dei film
 * @returns 
 */

// funzione che crea una lista di film
export const createTrendingMoviesList = (movies) => {
    const cardContainer = document.getElementById("movies-cards");
    movies.forEach(element => {
        //Card
        const card = document.createElement("div");
        card.classList.add("card");
        
        //TextContainer
        const textContainer = document.createElement("div");
        card.classList.add("text-container");

        //Image
        const image = document.createElement("img");
        image.src = `https://image.tmdb.org/t/p/original${element.poster_path}`;
        image.alt = "image";
        image.classList.add("image");

        //Title
        const title = document.createElement("h1");
        title.classList.add("title");
        title.innerText = element.title;

        //Description
        const description = document.createElement("p");
        description.classList.add("description");
        description.innerText = element.overview;

        //Button
        //const cardButton = document.createElement("button");



        //Appendiamo i nodi al DOM
        textContainer.appendChild(title);
        textContainer.appendChild(description);
        //textContainer.appendChild(cardButton);
        card.appendChild(textContainer);
        card.appendChild(image);
        cardContainer.appendChild(card);
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