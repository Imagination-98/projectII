const express = require('express')
const router = express.Router()

const productsController = require('../app/controllers/Product-controller')

router.get('/:id', productsController.detail )

// router.put('/:id', productsController.update )



module.exports = router