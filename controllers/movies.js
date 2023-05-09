const mongoose = require('mongoose');
const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/ForbiddenError');
const { BAD_REQUEST_ERROR, FORBIDDEN_ERROR, NOT_FOUND_ERROR } = require('../utils/constants');

module.exports.getAllMovies = (req, res, next) => {
  const userId = req.params._id;
  Movie.find({ userId })
    .then((movies) => res.send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequestError(BAD_REQUEST_ERROR));
      } else next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.body._id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(NOT_FOUND_ERROR);
      }
      if (!movie.owner.equals(req.user._id)) {
        throw new ForbiddenError(FORBIDDEN_ERROR);
      } else {
        return Movie.deleteOne(movie)
          .then(() => res.send(movie));
      }
    })
    .catch(next);
};
