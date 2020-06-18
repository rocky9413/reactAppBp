import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PokeProvider } from './components/GlobalContext';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import './styles.css';

const App = () => {
  return (
    <PokeProvider>
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/getall" component={Pokemons} exact />
        </Switch>
      </HashRouter>
    </PokeProvider>
  );
};

export default App;
