import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import { PokeContext } from './GlobalContext';

const Home = () => {
  // const { filTxt, setFilTxt } = useContext(PokeContext);

  // const handleUserInput = filterText => setFilTxt(filterText);

  return (
    <div>
      <h1>Lets Get Pokemons: </h1>
      {/* <a href="/api">Get all Pokemons</a> */}
      <Link to="/getall">Get all Pokemons</Link>
      <hr />
      {/* <SearchBar filTxt={filTxt} onUserInput={handleUserInput} /> */}
      <SearchBar />
    </div>
  );
};

export default Home;
