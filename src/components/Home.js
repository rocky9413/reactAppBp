import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div>
      <h1>Lets Get Pokemons: </h1>
      {/* <a href="/api/pokemons">Get all Pokemons</a> */}
      <Link to="/pokemons">Get all Pokemons</Link>
      <hr />
      <SearchBar />
    </div>
  );
};

export default Home;
