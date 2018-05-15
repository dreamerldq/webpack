import {  handleActions, Action } from 'redux-actions'
const defaultState = {
  todoList: [],
  newsList: []
}
const todo = handleActions(
  {
    ADDTODO: (state: any, action: Action<any>) => {
      return{
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    },
    TOGGLETODO: (state: any, action: Action<any>) => {
    return  {...state, todoList: state.todoList.map((item: any) => {
        if(item.id === action.payload){
          return { ...item, isComplete: !item.isComplete}
        } else {
          return item
        }
      })}
    },
    REMOVETODO: (state: any, action: Action<any>) => {
      return  {...state, todoList: state.todoList.filter((item: any) => {
            return item.id !== action.payload
        })}
      },
    SAVENEWSLIST: (state: any, action: Action<any>) => {
        return  {
          ...state, newsList: action.payload
        }
        }
  },
  
  defaultState
)

export {todo}