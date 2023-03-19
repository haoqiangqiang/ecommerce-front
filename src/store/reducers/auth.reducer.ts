import { AuthUnionType } from "../../interfaces/auth.interfaces"
import { State } from "../../types"
import { AuthActions } from "../actions"

const intialState: State.AuthState = {
    signup: {
        loaded: false,
        success: false,
        message: ''
    },
    signin: {
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
                    success: false,
                    message: action.message
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
        case AuthActions.Signin:
            return {
                ...state,
                signin: {
                    loaded: false,
                    success: false,
                    message: ''
                }
            }
        case AuthActions.SigninSuccess:
            return {
                ...state,
                signin: {
                    loaded: false,
                    success: true,
                    message: ''
                }
            }
        case AuthActions.SigninFail:
            return {
                ...state,
                signin: {
                    loaded: false,
                    success: false,
                    message: action.message
                }
            }
        default:
            return state
    }
}

export default authReducer