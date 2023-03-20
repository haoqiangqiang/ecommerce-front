import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import authReducer from './auth.reducer'
import categoryReducer from './category.reducer'
import productReducer from './product.reducer'

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        category: categoryReducer,
        product: productReducer
    })

export default createRootReducer