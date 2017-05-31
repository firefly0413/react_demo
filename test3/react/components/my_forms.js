import React,{Component} from "react"
import {Popover,Overlay} from "react-bootstrap"

function getInitialState(props){
	let formInfo = props.formInfo;
	formInfo.popShow = false;
	return formInfo;
}

class TheInput extends Component{
	constructor(props){
		super(props);
		this.state=getInitialState(props);
	}
	render(){
		return(
			<div className={this.state.classname}>
				<input type={this.state.type} className="form-control" 
				 value={this.state.value}
				 name={this.state.paramKey}
				 onBlur={this.handleBlur.bind(this)} 
				 onFocus = {this.handleFocus.bind(this)}
				 onChange={this.changehandle.bind(this)} />
				<Overlay show={this.state.showPop} 
					placement={this.state.popPos} 
					target = {this.state.target}>
					<Popover id="pp" title="">
						{this.state.keepMsg?this.state.keepMsg:"此项必填"}
					</Popover>
				</Overlay>
		    </div>
		)
	}
	changehandle(e){
		this.setState({
			value:e.target.value
		})
	}
	handleFocus(){
		this.setState({
			showPop:false
		})
	}
	handleBlur(e){
		if(this.state.pop){
			let reg = this.state.reg;
			let bool = reg&&reg instanceof RegExp?reg.test(e.target.value):true;
			this.setState({
				target:e.target,showPop:!bool
			})
		}
	}
}

export default TheInput;