import * as React from 'react'
import  TodoList  from './TodoList/index'
import TodoFilter from './TodoFilter/index'
const Todo = ( ) => {
  return(
    <React.Fragment>
       <TodoList></TodoList>
      <TodoFilter></TodoFilter>
    </React.Fragment>
   
  )
}
export default Todo