import React, { useState } from 'react';
import './App.css';
import BuscaPokemon from './components/BuscaPokemon';
import Informacao from './components/informacao';
import pokemonLogo from './img/pokemon3d.png';

function App() {

  const [pokemonData, setPokemonData] = useState(null);

  const handleBuscaPokemon = (data) => {
    setPokemonData(data);
  };

  return (

    <div className="App">

      <img src={pokemonLogo} alt="Pokemon Logo" width={350}/>

      <h3>Procure aqui por Pokémons para visualizar algumas de suas informações!</h3>

      <BuscaPokemon onBuscaPokemon={handleBuscaPokemon} />

      <div className="Informacao">
        
        <Informacao pokemon={pokemonData} />

      </div>

    </div>

  );

}

export default App;
