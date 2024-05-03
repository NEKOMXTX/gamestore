import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._genres = []
        this._marketplaces = []
        this._products = []

        // this._keys
        this._page = 1

        this._selectedGenre = {}
        this._selectedMarketplace = {}

        makeAutoObservable(this)
    }

    setGenres(genres) {
        this._genres = genres
    }

    setMarketplaces(marketplaces) {
        this._marketplaces = marketplaces
    }
    
    setProducts(prdoucts) {
        this._products = prdoucts
    }

    setSelectedGenre(genre) {
        this.setPage(1)
        this._selectedGenre = genre
    }

    setSelectedMarketplace(marketplace) {
        this.setPage(1)
        this._selectedMarketplace = marketplace
    }

    setPage(page) {
        this._page = page
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

    get selectedGenre() {
        return this._selectedGenre
    }

    get selectedMarketplace() {
        return this._selectedMarketplace
    }

    get page() {
        return this._page
    }

    
}