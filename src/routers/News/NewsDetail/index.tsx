import * as React from "react"
import { Route } from "react-router-dom"
interface IProps {
  match: any
}
export default class NewsDetail extends React.Component<IProps> {
  render() {
    return(
      <div>
        <h1>这是第{this.props.match.params.id}新闻</h1>
      </div>
    )
  }
}
