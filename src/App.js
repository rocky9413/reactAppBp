import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PokeProvider } from './components/GlobalContext';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';
import './styles.css';

const App = () => {
  return (
    <PokeProvider>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/pokemons/:pokemonId">
            <PokemonDetail />
          </Route>
        </Switch>
      </HashRouter>
    </PokeProvider>
  );
};

export default App;
