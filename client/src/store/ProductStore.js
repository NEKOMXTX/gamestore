import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._genres = [
            {id: 1, name: 'Кооператив'},
            {id: 2, name: 'Рог-лайк'},
            {id: 3, name: 'Мультиплеер'},
            {id: 4, name: 'Одиночная'},
        ]
        this._marketplaces = [
            {id: 1, name: 'Steam'},
            {id: 2, name: 'Epic Store'},
            {id: 3, name: 'Ustore'},
            {id: 4, name: 'Origin (EA)'},
            {id: 5, name: 'Battle.net'},
        ]
        this._products = [
            {id: 1, name: 'SQUAD', price: 10, rating: 5, img: 'https://placehold.co/400x300'},
            {id: 2, name: 'Dead Cells', price: 600, rating: 5, img: 'https://placehold.co/400x300'},
            {id: 3, name: 'PAYDAY 2', price: 150, rating: 5, img: 'https://placehold.co/400x300'},
            {id: 4, name: 'Inkulinati', price: 1000, rating: 5, img: 'https://placehold.co/400x300'},
            {id: 5, name: 'Inkulinati', price: 1000, rating: 5, img: 'https://placehold.co/400x300'},
            {id: 6, name: 'Inkulinati', price: 1000, rating: 5, img: 'https://placehold.co/400x300'},
            {id: 7, name: 'Inkulinati', price: 1000, rating: 5, img: 'https://placehold.co/400x300'},
        
        ]

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