import * as React from 'react'
import  TodoList  from './TodoList/index'
import TodoFilter from './TodoFilter/index'
const Todo = ( props: any ) => {
  return(
    <React.Fragment>
       <TodoList ></TodoList>
      <TodoFilter match={props.match}></TodoFilter>
    </React.Fragment>
   
  )
}
export default Todo