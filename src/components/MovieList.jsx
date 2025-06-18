import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieSelect, theme }) => {
    return (
        <motion.div
            className="movie-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {movies.length > 0 ? (
                movies.map((movie, index) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        onClick={() => onMovieSelect(movie.imdbID)}
                        theme={theme}
                        index={index}
                    />
                ))
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                    <p>Try searching for a movie</p>
                </div>
            )}
        </motion.div>
    )
}

export default MovieList