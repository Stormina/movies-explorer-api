require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const rateLimiter = require('./middlewares/rateLimit');
const { errorHandler } = require('./middlewares/errorHandler');
const { MONGO_DB_ADDRESS, SERVER_PORT } = require('./utils/constants');

const { PORT = SERVER_PORT, ADDRESS = MONGO_DB_ADDRESS } = process.env;
const app = express();
app.use(cors());

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(ADDRESS);

app.use(requestLogger);
app.use(rateLimiter);

app.use('/', router);

app.use(errorLogger);
app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Порт ${PORT}`);
});
