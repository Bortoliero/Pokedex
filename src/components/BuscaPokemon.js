import React, { useState } from 'react';
import axios from 'axios';
import './BuscaPokemon.css';

function BuscaPokemon({ onBuscaPokemon }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleBuscaPokemon = async () => {
    
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      onBuscaPokemon(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do Pokémon:', error);
    }

  };

  return (
    
    <div>

      <input
        type="text"
        placeholder="Busque um Pokémon"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
      />

      <button onClick={handleBuscaPokemon}>Buscar</button>

    </div>

  );

}

export default BuscaPokemon;
