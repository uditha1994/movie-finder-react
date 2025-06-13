const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.Poster !== 'N/A' ?
                    (<img src={movie.Poster} alt={movie.Title} />) :
                    (<div className="no-poster">No Image Available</div>)}
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>
            </div>
        </div>
    )
}

export default MovieCard