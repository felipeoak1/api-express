const { Router } = require('express')

const ContactController = require('./app/controllers/contactController')
const contactController = require('./app/controllers/contactController')

const router = Router()

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.post('/contacts', ContactController.store)
router.put('/contacts/:id', contactController.update)


module.exports = router
