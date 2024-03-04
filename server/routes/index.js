const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const genreRouter = require('./genreRouter')
const storeRouter = require('./storeRouter')


router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/store', storeRouter)
router.use('/product', productRouter)

module.exports = router