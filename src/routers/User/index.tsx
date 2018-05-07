import * as React from "react"
import { Route, Link } from "react-router-dom"
import UserRegiste from "./UserRegiste/index"
import UserTable from "./UserTable"
export default class User extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h1>这是用户的详情界面</h1>
        <Link to="/user/registed">用户注册界面</Link>
        <Link to="/user/table">用户表</Link>
        <Route path="/user/registed" component={UserRegiste}/>
        <Route path="/user/table" component={UserTable}/>
      </React.Fragment>

    )
  }
}
