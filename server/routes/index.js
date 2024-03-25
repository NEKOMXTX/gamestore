const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const genreRouter = require('./genreRouter')
const marketplaceRouter = require('./marketplaceRouter')


router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/marketplace', marketplaceRouter)
router.use('/product', productRouter)

module.exports = router