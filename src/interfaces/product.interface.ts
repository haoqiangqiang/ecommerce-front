import { ProductActions } from "../store/actions"
import { Category } from "./category.interface"

export interface Product {
    _id: string,
    name: string,
    price: number,
    description: string,
    category: Category,
    quantity: number,
    shipping: boolean,
    photo: string,
    sold?: number,
    createdAt: string
}

export interface Price {
    id: number,
    name: string,
    array: number[]
}

export interface GetProductAction {
    type: typeof ProductActions.GetProduct,
    sortBy: string,
    order: string,
    limit: number
}

export interface GetProductSuccessAction {
    type: typeof ProductActions.GetProductSuccess,
    payload: Product[],
    sortBy: string
}

export interface SearchProductAction {
    type: typeof ProductActions.SearchProduct,
    payload: {
        category: string,
        search: string
    }
}

export interface SearchProductSuccessAction {
    type: typeof ProductActions.SearchProductSuccess,
    products: Product[]
}

export type ProductUnionType = GetProductAction | GetProductSuccessAction | SearchProductAction | SearchProductSuccessAction