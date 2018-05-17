
import { ADDTODO, REMOVETODO, TOGGLETODO, ALLTODO, UNCOMPONENTTODO,
   COMPONENTTODO, CHANGETYPE, FETCHNEWS } from './todos'
import { createAction } from 'redux-actions'
const add_todo = createAction(ADDTODO)
const remove_todo = createAction(REMOVETODO)
const toggle_todo = createAction(TOGGLETODO)
const change_todo_type = createAction(CHANGETYPE)
const fetchNews = createAction(FETCHNEWS)
export { add_todo,  remove_todo, toggle_todo, change_todo_type, fetchNews }
