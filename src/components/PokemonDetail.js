import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PokeContext } from './GlobalContext';

const PokemonDetail = props => {
  const { pokemonId } = useParams();

  const history = useNavigate();

  const { pokemons } = useContext(PokeContext);

  const thisPokemon = pokemons.find(elem => elem.id === pokemonId);

  const filteredData = Object.keys(thisPokemon)
    .filter(key => key !== '_id')
    .reduce((obj, key) => {
      obj[key] = thisPokemon[key];
      return obj;
    }, {});

  const handleClick = () => {
    setTimeout(() => {
      history.push('/');
    }, 2000);
  };

  return (
    <div>
      <h1>{thisPokemon.name} Detail:</h1>
      <div>
        <pre>{JSON.stringify(filteredData, null, 2)}</pre>
      </div>
      <button onClick={handleClick}>Go back to main page</button>
    </div>
  );
};

export default PokemonDetail;
