import { getPerson, getTrending, getTrendingMovies } from './api/trendingGetters.js';   
import { person } from './api/config.js';
import dotenv from 'dotenv';

//import del package che mi rende disponibili le variabili d'ambiente
dotenv.config();

const trendingData = getTrending().then(data => {
    data.results.forEach(movie => {
        console.log("ID: " + movie.id);
        console.log("Poster_path: " + movie.poster_path);
        console.log("Title: " + movie.title);
        console.log("Vote_average: " + movie.vote_average);
        console.log("Media_type: " + movie.media_type );
        console.log("Release_date: " + movie.release_date + "\n");
    });
});

// const trendingMoviesData = getTrendingMovies().then(data => {
//     console.log(data);
// }); 
getTrending();
getTrendingMovies();
getPerson(person);
/**
  * Da aggiungere:
  * id
  * poster_path
  * title
  * vote_avarge
  * media_type
  * release_date
  */