import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'


function App() {
  const { movies: mappedMovies } = useMovies()
  return (
    <>
      <div className='m1'>
        <header>
          <h1 className='title'>Movie Finder</h1>

          <form className="form1">
            <input placeholder="Batman,Star Wars..." />
            <button>Search</button>

          </form>
        </header>
        <main>
          <Movies movies={mappedMovies} />
        </main>
      </div>
    </>
  )
}

export default App
