import { AuthUnionType } from "../../interfaces/auth.interfaces"
import { AuthActions } from "../actions"

const intialState: State.AuthState = {
    signup: {
        loaded: false,
        success: false,
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
        default:
            return state
    }
}

export default authReducer