const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

// ------- CRUD корзины ------- //
router.post('/', checkRole('ADMIN'), basketController.addToBasket)
router.get('/', basketController.getBasketUser)


module.exports = router