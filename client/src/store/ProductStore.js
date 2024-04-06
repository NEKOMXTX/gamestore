import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._genres = [
            {id: 1, name: 'Кооператив'},
            {id: 2, name: 'Рог-лайк'},
        ]
        this._marketplaces = [
            {id: 1, name: 'Steam'},
            {id: 2, name: 'Epic Store'},
        ]
        this._products = [
            {id: 1, name: 'SQUAD', price: 10, rating: 5, img: ''},
            {id: 2, name: 'Dead Cells', price: 600, rating: 5, img: ''},
            {id: 3, name: 'PAYDAY 2', price: 150, rating: 5, img: ''},
            {id: 4, name: 'Inkulinati', price: 1000, rating: 5, img: ''},
        
        ]
        makeAutoObservable(this)
    }

    setMarketplaces(marketplaces) {
        this._marketplaces = marketplaces
    }
    setGenres(genres) {
        this._genres = genres
    }
    setProducts(prdoucts) {
        this._products = prdoucts
    }

    get marketplaces() {
        return this._marketplaces
    }
    get genres() {
        return this._genres
    }
    get products() {
        return this._products
    }
}