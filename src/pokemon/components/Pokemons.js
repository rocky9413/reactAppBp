import React, { useEffect, useContext } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { PokeContext } from './GlobalContext';
import PokeCard from './PokeCard';

const Pokemons = () => {
  const {
    pokemons,
    setPokemons,
    fetchedChars,
    setFetchedChars,
    query,
    setQuery,
    favs,
    setFavs
  } = useContext(PokeContext);

  const { url } = useMatch();

  useEffect(() => {
    fetch('/api/pokemons')
      .then(res => res.json())
      .then((data) => {
        const { characters, favs = {} } = data;
        setFetchedChars(true);
        setPokemons(characters);
        setFavs(favs);
      })
      .catch(err => console.log('Fetch: ERROR: ', err));
  }, []);

  const allPokemons = pokemons.map((elem, i) => {
    return (
      <Link
        key={elem.id}
        style={{ textDecoration: 'none' }}
        to={`${url}/${elem.id}`}
      >
        <PokeCard key={elem.id} info={elem} />
      </Link>
    );
  });

  return !fetchedChars ? (
    <div>
      <h1>Loading data, please wait...</h1>
    </div>
  ) : (
    <div className="router">
      <h1>Showing All Pokemons:</h1>
      <Link to="/">Get Back to Main Page</Link>
      <div className="charContainer">{allPokemons}</div>
    </div>
  );
};

export default Pokemons;
