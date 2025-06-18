const MovieDetails = ({ movie, onBack, theme }) => {
    return (
        <div className={`movie-details ${theme}`}>
            <button className="back-button" onClick={onBack}>
                Back to Result
            </button>

            <div className="details-container">
                <div className="poster-column">
                    {movie.Poster !== 'N/A' ?
                        (<img src={movie.Poster} alt={movie.Title} className="details-poster" />)
                        : (<div className="no-poster-large">No Image Found</div>)}
                </div>
                <div className="info-column">
                    <h2>{movie.Title} ({movie.Year})</h2>
                    <div className="metadata">
                        <span>{movie.Rated}</span>
                        <span>{movie.Runtime}</span>
                        <span>{movie.Genre}</span>
                    </div>
                    <div className="ratings">
                        {movie.Ratings?.map((rating, index) => (
                            <div key={index} className="rating">
                                <span className="source">{rating.Source}</span>
                                <span className="value">{rating.Value}</span>
                            </div>
                        ))}
                    </div>

                    <div className="plot">
                        <h3>Plot</h3>
                        <p>{movie.Plot}</p>
                    </div>

                    <div className="crew">
                        <div>
                            <h4>Director</h4>
                            <p>{movie.Director}</p>
                        </div>
                        <div>
                            <h4>Writer</h4>
                            <p>{movie.Writer}</p>
                        </div>
                        <div>
                            <h4>Actors</h4>
                            <p>{movie.Actors}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails