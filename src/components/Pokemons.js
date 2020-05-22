import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    fetch('/api/allPoke')
      .then(res => res.json())
      .then(({ characters, favs = {} }) => {
        setFetchedChars(true);
        setPokemons(characters);
        setFavs(favs);
      })
      .catch(err => console.log('Fetch: ERROR: ', err));
  }, []);

  const charElems = pokemons.map((elem, i) => {
    return (
      <PokeCard
        key={i}
        info={elem}
        // isFav={favs && favs[id] ? favs[id] : false}
        // favClicked={this.favClicked}
      />
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
      <div className="charContainer">{charElems}</div>
    </div>
  );
};

export default Pokemons;
