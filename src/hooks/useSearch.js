import { useState, useEffect, useRef } from "react"
export function useSearch() {
  const [search, updateSearch] = useState("")
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {

    if (isFirstInput.current){
      isFirstInput.current = search === '' //it wont cause a re-render because its using useref
      return
    }

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
