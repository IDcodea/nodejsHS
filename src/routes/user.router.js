const express = require('express');
const Controller = require('../controllers/user.controller');

const router = express.Router();

router.use('/user', Controller.userController);

module.exports = router;
