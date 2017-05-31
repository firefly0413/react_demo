import React,{Component} from "react"
import "../style/dist/css/bootstrap.css";
import MyForm from "../components/myForm"
import FormContainer from "../components/formContainer"

class FormTest extends Component{
	render(){
		let formInfo1 = {
			formType:"text",
			cln:"lala",
			name:"input",
			value:"9527",
			placeholder:"请输入数字",
			keepMsg:"只能输入数字",
			reg:/^\d+$/,
			empty:true
		}
		let formInfo2 = {
			formType:"textArea",
			cln:"lala",
			name:"textArea",
			value:"hello world",
			placeholder:"请输入数字",
			keepMsg:"数字字母下划线",
			reg:/^\w+$/,
			empty:false
		}
		let formInfo3 = {
			formType:"checkBox",
			cln:"lala",
			name:"checkBox",
			list:["javascript","nodejs","reactJs"],
			active:"0,1,0"
		}
		let formInfo4 = {
			formType:"radio",
			cln:"lala",
			name:"radio",
			list:["javascript","nodejs","reactJs"],
			select:1
		}
		return(
			<div>
				<FormContainer ref="form1" cln={"col-sm-8"}>
					<MyForm formInfo={formInfo1} />
					<MyForm formInfo={formInfo2} />
					<MyForm formInfo={formInfo3} />
					<MyForm formInfo={formInfo4} />
				</FormContainer>
				<button className="btn btn-default" onClick={this.doSave.bind(this)}>提交</button>
			</div>
		)
	}
	doSave(){
		this.refs["form1"].getFormData();
	}
}

export default FormTest;