import {
    ResetSignupAction, SigninAction, SigninFailAction, SigninPayload, SigninSuccessAction,
    SignupAction, SignupFailAction, SignupPayload, SignupSuccessAction
} from "../../interfaces/auth.interfaces";
import { AuthActions } from "../../store/actions";

export const signup = (payload: SignupPayload): SignupAction => ({
    type: AuthActions.Signup,
    payload
})

export const signupSuccess = (): SignupSuccessAction => ({
    type: AuthActions.SignUpSuccess
})

export const signupFail = (message: string): SignupFailAction => ({
    type: AuthActions.SugnUpFail,
    message
})

export const resetSignup = (): ResetSignupAction => ({
    type: AuthActions.ResetSignup
})

export const signin = (payload: SigninPayload): SigninAction => ({
    type: AuthActions.Signin,
    payload
})

export const signinSuccess = (): SigninSuccessAction => ({
    type: AuthActions.SigninSuccess
})

export const SigninFail = (message: string): SigninFailAction => ({
    type: AuthActions.SigninFail,
    message
})