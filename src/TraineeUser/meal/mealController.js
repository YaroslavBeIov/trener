const Meal = require('./mealModel');


var mealControllerFn = async (req, res) => {
    console.log('Received request body:', req.body)
  try {
    const mealsData = req.body.meals;
    const userId = req.body.userId;
    const date = req.body.formattedDate

    const allData = {
      userId: userId,
      meals: mealsData,
      data: date
    };

    await Meal.create(allData);

    res.status(201).json({ message: 'Данные успешно сохранены в базе данных' });
  } catch (error) {
    console.error('Ошибка при сохранении данных в базе данных:', error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
}

module.exports = { mealControllerFn }
