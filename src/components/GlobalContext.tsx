import React, { useState, createContext, ReactChild } from 'react';

// interface PokeContextInterface {
//   pokemons: {};
//   setPokemons: string;
//   fetchedChars: string;
//   setFetchedChars: string;
//   query: string;
//   setQuery: string;
//   favs: string;
//   setFavs: string;
//   filTxt: string;
//   setFilTxt: string;
// }

export const PokeContext = createContext<{} | null>(null);

interface Props {
  children: () => JSX.Element | null;
}

export const PokeProvider: React.FC<Props> = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [fetchedChars, setFetchedChars] = useState<boolean | false>(false);
  const [query, setQuery] = useState({});

  // const [favs, setFavs] = useState({});
  // const [filTxt, setFilTxt] = useState('');

  const pokeObj = {
    pokemons,
    setPokemons,
    fetchedChars,
    setFetchedChars
    // query,
    // setQuery,
    // favs,
    // setFavs,
    // filTxt,
    // setFilTxt
  };

  return (
    <PokeContext.Provider value={pokeObj}>{children}</PokeContext.Provider>
  );
};
