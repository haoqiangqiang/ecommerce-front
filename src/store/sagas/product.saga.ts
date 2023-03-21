import Axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { GetProductAction, Product, SearchProductAction } from "../../interfaces/product.interface";
import { getProductSuccess, searchProductSuccess } from "../../service/app/product";
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

export default function* productSaga() {
    yield takeEvery(ProductActions.GetProduct, handleGetProduct)
    yield takeEvery(ProductActions.SearchProduct, handleSearchProduct)
}