const Router = require('express')
const router = new Router()
const storeController = require('../controllers/storeController')

router.post('/', storeController.create) //все магазины создавать 
router.get('/', storeController.getAll) // все магазины получать
// router.delete('/', storeController.delete)

module.exports = router