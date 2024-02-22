var express = require('express');
var trenerController = require('../src/trener/trenerController.js');
var traineeController = require('../src/TraineeUser/trainee/traineeController.js')
var mealController = require('../src/TraineeUser/meal/mealController.js')
var settingsController = require('../src/TraineeUser/settingsTrainee/settingsController.js')
var profileTraineeController = require('../src/TraineeUser/profileTrainee/profileTraineeController.js')
const router = express.Router();

router.post('/trener/login', trenerController.loginTrenerControllerFn);
router.post('/trener/create', trenerController.createTrenerControllerFn);
router.post('/trainee/login', traineeController.loginTraineeControllerFn);
router.post('/trainee/create', traineeController.createTraineeControllerFn);
router.post('/trainee/meals', mealController.mealControllerFn)
router.post('/trainee/settings/:id', settingsController.saveUserSettings)
router.get('/trainee/profile/:id', profileTraineeController.getUserProfile);

module.exports = router;

