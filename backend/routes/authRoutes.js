const express = require('express');
const router = express.Router()
const userControllers = require('../controllers/auth.js')

const app = express();

router.post('/login', userControllers.loginUser)


router.get('/register', userControllers.registerNewUser)
module.exports = router