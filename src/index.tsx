import React from "react"
import {render} from "react-dom"
import App from "./App"
import { CurrentUser } from "./context/CurrentUser"
const MyComponent = () => {
    return(
        <CurrentUser.Provider value={{username: "lidanqiu", password: "123"}}>
            <CurrentUser.Consumer>
                {(user) => (
                    <App currentUser={user}></App>
                )}
            </CurrentUser.Consumer>

        </CurrentUser.Provider >

    )
}
render(<MyComponent/>, document.getElementById("app")) // eslint-disable-line
