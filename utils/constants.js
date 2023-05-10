const MONGO_DB_ADDRESS = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const SERVER_PORT = 3000;

const BAD_REQUEST_ERROR = 'Переданы некорректные данные';
const NOT_FOUND_ERROR = 'Пользователь не найден';
const FILM_NOT_FOUND_ERROR = 'Фильм не найден';
const URL_NOT_FOUND_ERROR = 'Страница не найдена';
const FORBIDDEN_ERROR = 'Доступ запрещен';
const AUTH_ERROR = 'Неправильные почта или пароль';
const UN_AUTH_ERROR = 'Требуется авторизация';
const CONFLICT_REQUEST_ERROR = 'Пользователь с таким email уже существует';
const INTERNAL_SERVER_ERROR = 'На сервере произошла ошибка';
const UNCORRECT_URL_ERROR = 'Некорректный адрес';

module.exports = {
  MONGO_DB_ADDRESS,
  SERVER_PORT,
  BAD_REQUEST_ERROR,
  NOT_FOUND_ERROR,
  FORBIDDEN_ERROR,
  UN_AUTH_ERROR,
  CONFLICT_REQUEST_ERROR,
  INTERNAL_SERVER_ERROR,
  UNCORRECT_URL_ERROR,
  URL_NOT_FOUND_ERROR,
  AUTH_ERROR,
  FILM_NOT_FOUND_ERROR,
};
