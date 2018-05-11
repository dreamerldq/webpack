import React from "react"
import { Link } from "react-router-dom"
import Card from "../../../component/Card"
const list = [
  {title: "新闻1", id: 1},
  {title: "新闻2", id: 2},
  {title: "新闻3", id: 3},
  {title: "新闻4", id: 4},

]
export default class NewsList extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Card>
          <h3>新闻列表</h3>
        </Card>
        {list.map((item) => {
          return(
            <Link key={item.id} to={`/news/${item.id}`}>{item.title}</Link>
          )
        })}
      </React.Fragment>

    )
  }
}
