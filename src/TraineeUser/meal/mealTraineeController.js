const Meal = require('./mealTraineeModel');

// Определение асинхронной функции контроллера
var mealControllerFn = async (req, res) => {
    console.log('Received request body:', req.body)
  try {
    const mealsData = req.body.meals;
    const userId = req.body.userId;
    const dates = req.body.formattedDate
    const activityData = req.body.activity
// объект со всеми данными
    const allData = {
      userId: userId,
      meals: mealsData,
      date: dates,
      activityDataFull: activityData
    };
// Создание новой записи в базе данных на основе полученных данных
    await Meal.create(allData);

    res.status(201).json({ message: 'Данные успешно сохранены в базе данных' });
  } catch (error) {
    console.error('Ошибка при сохранении данных в базе данных:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
}

module.exports = { mealControllerFn }
