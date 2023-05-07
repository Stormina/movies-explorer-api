const { celebrate, Joi, CelebrateError } = require('celebrate');
const validator = require('validator');
const { UNCORRECT_URL_ERROR } = require('../utils/constants');

const validate = (value) => {
  const result = validator.isURL(value);
  if (result) {
    return value;
  }
  throw new CelebrateError(UNCORRECT_URL_ERROR);
};

module.exports.loginValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.userValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.movieIdValidation = celebrate({
  body: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
});

module.exports.userIdValidation = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
});

module.exports.patchValidation = celebrate({
  body: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports.movieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(validate),
    trailerLink: Joi.string().required().custom(validate),
    thumbnail: Joi.string().required().custom(validate),
    /* movieId: Joi.number().required(), */
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});
