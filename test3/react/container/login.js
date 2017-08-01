import React, {Component,PropTypes} from "react";
import {connect} from "react-redux"
import "../style/dist/css/bootstrap.css";
import "../style/index.css";

class Login extends Component{
	constructor(props,context){
		super(props,context)
	}
	render(){
		return(
			<div className="loginBox">
				<div className="jumbotron">
					<h3 className="text-center">请登录</h3>
					<div role="form" id="loginIt" autoComplete="off">
						<div className="inputArea">
							<input type="text" ref="userName" className="form-control" placeholder="请输入用户名" />
							<input type="password" ref="passWord" className="form-control" placeholder="请输入密码" />
						</div>
						<button className="btn" id="i_submit" onClick={this.doLogin.bind(this)}>登录</button>
					</div>
				</div>
			</div>
		)
	}

	doLogin(){
		let userName = this.refs["userName"].value;
		let passWord = this.refs["passWord"].value;

		if(userName == "erik" && passWord == "123"){
			console.log(this.context);
			this.context.router.push("/student");
		}
	}
}

Login.contextTypes = {
	router:React.PropTypes.object.isRequired,
	store:React.PropTypes.object
}

export default Login;