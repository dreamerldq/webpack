import * as React from "react"
import styles from "./index.less"
export default (props: any) => {
  return(
    <div className={styles.title}>
      {props.children}
    </div>
  )
}