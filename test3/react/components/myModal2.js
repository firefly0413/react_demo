import React ,{Component} from "react"
import {Modal,Button} from "react-bootstrap"

class MyModal2 extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<Modal.Header closeButton>
					<Modal.Title>
						<div>确认框</div>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>你确定要删除此学员信息吗？</h4>
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="primary" bsSize="small" onClick={this.doConfirm.bind(this)}>确定</Button>
					<Button bsStyle="default" bsSize="small" onClick={this.doClose.bind(this)}>取消</Button>
				</Modal.Footer>
			</div>
		)
	}
	doConfirm(){
		this.props.confirmDel(this.props.index);
	}
	doClose(){
		this.props.doClose();
	}
}

export {MyModal2};
