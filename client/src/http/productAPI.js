import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre)
    return data
}
export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createMarketplace = async (marketplace) => {
    const {data} = await $authHost.post('api/marketpalce', marketplace)
    return data
}
export const fetchMarketplaces = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}
export const fetchProducts = async () => {
    const {data} = await $host.get('api/product')
    return data
}
export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product' + id)
    return data
}
