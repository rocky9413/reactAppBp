import React, { useState, createContext } from 'react';

interface PokeContextInterface {
  pokemons: string;
  setPokemons: string;
  fetchedChars: string;
  setFetchedChars: string;
  query: string;
  setQuery: string;
  favs: string;
  setFavs: string;
  filTxt: string;
  setFilTxt: string;
}

export const PokeContext = createContext<PokeContextInterface | null>(null);

type Props = {
  children: React.ReactNode;
};

export const PokeProvider = ({ children }: Props) => {
  const [pokemons, setPokemons] = useState([]);
  const [fetchedChars, setFetchedChars] = useState(false);
  const [query, setQuery] = useState({});
  const [favs, setFavs] = useState({});

  const [filTxt, setFilTxt] = useState('');

  const pokeObj = {
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
    <PokeContext.Provider value={pokeObj}>{children}</PokeContext.Provider>
  );
};
