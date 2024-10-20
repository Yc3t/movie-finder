import './App.css'
import { useRef} from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'


function App() {
  const { movies } = useMovies()
  const inputRef = useRef()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)

  }


  return (
    <>
      <div className='m1'>
        <header>
          <h1 className='title'>Movie Finder</h1>

          <form onSubmit={handleSubmit} className="form1">

            <input onChange={handleChange} value={search} name='query' ref={inputRef} placeholder="Batman,Star Wars..." />

            <button>Search</button>

          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
