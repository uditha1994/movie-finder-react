import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSeachTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=3b712349`)
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        setMovies([])
        setError(data.Error || 'No Movies found')
      }
    } catch (error) {
      setError('Failed to search movie')
      setMovies([]);
    } finally {
      setIsLoading(false)
      setError(null)
    }
  }

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm)
    }
  }, [searchTerm])

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <SearchBar setSeachTerm={setSeachTerm} />

      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      <MovieList movies={movies} />
    </div>
  )
}

export default App