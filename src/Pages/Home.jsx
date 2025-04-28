import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { getPopularMovies, searchMovies } from "../Services/api";

function Home() {

    const [text, setText] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])


    const handleForm = async (e) => {
        e.preventDefault();
        if(!text.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(text)
            setMovies(searchResults)
            setError(null)
        }
        catch (err){
            setError("Failed to load movies...")
        }
        finally{
            setLoading(false)
        }
        setText("");
    }

    return (
        <div className="home">
            <form onSubmit={handleForm}>
                <input type="text" className="search" placeholder="Search Here..." value={text} onChange={(e) => {
                    setText(e.target.value);
                }} />
                <button>Search</button>
            </form>
                
            {loading ? <h1>Loading...</h1> : <div className="movies-grid">
                {movies.map((movie) => (
                    //movie.title.toLowerCase().startsWith(text) && 
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>}

        </div>
    )
}

export default Home;