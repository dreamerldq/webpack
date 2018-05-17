import * as React from "react"
interface IProps {
  title: string,
  isNeccery: boolean,
}
export default (props: IProps) => {
  const {title, isNeccery = false} = props
  return(
    <div>
      {isNeccery && <i>*</i>}
      {title}
    </div>
  )
}
