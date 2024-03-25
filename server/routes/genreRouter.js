const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genreController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const checkRole = checkRoleMiddleware

router.post('/', checkRole('ADMIN'), genreController.create) //все магазины создавать 
router.get('/', genreController.getAll) // все магазины получать
// router.delete('/', genreController.deleteAll)

module.exports = router

//genre = type