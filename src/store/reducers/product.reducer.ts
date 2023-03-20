import { ProductUnionType } from "../../interfaces/product.interface"
import { State } from "../../types"
import { ProductActions } from "../actions"

const initialState: State.ProductState = {
    createdAt: {
        loaded: false,
        success: false,
        products: [],
    },
    sold: {
        loaded: false,
        success: false,
        products: []
    }
}

const productReducer = (state = initialState, action: ProductUnionType) => {
    switch (action.type) {
        case ProductActions.GetProduct:
            return {
                ...state,
                [action.sortBy]: {
                    ...state[action.sortBy == "createdAt" ? 'createdAt' : 'sold'],
                    loaded: false,
                    success: false,
                }
            }
        case ProductActions.GetProductSuccess:
            return {
                ...state,
                [action.sortBy]: {
                    loaded: true,
                    success: true,
                    products: action.payload
                }
            }
        default:
            return state
    }
}

export default productReducer