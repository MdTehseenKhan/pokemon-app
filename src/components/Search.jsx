import { useState } from "react"
import { usePokemon } from "../contexts/PokemonContext"

const Search = () => {
  const { searchPokemon } = usePokemon()
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    searchPokemon(search)
  }
  return (
    <form className="search" onSubmit={handleSearch}>
      <div className="relative">
        <div className="search-icon">
          <svg aria-hidden="true" className="search-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <input
          type="search"
          className="search-input"
          placeholder="Search Pokemon..."
          required=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
  )
}

export default Search
