import * as React from "react"
import { Button, Input, Icon } from "antd"
import styles from "./index.less"
interface IProps {
value: string
index: number
type: string
onSave: (value: string) => void
}
export default class EditInput extends React.Component<IProps> {
  state = {
    value: this.props.value,
    edit: false,
  }
  constructor(props: IProps) {
    super(props)
  }
  changeEditState = () => {
    const { type, index } = this.props
    this.setState({
      edit: !this.state.edit,
      value: this.props.value,
    })
  }
  onCancel = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }
  onSave = () => {
    this.setState({
      edit: !this.state.edit,
    }, () => this.props.onSave(this.state.value) )

  }
  onChangeValue = (e: any) => {
    this.setState({
      value: e.target.value,
    })
  }
  render() {
    const { edit, value } = this.state
    return(
      <React.Fragment>
        {!edit ?
        <div className={styles.editting}>
         <Input onFocus={this.changeEditState} value={value}/>
         <Icon type="edit" />
        </div>
         :
        <div className={styles.editting}>
          <Input value={value} onChange={this.onChangeValue}/>
         <a onClick={this.onSave}><Icon type="check" /></a>
         <a onClick={this.onCancel}><Icon  style={{color: "red"}} type="close" /></a>
        </div>
      }
      </React.Fragment>
    )
  }
}
