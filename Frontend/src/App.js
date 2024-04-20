import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from './Pages/PokemonList';
import SelectedPokemon from './Pages/SelectedPokemon';

function App (){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/SelectedPokemon/:id" element={<SelectedPokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
