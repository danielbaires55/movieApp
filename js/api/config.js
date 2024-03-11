//import dotenv from 'dotenv';
//dotenv.config();
export const BASE_URL = "https://api.themoviedb.org/3/"; // Base URL for the API
export const person = "Brad Pitt"; // Person to search for
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGQzNWFkNDZlNDE0NTgzNjBkNzk5ZjNjMWE0YjFlZCIsInN1YiI6IjY1ZTg2YjY1MmIxYjQ0MDE2NDY4ZjVmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LZabggYJjGDulYo2ATPlnRrd4Ymo25e3lN9tucH3oDs";
export const OPTIONS = { // Options for the fetch method
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        //"Authorization": `Bearer ${process.env.API_KEY}` // API key
         "Authorization": `Bearer ${API_KEY}` // API key
    },
};