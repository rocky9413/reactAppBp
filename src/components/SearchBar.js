import React, { useState, useRef, useContext } from 'react';
import { PokeContext } from './GlobalContext';
import PokeCard from './PokeCard';

const SearchBar = ({ filTxt, onUserInput }) => {
  const inputEl = useRef(null);
  const handleChange = () => {
    // console.log('inputEl.current.value', inputEl.current);
    onUserInput(inputEl.current.value);
  };

  const { query, setQuery } = useContext(PokeContext);

  const [pokeId, setPokeId] = useState('');
  const [pokeName, setName] = useState('');
  const [notFound, setNotFound] = useState('');

  const handleId = event => {
    setName('');
    const { value = '' } = event.target;
    const number = parseInt(value);
    if (number >= 100) {
      setPokeId(number);
    } else if (number >= 10) {
      setPokeId('0' + number);
    } else if (number >= 1) {
      setPokeId('00' + number);
    } else {
      setPokeId(value);
    }
  };
  const handleName = event => {
    setPokeId('');
    setName(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' }
    };
    const { placeholder = '' } = e.target[0];
    let fetchPath = '';

    if (placeholder === 'Search by name') {
      options.body = JSON.stringify({ pokeName });
      fetchPath = 'name';
    } else if (placeholder === 'Search by id') {
      options.body = JSON.stringify({ pokeId });
      fetchPath = 'id';
    }

    fetch(`/api/${fetchPath}`, options)
      .then(res => res.json())
      .then(data => {
        if (data === undefined || data.notExist) {
          setNotFound('Pokemon not found, enter correct name or id');
        } else {
          const { id = '' } = data;
          if (!query.hasOwnProperty(id)) {
            const newData = {
              ...query,
              [id]: data,
            }
            setQuery(newData);
          }
        }
      })
      .catch(err => console.log('Fetch: ERROR: ', err));
  };

  const renderPokemon = () => {
    return Object.values(query).map(pokemon => {
      return (
        <PokeCard key={pokemon.id} pokemon={pokemon} />
      );
    });
  };

  return (
    <>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <label>
            Query By ID:
            <input
              className="search"
              type="text"
              placeholder="Search by id"
              value={pokeId}
              onChange={handleId}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
        <br />

        <form onSubmit={e => handleSubmit(e)}>
          <label>
            Query By Name:
            <input
              className="search"
              type="text"
              placeholder="Search by name"
              value={pokeName}
              onChange={handleName}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
        <br />

        <form onSubmit={e => handleSubmit(e)}>
          <label>
            Query List of Pokemon Types:{' '}
            <input
              className="search"
              type="text"
              placeholder="Get list of pokemon types"
              value={filTxt}
              ref={inputEl}
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
        <br />

        {/* <form onSubmit={e => handleSubmit(e)}>
          <label>
            Get Favs Pokemons:
            <input type="text" name="password" />
            <input type="submit" value="Submit" />
          </label>
        </form> */}

        {notFound ? notFound : null}
        <br />
      </div>
      <div className="pokemonContainer">
        {renderPokemon()}
      </div>
    </>
  );
};

export default SearchBar;
