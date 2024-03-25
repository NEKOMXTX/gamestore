const {Store} = require('../models/models')
const ApiError = require('../error/ApiError');

class StoreController {
    async create(req, res) {
        const {name} = req.body
        const store = await Store.create({name})
        return res.json(store)       
    }

    async getAll(req, res) {
        const stores = await Store.findAll()
        return res.json(stores)
    }
}

module.exports = new StoreController() // через точку просто обрщаться к функциям и их вызывать