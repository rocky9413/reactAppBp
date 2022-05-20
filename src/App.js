import React from 'react';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';

import PokemonApp from './pokemon/PokemonApp';

import styled from 'styled-components';
import './styles.css';

const StyledAppSelection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 2rem;
`;

const StyledLink = styled.div`
    font-size: 1.5rem;
`;

const AppSelection = () => {
    return (
        <StyledAppSelection>
            <h1>Select apps from below to begin: </h1>
            <StyledLink>
                <Link to="/pokemon">Play Pokemon</Link>
            </StyledLink>
        </StyledAppSelection>
    );
};

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<AppSelection />} />
                <Route exact path="/pokemon" element={<PokemonApp />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
