import * as React from "react"
import EditInput from "../../../component/EditInput"
import styles from "./index.less"
interface IUser {
  id: number,
  name: string,
  age: number,
  [index: string]: any
}
interface IType {
  [index: string]: string
}
export default class UserRegiste extends React.Component {
  state = {
    user: [
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
    ],
    type: {name: "姓名：", age: "年龄："},
  }
onSave = (value: string, index: number, key: string) => {
  const obj = this.state.user
  const newValue = {
    ...obj[index],
    [key]: value,
  }
  obj[index] = newValue
  this.setState({
    user: obj,
  }, () => {
    this.update(obj[index])
  })
}
update = (obj: IUser) => {
  const body = {name: obj.name, age: obj.age}
}

render() {
    return(
      <div>
        你的名字
        {this.state.user.map((item: IUser) => {
          return(
            <React.Fragment key={item.id}>
              {Object.keys(item).map((key) => {
                if (key !== "id") {
                  return(
                    <div className={styles.inputGroup}>
                      <span>{((this.state.type) as IType)[key]}</span>
                      <EditInput
                      key={key}
                      index={item.id}
                      onSave={(value) => this.onSave(value, item.id, key)}
                      value={item[key]}
                      type={key}
                      />
                    </div>
                  )
                }
              })}
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}
