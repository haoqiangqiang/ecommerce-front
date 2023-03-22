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
    photo: FormData,
    sold?: number,
    createdAt: string
}

export interface Price {
    id: number,
    name: string,
    array: number[]
}

export interface FilterPayload {
    order?: string,
    sortby?: string,
    limit?: number,
    skip: number,
    filters?: {
        category: string[],
        price: number[]
    }
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

export interface FilterProductAction {
    type: typeof ProductActions.FilterProduct,
    payload: FilterPayload
}

export interface FilterProductSuccessAction {
    type: typeof ProductActions.FilterProductSuccess,
    payload: {
        size: number,
        data: Product[]
    },
    skip: number
}

export interface GetProductByIdAction {
    type: typeof ProductActions.GetProductById,
    payload: {
        productId: string
    }
}

export interface GetProductByIdSuccessAction {
    type: typeof ProductActions.GetProductByIdSuccess,
    payload: Product
}

export type ProductUnionType = GetProductAction | GetProductSuccessAction | SearchProductAction | SearchProductSuccessAction | FilterProductAction | FilterProductSuccessAction  | GetProductByIdAction | GetProductByIdSuccessAction