import { ALLTODO, UNCOMPONENTTODO, COMPONENTTODO } from '../../Actions/todos'
import {  handleActions } from 'redux-actions'
const todoFilterDefault = ALLTODO
const todoFilter = handleActions(
  {
    CHANGETYPE: (state:any, action: any) => {
      return action.payload
    },
  },
  todoFilterDefault
)
export { todoFilter }