import * as React from "react"
import components from "./index" 
import {Route, Switch, Link} from "react-router-dom"
const componentsName = Object.keys(components)
const Teacher = () => {
    return(
			<React.Fragment>
			<ul>
				{componentsName.map((name) => (
					<Link to={`/teacherteam/${name}`}>{name}</Link>
				))}
			</ul>
				<Switch>
					{componentsName.map((name, index) => {
						return(
							<Route key={index} path={`/teacherteam/${name}`} component={components[name]}></Route>
						)
					})}
				</Switch>
			</React.Fragment>
    )
}
export default Teacher