import { all } from 'redux-saga/effects'
import {  todoSaga }  from './Reducers/todoList/effect'
export default function* rootSaga(){
  yield all([
    todoSaga()
  ])
}