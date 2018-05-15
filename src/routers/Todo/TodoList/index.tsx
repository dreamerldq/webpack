import * as React from 'react'
import { Button, Input } from 'antd'
import { connect } from 'react-redux'
import { add_todo, remove_todo, toggle_todo } from '../../../Actions/todo'
import { ITodoList } from '../interface'
interface IProps {
  todoList: ITodoList[],
  add_todo: (param: any) => void,
  toggle_todo: (id: number) => void,
  remove_todo: (id: number) => void
}
let count = 0
class TodoList extends React.Component<IProps> {
  state={
    todoValue: ''
  }
  changeValue = (e: any) => {
    this.setState({
      todoValue: e.target.value
    })
  }
  addTodo = () => {
    const { todoValue } = this.state
    const param: ITodoList = {
      id: count++,
      todo: todoValue,
      isComplete: false
    }
    this.props.add_todo(param)
  }
  removeTodo = (id: number) => () => {
    this.props.remove_todo(id)
  }
  toggleTodo = (id: number) => () => {
    this.props.toggle_todo(id)
  }
  render(){
    return(
      <React.Fragment>
        <Input onChange={this.changeValue}/>TODO
        <Button onClick={this.addTodo}>添加</Button>
        <ul>
          {this.props.todoList.map((item: any) => {
            return(
              <div key={item.id}>
                   <li>{item.todo}</li>
                   <Button onClick={this.removeTodo(item.id)}>删除</Button>
                   <Button onClick={this.toggleTodo(item.id)}>完成</Button>
              </div>
             
            )
          })}
        </ul>
      </React.Fragment>
    )
  }
  
}
const mapStateToProps = (state: any) => {
  const todo = state.todo
  return{
    todoList: todo.todoList
  }
}
const mapDispatchToProps = (dispatch: any) => (
  {
    add_todo: (param: any) => dispatch(add_todo(param)),
    remove_todo: (id: number) => dispatch(remove_todo(id)),
    toggle_todo: (id: number) => dispatch(toggle_todo(id))
  }

)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)