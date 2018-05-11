import React from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import routers from "./routers"
import { Layout } from "antd"
import {Header as AppHeader} from "./component/Header/index"
const { Header, Content, Footer } = Layout
import styles from "./App.less"
interface IProps {
  currentUser: IUser
}
interface IUser {
  username: string
  password: string
}
export default class App extends React.Component<IProps> {
  getRoutes = () =>
    routers.map((route, index) => {
      if (route.path === "/protected") {
        return(
          <Route
          path="/protected"
          render = {() =>
            (this.props.currentUser.username && this.props.currentUser.password) ? (
              <route.component></route.component>
            ) : (
              <Redirect to="/login"></Redirect>
            )
          }
          >
          </Route>
        )
      }
      if(route.path === '/'){
        return <Route key={index} path={route.path} exact={true} component= {route.component}></Route>
      }
      return(
        <Route key={index} path={route.path} component={route.component}></Route>
      )
    })
  render() {
    const {currentUser: { username, password}} = this.props
    return (
      <div className={styles.container}> 
        <Router>
          <React.Fragment>
          <Header className={styles.headerContainer}>
          <AppHeader></AppHeader>
          </Header>
          <Content>
            {this.getRoutes()}
          </Content>
          <Footer>
            <h1>这是脚步</h1>
          </Footer>
          </React.Fragment>
        </Router>
      </div>
        
    )
  }
}
