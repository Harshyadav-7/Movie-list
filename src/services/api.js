const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL =  import.meta.env.VITE_API_URL || "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) =>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query)}`)
    const data = await response.json();
    return data.results
}

const GENRE_MAP = {
    action: 28,
    comedy: 35,
    romantic: 10749,
    crime: 80,
    thriller: 53,
};


export const getGenreMovies =async (genreName) => {
    const genreID = GENRE_MAP[genreName];

    const response = await fetch (`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreID}`);
    const data = await response.json();
    return data.results;
}