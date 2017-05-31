import React,{Component} from "react"
import {Alert,Button} from "react-bootstrap"

const AlertComp = React.createClass({
  getInitialState() {
    return {
      alertVisible: false
    };
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>error!</h4>
          <p>{this.state.errorMsg}</p>
          <p>
            <Button onClick={this.handleAlertDismiss}>确定</Button>
          </p>
        </Alert>
      );
    }else{
    	return(
    		<div></div>
    		)
    }
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow(data) {
    this.setState({
    	errorMsg:data,
    	alertVisible: true
    });
  }
});

export default AlertComp;