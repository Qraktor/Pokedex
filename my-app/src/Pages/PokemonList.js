import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index + 1}>
            <Link to={`/selectedPokemon/${index + 1}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
