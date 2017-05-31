import React,{Component} from "react"
import ReactDOM from "react-dom"

class FormContainer extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let cln = this.props.cln;
		let childrens = this.props.children?this.props.children:[];
		childrens = childrens.map?childrens:[childrens];
		return (
			<form className={cln}>
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
		let forms = this.refs;
		let data = {};
		for(let key in forms){
			let node = this.refs[key];
			let name = node.props.formInfo.name;
			data[name] = node.state.value;
		}
		console.log(data)
	}
}

export default FormContainer;