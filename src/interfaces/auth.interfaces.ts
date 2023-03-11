import { AuthActions } from '../store/actions/index'
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

export type AuthUnionType = SignupAction | SignupSuccessAction | SignupFailAction | ResetSignupAction