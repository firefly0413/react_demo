/**
 * Created by Totooria Hyperion on 2016/10/11.
 */
"use strict";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let _this = this;
		return (
			<div className="header">
				我来组成头部
			</div>
		)
	}
}


let ConnectApp = connect(state => state)(Header);

export default ConnectApp;