import { getPerson, getTrending, getTrendingMovies } from './api/trendingGetters.js';   
import { person } from './api/config.js';
getTrending();
getTrendingMovies();
getPerson(person);