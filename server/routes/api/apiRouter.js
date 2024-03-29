import { Router } from 'express';
// import { getPokemons, getById, getByName } from './apiController';
import controllers from './apiController';
// import addFavRouter from '../favs.js';

// const moreCharactersRouter = require('./characters.js');

const router = Router();

// OTHER STARTER DATA REQUEST ROUTE HANDLER
// router.use('/favs', addFavRouter);

// router.use('/characters', moreCharactersRouter);

router.get('/getAllPokemon', controllers.checkNgetAll);

router.post('/getOneByName', controllers.getOneByName);

router.post('/getOneById', controllers.getOneById);

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
