const stata = require('../meal/mealTraineeModel');
// Определение асинхронной функции для получения статистики пользователя
var getUserStatistic = async (req, res) => {
  const userId = req.params.id;

  try {
    const userStatistic = await stata.find({ userId: userId });
    res.json(userStatistic);
  } catch (error) {
    console.error('Ошибка при получении профиля пользователя:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

module.exports = {getUserStatistic}
