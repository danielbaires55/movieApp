//Funzione che al caricamento della pagina verifichi che il titolo sia corretto, in caso lo corregge.
export const fixTitle = () => {
    const title = document.getElementById('header');

    const titleContent = title.innerHTML;

    if (titleContent === "Movie App") return;
    else {
        title.innerHTML = "Movie App";
    }
};

//funzione che al caricamento della pagina aggiunga un pargrafo col titolo di un film.

export const addParagraph = () => {
    const title = document.getElementById("header")
    const paragraph = document.createElement("p")
    paragraph.innerHTML = "Indiana Jones";
    title.appendChild(paragraph);
}