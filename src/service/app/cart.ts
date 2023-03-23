import { CartItem } from "../../interfaces/cart.inerface";
import { Product } from "../../interfaces/product.interface";


export const addItem = (item: Product, next: () => void) => {
    let cart: CartItem[] = []
    if (typeof window !== undefined) {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')!)
        }
        cart.push({
            ...item,
            count: 1
        })
    }
    cart = Array.from(new Set((cart.map(item => item._id)))).map(item => {
        return cart.find(product => product._id === item)
    }) as CartItem[]

    localStorage.setItem('cart', JSON.stringify(cart))

    next()
}

export const getCart = (): CartItem[] => {
    if (typeof window !== undefined) {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')!)
        }
    }
    return []
}

export const updateItem = (productId: string, count: number) => {
    let cart: CartItem[] = []
    if (typeof window !== undefined) {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')!)
        }
        cart.forEach((item, index) => {
            if (item._id === productId) {
                cart[index].count = count
            }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
        return cart
    }
}