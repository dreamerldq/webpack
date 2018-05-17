import { createStore, combineReducers, applyMiddleware } from 'redux'
import { todo } from './Reducers/todoList/reducer'
import { todoFilter } from './Reducers/todoFilter/reducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware, push } from 'react-router-redux'
import rootSaga from './model'
const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
  todo,
  todoFilter,
})
const store =  createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export default store
