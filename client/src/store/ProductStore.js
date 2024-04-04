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

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}