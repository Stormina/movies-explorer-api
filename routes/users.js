const usersRouter = require('express').Router();
const { patchValidation } = require('../middlewares/validate');

const {
  getCurrentUser,
  patchUser,
} = require('../controllers/users');

usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', patchValidation, patchUser);

module.exports = usersRouter;
