import { routerMiddleware } from "connected-react-router"
import { createHashHistory } from "history"
import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension'
import createRootReducer from "./reducers"
import rootSaga from "./sagas"

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store