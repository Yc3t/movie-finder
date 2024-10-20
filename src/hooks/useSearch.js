import { useState, useEffect } from "react"
export function useSearch() {
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  useEffect(() => {

    if (search === "") {
      setError('No input')
      return
    }

    if (search.length < 3) {
      setError("The search should have more than 3 characters")
      return
    }

    setError(null)
  }, [search])


  return { search, updateSearch, error }



}
