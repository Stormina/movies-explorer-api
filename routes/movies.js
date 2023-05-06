const moviesRouter = require('express').Router();
const { movieValidation, idValidation } = require('../middlewares/validate');

const {
  getAllMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getAllMovies);
moviesRouter.post('/', movieValidation, createMovie);
moviesRouter.delete('/_id', idValidation, deleteMovie);

module.exports = moviesRouter;
