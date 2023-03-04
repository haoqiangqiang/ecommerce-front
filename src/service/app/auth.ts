import { SignupAction, SignupFailAction, SignupPayload, SignupSuccessAction } from "../../interfaces/auth.interfaces";
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