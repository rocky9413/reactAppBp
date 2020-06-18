import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './components/GlobalContext';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';
import './styles.css';

const App = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default App;
