import React from "react"
import {render} from "react-dom"
import App from "./App"
import { CurrentUser } from "./context/CurrentUser"
import store from './store'
import { Provider } from 'react-redux'
const MyComponent = () => {
    return(
        <CurrentUser.Provider value={{username: "lidanqiu", password: "123"}}>
            <CurrentUser.Consumer>
                {(user) => (
                    <Provider store={store}>
                         <App currentUser={user}/>
                    </Provider>

                )}
            </CurrentUser.Consumer>

        </CurrentUser.Provider >

    )
}
render(<MyComponent/>, document.getElementById("app"))
