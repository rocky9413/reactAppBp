const express = require('express');

const fileController = require('../controllers/fileController');

const router = express.Router();

// ADD STORE FAVORITE ROUTE HANDLER HERE
router.post(
  '/:id',
  fileController.getFavs,
  fileController.addFav,
  (req, res, next) => {
    res.status(200).send({ favs: res.locals.favs });
    res.end();
  }
);

router.get('/', fileController.getCharacters, (req, res, next) => {
  res.status(200).send({ characters: res.locals.characters });
  res.end();
});

// ADD REMOVE FAVORITE ROUTE HANDLER HERE
router.delete(
  '/:id',
  fileController.getFavs,
  fileController.removeFav,
  (req, res) => {
    res.status(200).send({ favs: res.locals.favs });
    res.end();
  }
);

module.exports = router;
