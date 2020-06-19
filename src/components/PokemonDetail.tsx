import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { PokeContext } from './GlobalContext';

interface Props = {
  children: React.ReactNode;
};

const PokemonDetail: React.FC = () => {
  const { pokemonId } = useParams();

  const history = useHistory();

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


// interface Person {
//   firstName: string;
//   lastName: string;
// }

// interface Props {
//   text: string;
//   ok?: boolean;
//   i?: number;
//   fn?: (bob: string) => string;
//   person: Person;
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// interface TextNode {
//   text: string;
// }