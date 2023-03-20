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

export type ProductUnionType = GetProductAction | GetProductSuccessAction