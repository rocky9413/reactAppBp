import { Router } from 'express';
import { getPokemons, getById, getByName } from './apiController';
// import addFavRouter from '../favs.js';

// const moreCharactersRouter = require('./characters.js');

const router = Router();

// OTHER STARTER DATA REQUEST ROUTE HANDLER
// router.use('/favs', addFavRouter);

// router.use('/characters', moreCharactersRouter);

const allChars = (req, res) => {
  res.status(200).send({
    characters: res.locals.characters,
    favs: res.locals.favs
  });
};

const oneChar = (req, res) => {
  res.status(200).send({ onePoke: res.locals.onePoke });
};

router.route('/allPoke').get(getPokemons, allChars);

router.route('/name').get(getPokemons, getByName, oneChar);

router.route('/:id').get(getPokemons, getById, oneChar);

// router.use('/allPoke', getPokemons, (req, res) => {
//   res.status(200).send({
//     characters: res.locals.characters,
//     favs: res.locals.favs
//   });
// });

// router.use('/:id', getPokemons, getById, (req, res) => {
//   res.status(200).send({ onePoke: res.locals.onePoke });
// });

export default router;
