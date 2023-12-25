var express = require('express');
var trenerController = require('../src/trener/trenerController.js');
const router = express.Router();

router.post('/trener/login', trenerController.loginTrenerControllerFn);
router.post('/trener/create', trenerController.createTrenerControllerFn);

module.exports = router;

