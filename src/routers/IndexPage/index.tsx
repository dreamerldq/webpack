import * as React from "react"
import Card from "../../component/Card"
export default class IndexPage extends React.Component {
  render() {
    return(
      <div>
        <Card>
          <h3>首页</h3>
          <div>这是主要的内容</div>
        </Card>
        <i className="iconfont icon-naicha">奶茶</i>
        <i className="iconfont  icon-hongjiu">红酒</i>
      </div>
    )
  }
}
