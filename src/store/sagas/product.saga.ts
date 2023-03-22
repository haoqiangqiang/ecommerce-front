import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { FilterProductAction, GetProductAction, GetProductByIdAction, Product, SearchProductAction } from "../../interfaces/product.interface";
import { filterProductSuccess, getProductByIdSuccess, getProductSuccess, searchProductSuccess } from "../../service/app/product";
import { ProductActions } from "../actions";
import { Response } from "../../interfaces/respose.interface"

function* handleGetProduct({ sortBy, order, limit }: GetProductAction) {
    const response: Response<Product[]> = yield Axios.get(`${API}/products`, {
        params: { sortBy, order, limit }
    })
    yield put(getProductSuccess(response.data, sortBy))
}

function* handleSearchProduct({ payload: { search, category } }: SearchProductAction) {
    let response: Response<Product[]> = yield Axios.get(`${API}/products/search`, {
        params: {
            search,
            category
        }
    })
    yield put(searchProductSuccess(response.data))
}

function* handleFilterProduct(action: FilterProductAction) {
    let response: Response<{ size: number, data: Product[] }> = yield Axios.post(`${API}/products/filter`, action.payload)
    yield put(filterProductSuccess(response.data, action.payload.skip))
}

function* handleGetProductById({ payload }: GetProductByIdAction) {
    let response: Response<Product> = yield Axios.get(`${API}/product/${payload.productId}`)
    yield put(getProductByIdSuccess(response.data))
}

export default function* productSaga() {
    yield takeEvery(ProductActions.GetProduct, handleGetProduct)
    yield takeEvery(ProductActions.SearchProduct, handleSearchProduct)
    yield takeEvery(ProductActions.FilterProduct, handleFilterProduct)
    yield takeEvery(ProductActions.GetProductById, handleGetProductById)
}