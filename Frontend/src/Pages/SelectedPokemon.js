import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const SelectedPokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [nextPokemonId, setNextPokemonId] = useState(null);
  const [prevPokemonId, setPrevPokemonId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
        setNextPokemonId(response.data.id + 1);
        setPrevPokemonId(response.data.id - 1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleClickNext = () => {
    setNextPokemonId(nextPokemonId + 1);
    setPrevPokemonId(prevPokemonId + 1);
  };

  const handleClickPrev = () => {
    setNextPokemonId(nextPokemonId - 1);
    setPrevPokemonId(prevPokemonId - 1);
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {prevPokemonId > 0 && (
        <Link to={`/selectedPokemon/${prevPokemonId}`}>
          <button>Previous</button>
        </Link>
      )}
      {nextPokemonId && (
        <Link to={`/selectedPokemon/${nextPokemonId}`}>
          <button>Next</button>
        </Link>
      )}
    </div>
  );
};

export default SelectedPokemon;
