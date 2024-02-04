const jwt = require('jsonwebtoken');

module.exports.authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  const secretKey = crypto.randomBytes(32).toString('hex');
  if (!token) {
    return res.status(401).json({ status: false, message: 'Токен отсутствует' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ status: false, message: 'Токен недействителен' });
    }

    // Если токен валиден, вы можете добавить информацию о пользователе в объект req для последующих обработчиков маршрута.
    req.user = user;

    // Вызовите next() для передачи управления следующему middleware или маршруту.
    next();
  });
};

