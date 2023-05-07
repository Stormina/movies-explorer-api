const usersRouter = require('express').Router();
const { userIdValidation, patchValidation } = require('../middlewares/validate');

const {
  getCurrentUser,
  patchUser,
} = require('../controllers/users');

usersRouter.get('/me', userIdValidation, getCurrentUser);
usersRouter.patch('/me', patchValidation, patchUser);

module.exports = usersRouter;
