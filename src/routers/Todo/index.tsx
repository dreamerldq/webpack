import * as React from "react"
import TodoList from "./TodoList/index"
import TodoFilter from "./TodoFilter/index"
const Todo = ( props: any ) => {
  return(
    <React.Fragment>
       <TodoList/>
       <TodoFilter match={props.match}/>
    </React.Fragment>
  )
}
export default Todo
