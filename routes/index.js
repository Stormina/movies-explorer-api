const router = require('express').Router();
const moviesRouter = require('./movies');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');
const { URL_NOT_FOUND_ERROR } = require('../utils/constants');
const { loginValidation, userValidation } = require('../middlewares/validate');
const { login, createUser } = require('../controllers/users');

router.post('/signin', loginValidation, login);
router.post('/signup', userValidation, createUser);
router.use('/movies', auth, moviesRouter);
router.use('/users', auth, usersRouter);
router.use('/*', auth, (req, res, next) => {
  next(new NotFoundError(URL_NOT_FOUND_ERROR));
});

module.exports = router;
