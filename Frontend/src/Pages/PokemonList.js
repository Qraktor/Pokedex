import React from 'react';
import { Link } from 'react-router-dom';

const PokemonList = ({ pokemons }) => {
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
