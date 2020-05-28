import { Router } from 'express';
import { getPokemons, getById, getByName } from './apiController';
// import addFavRouter from '../favs.js';

// const moreCharactersRouter = require('./characters.js');

const router = Router();

// OTHER STARTER DATA REQUEST ROUTE HANDLER
// router.use('/favs', addFavRouter);

// router.use('/characters', moreCharactersRouter);

router.use(
  '/allPoke',
  getPokemons,
  // getFavs,
  (req, res) => {
    res
      .status(200)
      .send({ characters: res.locals.characters, favs: res.locals.favs });
  }
);

router.use('/name', getPokemons, getByName, (req, res) => {
  res.status(200).send({ onePoke: res.locals.onePoke });
});

router.use('/:id', getPokemons, getById, (req, res) => {
  res.status(200).send({ onePoke: res.locals.onePoke });
});

export default router;
