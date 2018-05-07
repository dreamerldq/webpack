import * as React from "react"
import { Table } from "antd"
import EditInput from "../../../component/EditInput"
const dataSource = [
  {
    id: 0,
    name: "lidanqiu",
    age: 24,
  },
  {
    id: 1,
    name: "wanghaodong",
    age: 24,
  },
]
export default class UserTable extends React.Component {
   column = [
    {
        title: "序号",
        dataIndex: "id",
        render(text: any, record: any, index: number) {
          return index + 1
        },
    },
    {
      title: "姓名",
      dataIndex: "name",
      render: (text: any, record: any, index: number) => {
        const type = Object.keys(record)[1]
        return(
          <EditInput
          value={text}
          index={index}
          onSave={(value) => this.onSave(value, index, type)}
          type={type}
          />
        )
      },
    },
    {
      title: "年龄",
      dataIndex: "age",
      render: (text: any, record: any, index: number) => {
        const type = Object.keys(record)[2]
        return(
          <EditInput
          value={text}
          index={index}
          onSave={(value) => this.onSave(value, index, type)}
          type={type}
          />
        )
      },
    },
  ]
  onSave = (value: string, index: number, type: string) => {
    const obj = this
  }
  render() {
    return(
      <Table
      rowKey={"id"}
      dataSource={dataSource}
      columns={this.column}
      />
    )
  }
}
