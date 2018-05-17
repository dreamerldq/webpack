import * as React from "react"
import { Form, Input, Button, Icon, Col, Row} from "antd"
const {Item} = Form
import {CurrentUser} from "../../context/CurrentUser"
interface IProps {
  form: any,
  history: any
}
interface IInput {
  username: string
  password: string
}
class Login extends React.Component<IProps> {
  login = () => {
    const {validateFields } = this.props.form
    validateFields((err: any, value: IInput) => {
      const { username, password } = value
      if (!err) {
        if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
          this.props.history.replace("/")
        } else {
          return
        }
      } else {
        // console.log("err")
      }
    })
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return(
      <React.Fragment>
        <Form>
          <Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }],
          })(
            <Input placeholder="Username" />,
          )}
          </Item>
          <Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your username!" }],
          })(
            <Input  type="password" placeholder="Password" />,
          )}
          </Item>

        </Form>
          <Button onClick={this.login}>登录</Button>
      </React.Fragment>
    )
  }
}
export default Form.create()(Login)
