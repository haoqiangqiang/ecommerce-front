import { routerMiddleware } from "connected-react-router"
import { createHashHistory } from "history"
import { applyMiddleware, createStore } from "redux"
import createRootReducer from "./reducers"

export const history = createHashHistory()

const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history))
)

export default store