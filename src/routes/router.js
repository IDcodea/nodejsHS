const express = require('express');
const Controller = require('../controllers/controller');
const myMiddleware = require('../controllers/middleware');

const router = express.Router();

router.get('/api', Controller.helloWorld);
router.get('/moto', myMiddleware.myMiddleware, Controller.helloMoto);

module.exports = router;
