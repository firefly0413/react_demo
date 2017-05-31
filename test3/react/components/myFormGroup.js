import React,{Component} from "react"
import ReactDOM from "react-dom"

class MyFormGroup extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let childrens = this.props.children?this.props.children:[];
		childrens = childrens.map?childrens:[childrens];
		return(
			<form>
				{
					childrens.map(function(item,index){
						return(
							React.cloneElement(item,{key:index,ref:"target"+index})
						)
					})
				}
			</form>
		)
	}
	getFormData(){
		let ipts = [];
		let data = {};
		for(let key in this.refs) {
			ipts.push(this.refs[key]);
		}
		for(let i=0;i<ipts.length;i++){
			data[ipts[i].getElementsByClassName("form-control")[0].name] = ipts[i].getElementsByClassName("form-control")[0].value;
		}
		return data;
	}
}

export default MyFormGroup;