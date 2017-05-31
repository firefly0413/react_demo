import * as action from "./action/newAction"
import React from "react"
import {Component} from "react";
import {connect} from "react-redux";


class App extends Component{
	constructor(props){
		super(props);

		console.log(props);
	}
	render(){
		return(
			<div>
				<h1 onClick={this.addList.bind(this)}>啦啦啦 德玛西亚</h1>
				<button className="btn btn-default" onClick={this.removeItem.bind(this)}>点我</button>
			</div>
		)
	}
	addList(){
		this.props.dispatch(action.addList({serialNum:8,name:"lal",age:22,sex:"男",height:152,weight:74,enable:true}));
	}
	removeItem(){
		this.props.dispatch(action.removeList(0));
	}
}

export default connect(state=>state)(App);