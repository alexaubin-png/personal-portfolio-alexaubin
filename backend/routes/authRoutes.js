const express = require('express');
const router = express.Router()
const userControllers = require('../controllers/auth.js')

const app = express();

router.post('/login', userControllers.loginUser)


router.post('/register', userControllers.registerNewUser)

router.put('/update/:id', userControllers.updateUser)

router.post('/product/getbill', userControllers.getBill)

router.delete('/delete', userControllers.deleteUser)

module.exports = router