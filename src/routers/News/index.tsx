import React from "react"
import { Route } from "react-router-dom"
import NewsList from "./NewsList/index"
import NewsDetail from "./NewsDetail/index"
export default class News extends React.Component {
  render() {
    return(
      <div>
      <Route exact={true} path="/news" component={NewsList}/>
      <Route path="/news/:id" component={NewsDetail}/>
      </div>

    )
  }
}
