const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genreController')

router.post('/', genreController.create) //все магазины создавать 
router.get('/', genreController.getAll) // все магазины получать
// router.delete('/', genreController.deleteAll)

module.exports = router