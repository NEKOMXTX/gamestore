const Router = require('express')
const router = new Router()
const marketplaceController = require('../controllers/marketplaceController')

router.post('/', marketplaceController.create) //все магазины создавать 
router.get('/', marketplaceController.getAll) // все магазины получать
// router.delete('/', marketplaceController.delete)

module.exports = router