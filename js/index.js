import { getPerson, getTrending, getTrendingMovies, getTrendingPeople, getTrendingTV } from './api/trendingGetters.js';
import { person } from './api/config.js';
//import dotenv from 'dotenv';
//import del package che mi rende disponibili le variabili d'ambiente
//dotenv.config();

// export const trendingDataMovies = getTrendingMovies().then(data => {
//     data.results.forEach(movie => {
//         console.log("ID: " + movie.id);
//         console.log("Poster_path: " + movie.poster_path);
//         console.log("Title: " + movie.title);
//         console.log("Vote_average: " + movie.vote_average);
//         console.log("Media_type: " + movie.media_type);
//         console.log("Release_date: " + movie.release_date + "\n");
//     });
// });

export const trendingPeople = getTrendingPeople().then(data => {
    data.results.forEach(people => {
        console.log("ID: " + people.id);
        console.log("Name: " + people.name);
        console.log("Profile_path: " + people.profile_path + "\n");
        console.log("Popularity: " + people.popularity + "\n");
        console.log("Known_for_department: " + people.known_for_department + "\n");
        console.log("Known_for: " + people.known_for + "\n");
    });
    return data;
});

getTrending();
getTrendingMovies();
getTrendingTV();
getTrendingPeople();
getPerson(person);