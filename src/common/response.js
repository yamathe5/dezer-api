// Respuestas para las peticiones
const createError = require("http-errors"); // SOlo errores > 400 no respuestas exitosas < 400

module.exports.Response = {
  success: (res, status = 200, message = "Ok", body = {}) => {
    res.status(status).json({ message, body });
  },
  error: (res, error = null) => {
    const { statusCode, message } = error
      ? error
      : new createError.InternalServerError();
    res.status(statusCode).json({ message });
  },
};
