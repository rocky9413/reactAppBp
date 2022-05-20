import React from 'react';
import { Link } from 'react-router-dom';
import { UserProvider } from './components/GlobalContext';

// import Home from './components/Home';
// import Pokemons from './components/Pokemons';
// import PokemonDetail from './components/PokemonDetail';
import SearchBar from './components/SearchBar';

import './styles.css';

const PokemonApp = () => {
  return (
    <UserProvider>
      <div className="main">
        <h1>Lets Get Pokemons: </h1>
        <Link to="/">Back to Home Page</Link>
        {/* <a href="/api/pokemons">Get all Pokemons</a> */}
        {/* <Link to="/pokemons">Get all Pokemons</Link> */}
        <hr />
        <SearchBar />
      </div>
      {/* 
        <Route exact path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:pokemonId" element={<PokemonDetail />} />
      */}
    </UserProvider>
  );
};

export default PokemonApp;
