const stata = require('./mealModel');

exports.getAllMeals = async () => {
  try {
    const statistic = await stata.find();
    return statistic;
  } catch (error) {
    throw error;
  }
};