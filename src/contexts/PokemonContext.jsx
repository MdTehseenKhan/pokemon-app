import { createContext, useContext, useState, useEffect } from "react"

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const [pokemons, setPokemons] = useState([])

  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()

  const getAllPokemons = (results) => {
    setPokemons([])

    results.forEach(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json()

      setPokemons((currentList) => [...currentList, data])
    })
  }

  const getPokemons = async () => {
    setLoading(true)

    const res = await fetch(currentPageUrl)
    const data = await res.json()

    setPrevPageUrl(data.previous)
    setNextPageUrl(data.next)

    getAllPokemons(data.results)

    setLoading(false)
  }

  const searchPokemon = async (searchedTerm) => {
    if (!searchedTerm) getPokemons()

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    const data = await res.json()

    const searchedList = data?.results.filter(({ name }) => name.toLowerCase().includes(searchedTerm.toLowerCase()))

    getAllPokemons(searchedList)
  }

  useEffect(() => {
    getPokemons()
    return () => setPokemons([])
  }, [currentPageUrl])

  return (
    <PokemonContext.Provider value={{ loading, searchPokemon, pokemons, setCurrentPageUrl, prevPageUrl, nextPageUrl }}>
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon() {
  return useContext(PokemonContext)
}
