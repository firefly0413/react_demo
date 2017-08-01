import React ,{Component} from "react"
import {Modal,Button} from "react-bootstrap"

class MyModal2 extends Component{
	constructor(props){
		super(props)
		this.state = {
			showModal:false
		}
	}
	render(){
		return (
			<Modal show={this.state.showModal} onHide={()=>{this.setState({showModal:false})}}>
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
					<Button bsStyle="default" bsSize="small" onClick={()=>{this.setState({showModal:false})}}>取消</Button>
				</Modal.Footer>
			</Modal>
		)
	}
	showModal(){
		this.setState({
			showModal:true
		})
	}
	doConfirm(){
		this.props.confirmDel(this.props.index);
		this.setState({
			showModal:false
		})
	}
}

export {MyModal2};
