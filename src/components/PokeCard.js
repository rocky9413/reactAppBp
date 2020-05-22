import React from 'react';

const PokeCard = ({ info }) => {
  const {
    id,
    name,
    classification,
    types
    // resistant,
    // weaknesses,
    // weight,
    // height,
    // fleeRate,
    // evolutionRequirements,
    // evolutions,
    // maxCP,
    // maxHP,
    // attacks
  } = info;

  return (
    <article className="pokemonCard">
      <ul className="charDetailsList">
        <li className="charDetail">Id: {id}</li>
        <li className="charDetail">Name: {name}</li>
        <li className="charDetail">Classification: {classification}</li>
        <li className="charDetail">Types: {types}</li>
      </ul>
    </article>
  );
};

export default PokeCard;
