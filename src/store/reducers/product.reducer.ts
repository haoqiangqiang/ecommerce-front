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
    },
    search: [],
    filter: {
        suceess: false,
        loaded: false,
        result: {
            size: 0,
            data: []
        }
    },
    product: {
        loaded: false,
        success: false,
        result: {
            _id: '',
            name: '',
            price: 0,
            description: '',
            category: {
                _id: '',
                name: ''
            },
            quantity: 0,
            sold: 0,
            photo: new FormData(),
            shipping: false,
            createdAt: ''
        }
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
        case ProductActions.SearchProductSuccess:
            return {
                ...state,
                search: action.products
            }
        case ProductActions.FilterProduct:
            return {
                ...state,
                filter: {
                    loaded: false,
                    suceess: false,
                    result: {
                        size: 0,
                        data: state.filter.result.data
                    }
                }
            }
        case ProductActions.FilterProductSuccess:
            let data =
                action.skip === 0
                    ? action.payload.data
                    : [...state.filter.result.data, ...action.payload.data]
            return {
                ...state,
                filter: {
                    loaded: true,
                    success: true,
                    result: {
                        size: action.payload.size,
                        data
                    }
                }
            }
        case ProductActions.GetProductById:
            return {
                ...state,
                product: {
                    ...state.product,
                    loaded: false,
                    success: false
                }
            }
        case ProductActions.GetProductByIdSuccess:
            return {
                ...state,
                product: {
                    loaded: true,
                    success: true,
                    result: action.payload
                }
            }
        default:
            return state
    }
}

export default productReducer