import './App.css'
import { useState,useCallback} from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App() {

  const debouncedGetMovies = useCallback(
  debounce(search => {
    console.log('search',search)
    getMovies({search})
    
  },500)
  ,[])


  const { search, updateSearch, error } = useSearch()


  const [sort, setSort] = useState(false)

  const { movies, getMovies,loading } = useMovies({search,sort})
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)


  }
  const handleSort=() =>{
    setSort(!sort)

  }


  return (
    <>
      <div className='m1'>
        <header>
          <h1 className='title'>Movie Finder</h1>

          <form onSubmit={handleSubmit} className="form1">

            <input onChange={handleChange} value={search} name='query' placeholder="Batman,Star Wars..." />

            <input type='checkbox' onChange={handleSort} checked={sort}/>
            

            <button>Search</button>

          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          {loading ? <p>loading...</p> : <Movies movies={movies} />}
        </main>
      </div>
    </>
  )
}

export default App
