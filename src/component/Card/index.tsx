import * as React from "react"
import styles from "./index.less"
import { Layout } from "antd"
import Title from "../../component/Title"
const { Content } = Layout
interface IProps {
  children?: JSX.Element | JSX.Element[]
}
export default class Card extends React.Component<IProps> {
  render() {
    const { children } = this.props
    if (Array.isArray(children)) {
      return(
        <div className={styles.container}>
          <Title>{children[0]}</Title>
          <Content>{children.slice(1)}</Content>
        </div>
      )
    }
    return(
      <div className={styles.container}>
        <Title>{children}</Title>
      </div>
    )
  }
  }
