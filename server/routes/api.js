const express = require('express');
const fileController = require('../controllers/fileController');
const addFavRouter = require('./favs.js');
// const moreCharactersRouter = require('./characters.js');

const router = express.Router();

// OTHER STARTER DATA REQUEST ROUTE HANDLER
router.use('/favs', addFavRouter);

// router.use('/characters', moreCharactersRouter);

router.use(
  '/allPoke',
  fileController.getCharacters,
  fileController.getFavs,
  // eslint-disable-next-line no-unused-vars
  (req, res, next) => {
    res
      .status(200)
      .send({ characters: res.locals.characters, favs: res.locals.favs });
    res.end();
  }
);

router.use(
  '/name',
  fileController.getCharacters,
  fileController.getByName,
  // eslint-disable-next-line no-unused-vars
  (req, res, next) => {
    res.status(200).send({ onePoke: res.locals.onePoke });
    res.end();
  }
);

router.use(
  '/:id',
  fileController.getCharacters,
  fileController.getById,
  // eslint-disable-next-line no-unused-vars
  (req, res, next) => {
    res.status(200).send({ onePoke: res.locals.onePoke });
    res.end();
  }
);

module.exports = router;
