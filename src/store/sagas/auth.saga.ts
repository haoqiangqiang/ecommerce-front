import { put, takeEvery } from "redux-saga/effects"
import { AuthActions } from "../actions"
import Axios from "axios"
import { API } from '../../config'
import { AuthData, SigninAction, SignupAction } from "../../interfaces/auth.interfaces"
import { signinSuccess, signupFail, signupSuccess } from "../../service/app/auth"
import { Response } from "../../interfaces/respose.interface"

function* handleSignup(action: SignupAction) {
    try {
        yield Axios.post(`${API}/signup`, action.payload)
        yield put(signupSuccess())
    } catch (error: any) {
        yield put(signupFail(error.response.data.error))
    }
}

function* handleSignin(action: SigninAction) {
    try {
        let response: Response<AuthData> = yield Axios.post(`${API}/signin`, action.payload)
        localStorage.setItem('jwt', JSON.stringify(response.data))
        yield put(signinSuccess())
    } catch (error: any) {
        yield put(signupFail(error.response.data.error))
    }
}

export default function* authSaga() {
    // 注册
    yield takeEvery(AuthActions.Signup, handleSignup)
    // 登录
    yield takeEvery(AuthActions.Signin, handleSignin)
}