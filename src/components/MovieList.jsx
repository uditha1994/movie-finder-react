import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.length > 0 ? (
                movies.map((movie) => (<MovieCard key={movie.imdbID} movie={movie} />))
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                    <p>Try searching for a movie</p>
                </div>
            )}
        </div>
    )
}

export default MovieList