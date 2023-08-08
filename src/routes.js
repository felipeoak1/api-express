const { Router } = require('express')

const ContactController = require('./app/controllers/contactController')

const router = Router()


router.get('/contacts/:id', ContactController.show)
router.get('/contacts', ContactController.index)



module.exports = router
