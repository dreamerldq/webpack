import { createStore, combineReducers } from 'redux'
import { todo, todoFilter } from './Reducers/todo'
const reducers = combineReducers({
  todo: todo,
  todoFilter: todoFilter
})
const enhancer = (window as any)['devToolsExtension'] ? (window as any)['devToolsExtension']()(createStore) : createStore;
const store = enhancer(reducers);
export default store 