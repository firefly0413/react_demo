import React, {Component} from "react"
import {Router,Route,IndexRoute,hashHistory} from "react-router"

import Login from "./container/login"
import roomList from "./container/roomList"
import studentApp from "./studentApp"
import myCalendar from "./container/myCalendar"
import index from "./container/index"
import FormTest from "./container/formTest"
import ContextTest from "./container/contextTest"
import CompTest from "./container/compTest"

class App extends Component {
  getChildContext(){
    return {
      color:'blue'
    }
  }
	render(){
		return(
			<Router history = {hashHistory}>
				<Route path="/" component={Login} />
				<Route path="/index" component={index}>
					<Route path="/student" component={studentApp} />
					<Route path="/roomList" component={roomList}/>
					<Route path="/myCalendar" component={myCalendar}/>
					<Route path="/formTest" component={FormTest}/>
					<Route path="/contextTest" component={ContextTest}/>
					<Route path="/compTest" component={CompTest}/>
				</Route>
			</Router>
		)
	}
}

App.childContextTypes = {
	color:React.PropTypes.string
}

export default App;