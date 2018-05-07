import * as React from "react"
import { Route, Link } from "react-router-dom"
import UserRegiste from "./UserRegiste/index"
export default class User extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h1>这是用户的详情界面</h1>
        <Link to="/user/registed">用户注册界面</Link>
        <Route path="/user/registed" component={UserRegiste}/>
      </React.Fragment>

    )
  }
}
