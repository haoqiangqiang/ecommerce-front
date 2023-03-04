import { put, takeEvery } from "redux-saga/effects"
import { AuthActions } from "../actions"
import Axios from "axios"
import { API } from '../../config'
import { SignupAction } from "../../interfaces/auth.interfaces"
import { signupFail, signupSuccess } from "../../service/app/auth"

function* handleSignup(action: SignupAction) {
    try {
        yield Axios.post(`${API}/signup`, action.payload)
        yield put(signupSuccess())
    } catch (error: any) {
        yield put(signupFail(error.response.data.error))
    }
}

export default function* authSaga() {
    yield takeEvery(AuthActions.Signup, handleSignup)
}