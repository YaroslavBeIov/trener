var express = require('express');
var trenerController = require('../src/trener/trenerController.js');
var traineeController = require('../src/trainee/traineeController.js');
const router = express.Router();

router.post('/trener/login', trenerController.loginTrenerControllerFn);
router.post('/trener/create', trenerController.createTrenerControllerFn);
router.post('/trainee/login', traineeController.loginTraineeControllerFn);
router.post('/trainee/create', traineeController.createTraineeControllerFn);  

module.exports = router;

