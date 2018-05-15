import * as React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { ALLTODO, UNCOMPONENTTODO, COMPONENTTODO } from '../../../Actions/todos'
import { change_todo_type } from '../../../Actions/todo'
interface IProps{
  filterType: string,
  todoList: any,
  changeType: (type:string) => void,
}
class TodoFilter extends React.Component<IProps> {
  changeType = (type: string) => () => {
    this.props.changeType(type)
  }
  transformTodoList = () => {
    const { todoList } = this.props
    let todo_list = null
    switch(this.props.filterType){
      case ALLTODO:
      todo_list = todoList
      break;
      case UNCOMPONENTTODO:
      todo_list = todoList.filter((item: any) => item.isComplete === false)
      break;
      case COMPONENTTODO:
      todo_list = todoList.filter((item: any) => item.isComplete === true)
    }
    return todo_list
  }
  render(){
    return(
      <div>
      <Button onClick={this.changeType(ALLTODO)}>全部</Button>
      <Button onClick={this.changeType(COMPONENTTODO)}>已完成</Button>
      <Button onClick={this.changeType(UNCOMPONENTTODO)}>未完成</Button>
      <ul>
        {this.transformTodoList().map((item: any) => {
          return(
            <li>{item.todo}</li>
          )
        })}
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state: any) => {
  const todoFilter = state.todoFilter
  const todoList = state.todo.todoList
  return{
    filterType: todoFilter,
    todoList: todoList
  }
}
const mapDispatchToProps = (dispatch: any) =>(
  {
    changeType: (type:string) => {
      return dispatch(change_todo_type(type))
    }
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)