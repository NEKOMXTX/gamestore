const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), productController.create)
router.get('/' , checkRole('ADMIN') || checkRole('USER'), productController.getAll)
router.get('/:id', checkRole('ADMIN') || checkRole('USER'), productController.getOne)

module.exports = router