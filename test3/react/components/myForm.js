import React,{Component} from "react"
import "../style/dist/css/bootstrap.css";
import "../style/index.css"
import {FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio} from "react-bootstrap"

function init(props){
	let {formType,active,value,list,select} = props.formInfo;
	switch(formType){
		case "checkBox":
			let arr = active.split(",");
			let arr2 = [];
			for(let i=0;i<list.length;i++){
				if(arr[i] == "1"){
					arr2.push(list[i])
				}
			}
			return {value:arr2.join(","),checkBox:arr};
		case "radio":
			return {value:list[select],radio:select};
		default:
			return {value:value}
	}
}

class MyForm extends Component{
	constructor(props){
		super(props);
		
		let data = init(props);
		this.state = {
			...data,
			status:"success"
		}
	}
	render(){
		let _this = this;
		let {formType} = this.props.formInfo;
		switch(formType){
			case "text":
				return renderInput.call(_this);
			case "textArea":
				return renderArea.call(_this);
			case "checkBox":
				return renderCheckBox.call(_this);
			case "radio":
				return renderRadio.call(_this);
			default:
				return renderInput.call(_this);
		}
	}
	handleChange(e){
		this.setState({
			value:e.target.value
		})
	}
	handleSel(index){
		let arr = this.state.checkBox;
		arr[index] = (arr[index] == "0"?"1":"0");
		let list = this.props.formInfo.list;
		let arr2 = [];
		for(let i=0;i<list.length;i++){
			if(arr[i] == "1"){
				arr2.push(list[i])
			}
		}
		this.setState({
			checkBox:arr,
			value:arr2.join(",")
		})
	}
	handleRadio(index,item){
		this.setState({
			radio:index,
			value:item
		})
	}
	doBlur(reg,empty){
		if(!reg && !empty){
			return;
		}
		if(!!reg){
			let result = reg.test(this.state.value);
			if(!result){
				this.setState({
					status:"error"
				})
			}else{
				this.setState({
					status:"success"
				})
			}
		}
	}
}

function renderInput(){
	let {formType,label,cln,reg,placeholder,keepMsg,empty,name} = this.props.formInfo;
	return(
	    <FormGroup className={cln} validationState={this.state.status}>
			<FormControl type="text" name={name} value={this.state.value} placeholder={placeholder} 
      			onChange={this.handleChange.bind(this)}
      			onBlur={this.doBlur.bind(this,reg,empty)} />
      		<FormControl.Feedback />
      		<HelpBlock className={this.state.status=='success'?'dn':''}>{keepMsg}</HelpBlock>
	    </FormGroup>
	)
}

function renderArea(){
	let {formType,label,cln,reg,placeholder,keepMsg,empty,name} = this.props.formInfo;
	return(
	    <FormGroup className={cln} validationState={this.state.status}>
			<FormControl componentClass="textarea" name={name} value={this.state.value} placeholder={placeholder} 
      			onChange={this.handleChange.bind(this)}
      			onBlur={this.doBlur.bind(this,reg,empty)} />
      		<FormControl.Feedback />
      		<HelpBlock className={this.state.status=='success'?'dn':''}>{keepMsg}</HelpBlock>
	    </FormGroup>
	)
}

function renderCheckBox(){
	let _this = this;
	let {cln,list,active,name} = this.props.formInfo;
	return (
		<FormGroup className={cln}>
		{
			list.map(function(item,index){
				return (
					<Checkbox key={index} name={name} checked={_this.state.checkBox[index]=="0"?false:true} inline 
					onChange={_this.handleSel.bind(_this,index)}>
						{item}
					</Checkbox>
				)
			})
		}
	    </FormGroup>
	)
}

function renderRadio(){
	let _this = this;
	let {cln,list,name} = this.props.formInfo;
	return (
		<FormGroup className={cln}>
		{
			list.map(function(item,index){
				return (
					<Radio key={index} name={name} checked={_this.state.radio==index?true:false} inline 
					onChange={_this.handleRadio.bind(_this,index,item)}>
						{item}
					</Radio>
				)
			})
		}
	    </FormGroup>
	)
}

export default MyForm;