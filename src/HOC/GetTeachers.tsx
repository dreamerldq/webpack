import * as React from "react"
import axios from 'axios'
export const getTeachers = (type:string) => (Component:any) => {
    return class extends React.Component{
        state = {
            teacherList: []
        }
        componentDidMount(){
            axios.get(`http://47.93.217.181:3000/users/${type}`)
            .then((res) => {
                console.log("教师列表是",res)
                this.setState({
                    teacherList: res.data
                })
            })
            .catch((err) => {
                console.log("TTTT")
                throw new Error(err)
            })
        }
        render(){
            return(
                <Component teacherList={this.state.teacherList} {...this.props}/>
            )
        }
    }
}