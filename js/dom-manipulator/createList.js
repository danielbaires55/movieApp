/**
 * la funzione prenderà in ingresso un array di movies, per ogni movie aggiungerà al dom un nuovo nodo che sarà un tag li contenente il titolo della movie
 * @param {Array} dei film
 * @returns 
 */

export const createTrendingMoviesList = (movies) => {

    const cardContainer = document.querySelector(".container");

    const  searchInput = document.querySelector(".search-input");  

    const searchButton = document.querySelector(".search-button");


    // Slide
    const slide = document.createElement("div");
    slide.classList.add("slide");

    movies.forEach(element => {     
        // Item
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${element.backdrop_path}')`;

        // Content
        const content = document.createElement("div");
        content.classList.add("content");

        // Title
        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = element.title;

        // Description
        const description = document.createElement("div");
        description.classList.add("description");
        description.innerText = element.overview;

        //Vote average
        const voteAverage = document.createElement("div");
        voteAverage.classList.add("vote-average");
        voteAverage.innerText = `Vote average: ${element.vote_average}`;

        // Aggiungiamo gli elementi al DOM
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(voteAverage);
        item.appendChild(content);
        slide.appendChild(item);
    });
    // Aggiungiamo l'elemento slide al container
    cardContainer.appendChild(slide);

}

export const createTrendingTV = (tv) => {

    const cardContainer = document.querySelector(".container");

    // Slide
    const slide = document.createElement("div");
    slide.classList.add("slide");

    tv.forEach(element => {
        // Item
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${element.backdrop_path}')`;

        // Content
        const content = document.createElement("div");
        content.classList.add("content");

        // Title
        const title = document.createElement("div");
        title.classList.add("title");
        title.innerText = element.name;

        //Vote average
        const voteAverage = document.createElement("div");
        voteAverage.classList.add("vote-average");
        voteAverage.innerText = `Vote average: ${element.vote_average}`;

        // Description
        const description = document.createElement("div");
        description.classList.add("description");
        description.innerText = element.overview;

        // Aggiungiamo gli elementi al DOM
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(voteAverage);
        item.appendChild(content);
        slide.appendChild(item);
    });
    // Aggiungiamo l'elemento slide al container
    cardContainer.appendChild(slide);
}

export const createTrending = (trending) => {

    const cardContainer = document.querySelector(".container");

    // Slide
    const slide = document.createElement("div");
    slide.classList.add("slide");

    trending.forEach(element => {
        if (element.name !== undefined) {
            // Item
            const item = document.createElement("div");
            item.classList.add("item");
            item.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${element.backdrop_path}')`;

            // Content
            const content = document.createElement("div");
            content.classList.add("content");

            // Title
            const name = document.createElement("div");
            name.classList.add("title");
            name.innerText = element.name;

            // Media type
            const mediaType = document.createElement("div");
            mediaType.classList.add("media-type");
            mediaType.innerText = element.media_type;
            mediaType.style.textTransform = "uppercase";

            // Vote average
            const voteAverage = document.createElement("div");
            voteAverage.classList.add("vote-average");
            voteAverage.innerText = `Vote average: ${element.vote_average}`;

            // Description
            const description = document.createElement("div");
            description.classList.add("description");
            description.innerText = element.overview;

            // Aggiungiamo gli elementi al DOM
            content.appendChild(name);
            content.appendChild(mediaType);
            content.appendChild(description);
            content.appendChild(voteAverage);
            item.appendChild(content);
            slide.appendChild(item);
        }

    });
    cardContainer.appendChild(slide);
}

export const createTrendingPeople = (people) => {

    const cardContainer = document.querySelector(".container");

    // Slide
    const slide = document.createElement("div");
    slide.classList.add("slide");

    people.forEach(element => {
        // Item
        const item = document.createElement("div");
        item.classList.add("item");
        item.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${element.profile_path}')`;

        // Content
        const content = document.createElement("div");
        content.classList.add("content");

        // Name
        const name = document.createElement("div");
        name.classList.add("name");
        name.innerText = element.name;
        name.style.color = "red";

        // Known for department
        const knowDep = document.createElement("div");
        knowDep.classList.add("known-for-department");
        knowDep.innerText = `Known for: ${element.known_for_department}`;
        knowDep.style.color = "red";

        // Assembling the content
        content.appendChild(name); // Append name to content
        content.appendChild(knowDep); // Append known_for_department to content

        item.appendChild(content); // Append content to item

        slide.appendChild(item); // Append item to slide
    });
    cardContainer.appendChild(slide);
}