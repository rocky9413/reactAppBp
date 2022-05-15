import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/GlobalContext';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';
import './styles.css';

const App = () => {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:pokemonId" element={<PokemonDetail />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  );
};

export default App;
