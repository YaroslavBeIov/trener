const Meal = require('../meal/mealTraineeModel');

var getUserStatistic = async (req, res) => {
  const userId = req.params.id;

  try {
    const userMeals = await Meal.find({ userId: userId });
    res.json(userMeals);
  } catch (error) {
    console.error('Ошибка при получении профиля пользователя:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

module.exports = {getUserStatistic}
