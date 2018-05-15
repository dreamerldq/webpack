import { ADDTODO, TOGGLETODO, REMOVETODO, ALLTODO, UNCOMPONENTTODO, COMPONENTTODO } from '../Actions/todos'
import {  handleActions } from 'redux-actions'
// import { add_todo } from '../Actions/todo' 
// const todo = (state: any = {todoList:[]}, action: any) => {
//   switch(action.type){
//     case ADDTODO: 
//     return {...state, todoList: [...state.todoList, action.payload] }
//     default:
//     return state
//   }
// }
const defaultState = {
  todoList: []
}
const todo = handleActions(
  {
    ADDTODO: (state: any, action: any) => {
      return{
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    },
    TOGGLETODO: (state: any, action: any) => {
    return  {...state, todoList: state.todoList.map((item: any) => {
        if(item.id === action.payload){
          return { ...item, isComplete: !item.isComplete}
        } else {
          return item
        }
      })}
    },
    REMOVETODO: (state: any, action: any) => {
      return  {...state, todoList: state.todoList.filter((item: any) => {
            return item.id !== action.payload
        })}
      }
  },
  
  defaultState
)
const todoFilterDefault = ALLTODO
const todoFilter = handleActions(
  {
    CHANGETYPE: (state:any, action: any) => {
      return action.payload
    },
  },
  todoFilterDefault
)
export {todo, todoFilter}
