import { Icon, Menu } from "antd"
import * as React from "react"
import { Link } from "react-router-dom"
import routers from "../../routers"
const route = routers.filter((item) => {
  return item.path !== "/login"
})
export class Header extends React.Component {
  linkMenu = () => {
    return(
      route.map((item) => (
        <Menu.Item key={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      ))
    )

  }
  render() {
    return(
      <React.Fragment>
        <Menu
        mode="horizontal"
        theme="dark"
      >
        {this.linkMenu()}
      </Menu>

      </React.Fragment>
    )
  }
}
