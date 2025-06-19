import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import ThemeToggle from "./components/ThemeToggle";
import MovieDetails from "./components/MovieDetails";
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSeachTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [theme, setTheme] = useState('dark')
  const [selectedMovie, setSelectedMovie] = useState(null)

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

  const fetchMovieDetails = async (id) => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=3b712349`)
      const data = await response.json()
      setSelectedMovie(data)

    } catch (error) {
      setError('Failed to fetch movie details')
    } finally {
      setIsLoading(false)
    }
  }

  const toggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm)
    }
  }, [searchTerm])

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {selectedMovie ? (
        <MovieDetails
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
          theme={theme}
        />
      ) : (
        <>
          <h1 className="app-title">&nbsp;MovieLand&nbsp;</h1>
          <SearchBar setSeachTerm={setSeachTerm}
            theme={theme} />

          {isLoading && <div className="loading">Loading...</div>}
          {error && <div className="error">{error}</div>}

          <MovieList
            movies={movies}
            onMovieSelect={fetchMovieDetails}
            theme={theme}
          />
        </>
      )}
    </div>
  )
}

export default App