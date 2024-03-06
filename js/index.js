import { getTrending, getTrendingMovies } from './API/trendingGetters.js';   
import { baseUrl } from './API/config.js';
getTrending(baseUrl);
getTrendingMovies(baseUrl);