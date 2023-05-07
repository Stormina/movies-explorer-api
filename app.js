require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const rateLimiter = require('./middlewares/rateLimit');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { errorHandler } = require('./middlewares/errorHandler');
const { MONGO_DB_ADDRESS, SERVER_PORT } = require('./utils/constants');

const { PORT = SERVER_PORT } = process.env;
const app = express();

app.use(helmet());
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGO_DB_ADDRESS);

app.use(requestLogger);

app.use('/', router);

app.use(errorLogger);
app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Порт ${PORT}`);
});
