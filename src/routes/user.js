const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/User-controller')


router.get('/edit', usersController.edit )

router.get('/chat', usersController.chat )

router.post('/cart', usersController.addtocart )


router.post('/payment', usersController.payment )


router.get('/', usersController.index )


module.exports = router