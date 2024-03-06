import { getPerson, getTrending, getTrendingMovies } from './API/trendingGetters.js';   
import { baseUrl, person } from './API/config.js';
getTrending(baseUrl);
getTrendingMovies(baseUrl);
getPerson(baseUrl, person);