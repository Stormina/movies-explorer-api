const mongoose = require('mongoose');
const { isURL } = require('validator');
const { BAD_REQUEST_ERROR } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return isURL(link);
      },
      message: BAD_REQUEST_ERROR,
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return isURL(link);
      },
      message: BAD_REQUEST_ERROR,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return isURL(link);
      },
      message: BAD_REQUEST_ERROR,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  /* movieId: {
    type: Number,
    required: true,
  }, */
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
