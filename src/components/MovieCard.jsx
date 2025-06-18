import { motion } from "framer-motion"

const MovieCard = ({ movie, onClick, theme, index }) => {
    return (
        <motion.div
            className={`movie-card ${theme}`}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ delay: index * 0.06, duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="movie-poster">
                {movie.Poster !== 'N/A' ?
                    (<img src={movie.Poster} alt={movie.Title} />) :
                    (<div className="no-poster">No Image Available</div>)}
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <div className="movie-meta">
                    <p>Year: {movie.Year}</p>
                    <p>Type: {movie.Type}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default MovieCard