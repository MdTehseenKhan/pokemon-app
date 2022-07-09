import React from 'react';
import { usePokemon } from "./contexts/PokemonContext";
import PokemonCard from "./components/PokemonCard";
import Pagination from "./components/Pagination";
import HashLoader from "react-spinners/HashLoader"
import './App.css';

function App() {
  const { loading, pokemons } = usePokemon()

  if (loading) return (<div className="loader">
    <HashLoader size="100px" color="#000" />
  </div>)
  
  return (
    <main className='app-container'>
      <h1>Pokemon App</h1>
      <div className='pokemon-container'>
        <div className='all-container'>
          {pokemons.map((pokemon, index) => {
            return (<PokemonCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              />)
          })}
        </div>
        <Pagination />
      </div>
    </main>
  );
}

export default App;