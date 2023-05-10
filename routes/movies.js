const moviesRouter = require('express').Router();
const { movieValidation, movieIdValidation } = require('../middlewares/validate');

const {
  getAllMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getAllMovies);
moviesRouter.post('/', movieValidation, createMovie);
moviesRouter.delete('/:id', movieIdValidation, deleteMovie);

module.exports = moviesRouter;
