const express = require('express')
const router = express.Router()

const adminController = require('../app/controllers/Admin-Controller')

router.get('/addproduct', adminController.addproduct )

router.get('/chat', adminController.chat )

router.get('/edit/:id', adminController.edit )

router.get('/del/:id', adminController.del )

router.post('/', adminController.creat )

router.put('/', adminController.update )

router.get('/', adminController.index )

module.exports = router