import React,{Component} from "react"
import {Modal,Button} from "react-bootstrap"
import {connect} from "react-redux"
import {addItem} from "../actionCreator/actions"
import TheInput from "./my_forms"
import MyFormGroup from "./myFormGroup"

function initialize(props){
	let result = props.title.result||"";
	let formInfo = {
		"formInfo":[
		{
			classname:"col-sm-7",
			type:"text",
			paramKey:"serialNum",
			value:result?result.serialNum:"",
			pop:true,
			popPos:"right",
			reg:/^\d+$/,
			keepMsg:"请输入用户号"
		},
		{
			classname:"col-sm-7",
			type:"text",
			paramKey:"name",
			value:result?result.name:""
		},
		{
			classname:"col-sm-7",
			type:"text",
			paramKey:"age",
			value:result?result.age:"",
			pop:true,
			popPos:"right",
			reg:/^\d+$/,
			keepMsg:"请输入整数"
		},
		{
			classname:"col-sm-7",
			type:"text",
			paramKey:"sex",
			value:result?result.sex:"",
			pop:true,
			popPos:"right",
			reg:/^[男女]$/,
			keepMsg:"请输入男女"
		},
		{
			classname:"col-sm-7",
			type:"text",
			paramKey:"height",
			value:result?result.height:"",
			pop:true,
			popPos:"right",
			reg:/^\d+$/,
			keepMsg:"请输入数字"
		},
		{
			classname:"col-sm-7",
			type:"text",
			paramKey:"weight",
			value:result?result.weight:"",
			pop:true,
			popPos:"right",
			reg:/^\d+$/,
			keepMsg:"请输入数字"
		}]
	};
	return formInfo;
}

class MyModal extends Component{
	constructor(props){
		super(props);
		this.state = initialize(props);
	}
	render(){
		return(
			<div>
				<Modal.Header closeButton>
	            	<Modal.Title>
	            		<div>{this.props.title.title}</div>
	            	</Modal.Title>
	          	</Modal.Header>
	          	<Modal.Body>
	          		<MyFormGroup ref="theForm">
		          		<div className="form-group clearfix">
								<label className="col-sm-3">用户号：</label>
								<TheInput formInfo={this.state.formInfo[0]} />
		          		</div>
		          		<div className="form-group clearfix">
								<label className="col-sm-3">姓名：</label>
								<TheInput formInfo={this.state.formInfo[1]} />
		          		</div>
		          		<div className="form-group clearfix">
								<label className="col-sm-3">年龄：</label>
								<TheInput formInfo={this.state.formInfo[2]} />
		          		</div>
		          		<div className="form-group clearfix">
								<label className="col-sm-3">性别：</label>
								<TheInput formInfo={this.state.formInfo[3]} />
		          		</div>
		          		<div className="form-group clearfix">
								<label className="col-sm-3">身高：</label>
								<TheInput formInfo={this.state.formInfo[4]} />
		          		</div>
		          		<div className="form-group clearfix">
								<label className="col-sm-3">体重：</label>
								<TheInput formInfo={this.state.formInfo[5]} />
		          		</div>
		          	</MyFormGroup>
	          	</Modal.Body>
	          	<Modal.Footer>
	          		<Button bsStyle="primary" bsSize="small" onClick={this.doSave.bind(this)}>保存</Button>
		            <Button bsStyle="default" bsSize="small" onClick={this.doClose.bind(this)}>取消</Button>
		        </Modal.Footer>
			</div>
		)
	}
	doSave(){
		let index = this.props.title.index;
		let data = this.refs["theForm"].getFormData();
		data.enable = true;
		let param = data;
		if(this.props.title.isNew){
			this.props.dispatch(addItem(param));
			this.doClose();
		}else{
			this.props.editStudent(index,param);
		}
	}
	doClose(){
		this.props.doClose();
	}
}

export default connect(state=>state)(MyModal);