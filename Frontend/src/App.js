import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from './Pages/PokemonList';
import SelectedPokemon from './Pages/SelectedPokemon';

function App (){
  const pokemons = [
    { id: 1, name: 'Bulbasaur', image: 'bulbasaur.jpg', type: 'Grass/Poison', height: '0.7m', weight: '6.9kg' },
    { id: 2, name: 'Charmander', image: 'charmander.jpg', type: 'Fire', height: '0.6m', weight: '8.5kg' },
    { id: 3, name: 'Squirtle', image: 'squirtle.jpg', type: 'Water', height: '0.5m', weight: '9.0kg' },
    // Add more Pokemon data as needed
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList pokemons={pokemons} />} />
        <Route path="/pokemon/:id" element={<SelectedPokemon pokemons={pokemons} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

