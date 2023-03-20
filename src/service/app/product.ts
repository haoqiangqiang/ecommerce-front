import { GetProductAction, Product, GetProductSuccessAction } from "../../interfaces/product.interface";
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
