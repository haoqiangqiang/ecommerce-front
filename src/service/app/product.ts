import { type } from "os";
import { GetProductAction, Product, GetProductSuccessAction, SearchProductAction, SearchProductSuccessAction, FilterProductAction, FilterProductSuccessAction, FilterPayload } from "../../interfaces/product.interface";
import { ProductActions } from "../../store/actions";

export const getProduct = (sortBy: string, order: string = 'desc', limit: number = 10): GetProductAction => ({
    type: ProductActions.GetProduct,
    sortBy,
    order,
    limit
})

export const getProductSuccess = (payload: Product[], sortBy: string): GetProductSuccessAction => ({
    type: ProductActions.GetProductSuccess,
    payload,
    sortBy
})

export const searchProduct = (payload: { category: string, search: string }): SearchProductAction => ({
    type: ProductActions.SearchProduct,
    payload,
})

export const searchProductSuccess = (products: Product[]): SearchProductSuccessAction => ({
    type: ProductActions.SearchProductSuccess,
    products
})

export const filterProduct = (payload: FilterPayload): FilterProductAction => ({
    type: ProductActions.FilterProduct,
    payload
})

export const filterProductSuccess = (payload: { size: number, data: Product[] }, skip: number): FilterProductSuccessAction => ({
    type: ProductActions.FilterProductSuccess,
    payload,
    skip
})