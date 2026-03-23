import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/MovieCard";


function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
                <div className="movie-grid">
                    {favorites.map((movie) => (
                        // movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    } else return <div className="favorites-empty">
        <h2>No favorites movies yet</h2>
        <p>start adding movies and they will appear here!!</p>
    </div>
}

export default Favorites;