import React, { useState, createContext } from 'react';

export const PokeContext = createContext();

export const UserProvider = props => {
  const [pokemons, setPokemons] = useState([]);
  const [fetchedChars, setFetchedChars] = useState(false);
  const [query, setQuery] = useState({});
  const [favs, setFavs] = useState({});

  const [filTxt, setFilTxt] = useState('');

  const userObj = {
    pokemons,
    setPokemons,
    fetchedChars,
    setFetchedChars,
    query,
    setQuery,
    favs,
    setFavs,
    filTxt,
    setFilTxt
  };

  return (
    <PokeContext.Provider value={userObj}>
      {props.children}
    </PokeContext.Provider>
  );
};
