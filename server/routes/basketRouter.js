const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

// ------- CRUD корзины ------- //
router.get('/', checkRole('ADMIN') || checkRole('USER') , basketController.getBasketUser)
router.post('/', checkRole('ADMIN') || checkRole('USER') , basketController.addToBasket)


module.exports = router