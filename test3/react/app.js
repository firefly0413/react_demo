import React, {Component} from "react"
import { connect } from 'react-redux'
import {Router,Route,IndexRoute,hashHistory} from "react-router"

import Login from "./container/login"
import Header from "./header"
import roomList from "./container/roomList"
import studentApp from "./studentApp"
import myCalendar from "./container/myCalendar"
import index from "./container/index"
import FormTest from "./container/formTest"

class App extends Component {
	render(){
		return(
			<Router history = {hashHistory}>
				<Route path="/" component={Login} />
				<Route path="/index" component={index}>
					<Route path="/student" component={studentApp} />
					<Route path="/roomList" component={roomList}/>
					<Route path="/myCalendar" component={myCalendar}/>
					<Route path="/formTest" component={FormTest}/>
				</Route>
			</Router>
		)
	}
}

export default connect(state=>state)(App);