export const BASE_URL = "https://api.themoviedb.org/3/"; // Base URL for the API
export const person = "Brad Pitt"; // Person to search for
export const OPTIONS = { // Options for the fetch method
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "
    },
};