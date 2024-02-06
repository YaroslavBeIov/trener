var express = require('express');
var trenerController = require('../src/trener/trenerController.js');
var traineeController = require('../src/trainee/traineeController.js');
var mealController = require('../src/meal/mealController.js')
const router = express.Router();

router.post('/trener/login', trenerController.loginTrenerControllerFn);
router.post('/trener/create', trenerController.createTrenerControllerFn);
router.post('/trainee/login', traineeController.loginTraineeControllerFn);
router.post('/trainee/create', traineeController.createTraineeControllerFn);
router.post('/trainee/meals', mealController.mealControllerFn) 

module.exports = router;

