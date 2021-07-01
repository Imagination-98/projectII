const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/Site-controller')

router.post('/search', siteController.search )

router.get('/signup', siteController.signup )

router.get('/', siteController.index )

router.post('/', siteController.newacc )


module.exports = router