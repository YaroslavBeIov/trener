const Meal = require('./mealModel');

exports.getAllMeals = async () => {
  try {
    const meals = await Meal.find();
    return meals;
  } catch (error) {
    throw error;
  }
};