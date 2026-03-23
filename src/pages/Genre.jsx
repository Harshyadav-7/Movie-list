import MovieCard from "../components/MovieCard";
import { getGenreMovies } from "../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Genre() {

    const { genreName } = useParams();

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadGenreMovies = async () => {
            try {
                setLoading(true)
                const genreMovies = await getGenreMovies(genreName)
                setMovies(genreMovies);
            } catch (err) {
                console.log(err)
                setError("Failed to load Movies")
            }
            finally {
                setLoading(false)
            }
        }
        loadGenreMovies();
    }, [genreName])

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;


    return (
        <div className="home">
            <h2 style={{ textTransform: "capitalize" }}>{genreName} Movies</h2>
            <div className="movie-grid">
                {movies.map((movie) => (
                    // movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );

}

export default Genre;
