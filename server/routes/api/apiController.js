import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

import { Pokemons } from './apiModel';

export const getPokemons = (req, res, next) => {
  const pokemons = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '../../data/pokemons.json'),
      'UTF-8'
    )
  );

  if (!pokemons) {
    return next({
      log: 'ERROR: Error getting data from pokemons.json file',
      message: {
        err: 'Error in getPokemons. Check server logs.'
      }
    });
  }

  mongoose.connection.db.listCollections().toArray((err, data) => {
    const dbColl = []; // store db collections
    for (let i = 0; i < data.length; i++) {
      dbColl.push(data[i].name);
    }

    // make sure collection doesn't exist before create new collection
    if (!dbColl.includes('pokemons')) {
      Pokemons.collection.insertMany([...pokemons], {
        ordered: true
      });
    }
  });

  res.locals.characters = pokemons;
  next();
};

export const getByName = (req, res, next) => {
  const { pokeName } = req.body;

  Pokemons.findOne({ name: pokeName }, function(err, onePoke) {
    if (err) {
      return res.send({ err: 'error in getByName' });
    }
    if (onePoke) res.locals.onePoke = onePoke;
    else {
      res.locals.onePoke = { notExist: 'pokemon name not exist!!' };
    }

    return next();
  });
};

export const getById = (req, res, next) => {
  const id = req.params.id === ':id' ? req.body.pokeId : req.params.id;

  if (Number(id) < 1 || Number(id) > 150 || id.length > 3) {
    res.locals.onePoke = { notExist: 'please enter correct id!!' };
    return next();
  }

  Pokemons.findOne({ id }, function(err, onePoke) {
    if (err) {
      return res.send({ err: 'error in getById' });
    }
    // console.log('onepoke === ', onePoke);
    if (onePoke.id) res.locals.onePoke = onePoke;
    else {
      res.locals.onePoke = { notExist: 'pokemon id not exist!!' };
    }
    return next();
  });
};

// MIDDLEWARE TO GET FAVORITE CHARACTERS HERE
export const getFavs = (req, res, next) => {
  const results = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/favs.json'), 'UTF-8')
  );
  res.locals.favs = results || {};
  next();
};

// ADD MIDDLEWARE TO ADD A FAVORITE CHARACTER HERE
export const addFav = (req, res, next) => {
  if (!(res.locals.favs || typeof res.locals.favs === 'object')) {
    return next({
      log: 'addFavs: ERROR: Invalid data on res.locals object.',
      message: {
        err: 'addFavs: ERROR: Check server logs for details'
      }
    });
  }
  const { id } = req.params;
  if (res.locals.favs.id) {
    next();
  }
  res.locals.favs[id] = true;
  fs.writeFileSync(
    path.resolve(__dirname, '../data/favs.json'),
    JSON.stringify(res.locals.favs),
    'UTF-8'
  );
  next();
};

// MIDDLEWARE TO REMOVE A CHARACTER FROM FAVORITES HERE
export const removeFav = (req, res, next) => {
  const favsObj = res.locals.favs;
  const { id } = req.params;
  delete favsObj[id];
  fs.writeFileSync(
    path.resolve(__dirname, '../data/favs.json'),
    JSON.stringify(favsObj),
    'UTF-8'
  );
  next();
};
