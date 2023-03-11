import { AuthUnionType } from "../../interfaces/auth.interfaces"
import { AuthActions } from "../actions"

const intialState: State.AuthState = {
    signup: {
        loaded: false,
        success: false,
        message: ''
    }
}

const authReducer = (state = intialState, action: AuthUnionType) => {
    switch (action.type) {
        case AuthActions.Signup:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false
                }
            }
        case AuthActions.SignUpSuccess:
            return {
                ...state,
                signup: {
                    loaded: true,
                    suceess: true
                }
            }
        case AuthActions.SugnUpFail:
            return {
                ...state,
                signup: {
                    loaded: true,
                    success: false
                }
            }
        case AuthActions.ResetSignup:
            return {
                ...state,
                signup: {
                    loaded: false,
                    success: false,
                    message: ''
                }
            }
        default:
            return state
    }
}

export default authReducer