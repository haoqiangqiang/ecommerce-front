import { CategoryUnionType } from "../../interfaces/category.interface"
import { State } from "../../types"
import { CategoryActions } from "../actions"

const intialState: State.CategoryState = {
    category: {
        loaded: false,
        success: false,
        result: []
    }
}

const categoryReducer = (state = intialState, action: CategoryUnionType) => {
    switch (action.type) {
        case CategoryActions.GetCategory:
            return {
                ...state,
                category: {
                    loaded: false,
                    success: false,
                    result: []
                }
            }
        case CategoryActions.GetCategorySucess:
            return {
                ...state,
                category: {
                    loaded: true,
                    success: true,
                    result: action.payload
                }
            }
        default:
            return state
    }
}

export default categoryReducer