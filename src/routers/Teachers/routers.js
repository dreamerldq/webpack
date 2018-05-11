import * as React from "react"
import components from "./index" 
import {Route, Switch, Link, Redirect} from "react-router-dom"
const componentsName = Object.keys(components)
const Teacher = (props) => {
    return(
			<React.Fragment>
			<ul>
				{componentsName.map((name, index) => (
					<Link key={index} to={`/teacherteam/${name}`}>{name}</Link>
				))}
			</ul>
				<Switch>
					{componentsName.map((name, index) => {
						return(
							<Route key={index} path={`${props.match.path}/${name}`} component={components[name]}></Route>
						)
					})}
					<Redirect to="/teacherteam/DigitalMediaTechnologyTeam"></Redirect>
				</Switch>
			</React.Fragment>
    )
}
export default Teacher