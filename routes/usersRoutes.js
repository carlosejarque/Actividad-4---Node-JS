const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const loginLimiter = require('../middlewares/loginLimiter');

router.post('/login', loginLimiter, login);
router.post('/register', register);

module.exports = router;