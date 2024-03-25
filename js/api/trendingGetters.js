import { OPTIONS, BASE_URL } from './config.js';

export const getTrending = async () => {
    const response = await fetch(BASE_URL + "trending/all/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
}

export const getTrendingMovies = async () => {
    const response = await fetch(BASE_URL + "trending/movie/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
}

export const getTrendingTV = async () => {
    const response = await fetch(BASE_URL + "trending/tv/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
};


export const getTrendingPeople = async () => {
    const response = await fetch(BASE_URL + "trending/person/day?language=en-US", OPTIONS);
    const data = await response.json();
    return data;
};

export const getPerson = async (person) => {
    const response = await fetch(BASE_URL + `search/person?query=${person}`, OPTIONS);
    const data = await response.json();
    return data;
}
