import * as React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { ALLTODO, UNCOMPONENTTODO, COMPONENTTODO } from '../../../Actions/todos'
import { change_todo_type, fetchNews } from '../../../Actions/todo'
import { ITodoList } from '../interface'
interface IProps {
  filterType: string,
  todoList: ITodoList[],
  newsList: any
  changeType: (type: string) => void,
  fetchNews: () => void,
  match: any
}
class TodoFilter extends React.Component<IProps> {
  componentDidMount() {
    if (this.props.match.path === '/todo') {
       this.props.fetchNews()
    }
  }
  changeType = (type: string) => () => {
    this.props.changeType(type)
  }
  transformTodoList = () => {
    const { todoList } = this.props
    let todo_list: ITodoList[] = []
    switch (this.props.filterType) {
      case ALLTODO:
      todo_list = todoList
      break
      case UNCOMPONENTTODO:
      todo_list = todoList.filter((item: any) => item.isComplete === false)
      break
      case COMPONENTTODO:
      todo_list = todoList.filter((item: any) => item.isComplete === true)
    }
    return todo_list
  }
  render() {
    return(
      <div>
      <Button onClick={this.changeType(ALLTODO)}>全部</Button>
      <Button onClick={this.changeType(COMPONENTTODO)}>已完成</Button>
      <Button onClick={this.changeType(UNCOMPONENTTODO)}>未完成</Button>
      <Button onClick={this.props.fetchNews}>请求新闻数据</Button>
      <ul>
        {this.transformTodoList().map((item: any) => {
          return(
            <li key={item.id}>{item.todo}</li>
          )
        })}
      </ul>
      <br/>
      <ul>
        {this.props.newsList.map((item: any) => {
          return(
            <li key={item.id}>{item.title}</li>
          )
        })}
      </ul>
      </div>
    )
  }
}
const mapStateToProps = (state: any, ownProps: any) => {
  const todoFilter = state.todoFilter
  const { todoList, newsList } = state.todo
  return{
    filterType: todoFilter,
    todoList,
    newsList,
    match: ownProps.match,
  }
}
const mapDispatchToProps = (dispatch: any) => (
  {
    changeType: (type: string) => {
      return dispatch(change_todo_type(type))
    },
    fetchNews: () => dispatch(fetchNews()),
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter)
