import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from './components/GlobalContext';
import Home from './components/Home';
import Pokemons from './components/Pokemons';
import './styles.css';

const App = () => {
  return (
    <UserProvider>
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/getall" component={Pokemons} exact />
        </Switch>
      </HashRouter>
    </UserProvider>
  );
};

export default App;
