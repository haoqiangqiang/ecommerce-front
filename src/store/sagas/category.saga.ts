import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { Category } from "../../interfaces/category.interface";
import { getCategorySucess } from "../../service/app/category";
import { CategoryActions } from "../actions";
import { Response } from "../../interfaces/respose.interface"

function* handleGetCategory() {
    let response: Response<Category[]> = yield axios.get<Category>(`${API}/categories`)
    yield put(getCategorySucess(response.data))
}

export default function* categorySaga() {
    yield takeEvery(CategoryActions.GetCategory, handleGetCategory)
}