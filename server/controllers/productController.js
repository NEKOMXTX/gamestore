const uuid = require('uuid')
const path = require('path');
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const { json } = require('sequelize');

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, genreId, marketplaceId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName ))
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProductInfo.create({
                        title: i.title,
                        description: i.description,
                        productId: product.id
                    })  
                )
            }

            const product = await Product.create({name, price, genreId, marketplaceId, img: fileName})
            
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res) {
        let {genreId, marketplaceId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit // отступ (в 9 товаров)
        let products;
        if (!genreId && !marketplaceId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (genreId && !marketplaceId) {
            products = await Product.findAndCountAll({where: {genreId}, limit, offset})
        }
        if (!genreId && marketplaceId) {
            products = await Product.findAndCountAll({where: {marketplaceId}, limit, offset})
        }
        if (genreId && marketplaceId) {
            products = await Product.findAndCountAll({where: {marketplaceId, genreId},  limit, offset})
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params // достаём из роутера /::id
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        return res.json(product)
    }
}

module.exports = new ProductController() // через точку просто обрщаться к функциям и их вызывать