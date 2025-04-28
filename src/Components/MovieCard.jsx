function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    {/* <div className="fav-btn">
                        ❤
                    </div> */}
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h5>{movie.release_date?.split("-")[0]}</h5>
            </div>
        </div>
    )
}

export default MovieCard;