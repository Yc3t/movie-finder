const apikey = import.meta.env.VITE_OMDB_KEY
export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${search}`)
    const json = await response.json()

    const movies = json.Search
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

  } catch (e) {
    throw new Error('Error searching movies')

  }



}   
