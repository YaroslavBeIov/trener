const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  userId: String,
  date: Date,
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
  activityDataFull: [
    {
      steps: String,
      weight: String
    }
  ]
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;

