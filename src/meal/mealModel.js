const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  userId: String,
  data: Date,
  meals: [
    {
      name: String,
      products: [
        {
          name: String,
          grams: Number,
        },
      ],
    },
  ],
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;

