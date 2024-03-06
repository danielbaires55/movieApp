const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGQzNWFkNDZlNDE0NTgzNjBkNzk5ZjNjMWE0YjFlZCIsInN1YiI6IjY1ZTg2YjY1MmIxYjQ0MDE2NDY4ZjVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LZabggYJjGDulYo2ATPlnRrd4Ymo25e3lN9tucH3oDs"
    },
};


export const getTrending = async (baseUrl) => {
    const response = await fetch(baseUrl + "trending/all/day?language=en-US", options);
    const data = await response.json();
    return data;
}

/** getTrendingMovies
 * @param baseUrl
 * @returns trending movies
 */

export const getTrendingMovies = async (baseUrl) => {
    const response = await fetch(baseUrl + "trending/movie/day?language=en-US", options);
    const data = await response.json();
    return data;
}

/**getPerson
 * @param baseUrl
 * @param person
 * returns person
 */

export const getPerson = async (baseUrl, person) => {
    const response = await fetch(baseUrl + `search/person?query=${person}`, options);
    const data = await response.json();
    return data;
}