import { AuthActions } from '../store/actions/index'

// 注册相关
export interface SignupPayload {
    name: string,
    email: string,
    password: string
}

export interface SignupAction {
    type: typeof AuthActions.Signup,
    payload: SignupPayload
}

export interface SignupSuccessAction {
    type: typeof AuthActions.SignUpSuccess
}

export interface SignupFailAction {
    type: typeof AuthActions.SugnUpFail,
    message: string
}

export interface ResetSignupAction {
    type: typeof AuthActions.ResetSignup
}

// 登录相关
export interface SigninPayload {
    email: string,
    password: string
}

export interface SigninAction {
    type: typeof AuthActions.Signin,
    payload: SigninPayload
}

export interface SigninSuccessAction {
    type: typeof AuthActions.SigninSuccess
}

export interface SigninFailAction {
    type: typeof AuthActions.SigninFail,
    message: string
}

export interface User {
    _id: string,
    name: string,
    email: string,
    role: number
}

export interface AuthData {
    token: string,
    user: User
}

export type AuthUnionType =
    SignupAction | SignupSuccessAction | SignupFailAction | ResetSignupAction |
    SigninAction | SigninSuccessAction | SigninFailAction