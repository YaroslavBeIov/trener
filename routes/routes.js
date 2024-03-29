var express = require('express');
var trenerController = require('../src/trener/trenerController.js');
var traineeController = require('../src/TraineeUser/trainee/traineeController.js')
var mealController = require('../src/TraineeUser/meal/mealTraineeController.js')
var settingsController = require('../src/TraineeUser/settingsTrainee/settingsController.js')
var profileTraineeController = require('../src/TraineeUser/profileTrainee/profileTraineeController.js')
var statisticTraineeController = require('../src/TraineeUser/statisticTrainee/statisticTraineeController.js')
const router = express.Router();

router.post('/trener/login', trenerController.loginTrenerControllerFn);
router.post('/trener/create', trenerController.createTrenerControllerFn);
router.post('/trainee/login', traineeController.loginTraineeControllerFn);
router.post('/trainee/create', traineeController.createTraineeControllerFn);
router.post('/trainee/meals', mealController.mealControllerFn)
router.post('/trainee/settings/:id', settingsController.saveUserSettings)
router.get('/trainee/profile/:id', profileTraineeController.getUserProfile);
router.get('/trainee/statistic/:id', statisticTraineeController.getUserStatistic);

module.exports = router;

