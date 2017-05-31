import React, {Component,PropTypes} from "react";
import "./style/dist/css/bootstrap.css";
import "./style/index.css";

import {Modal,Button} from "react-bootstrap"
import {Link} from "react-router"
import {connect} from "react-redux"
import {deleteItem,addItem,editItem} from "./actionCreator/actions"
import MyModal from "./components/myModal"
import {MyModal2} from "./components/myModal2"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

class StudentApp extends Component{
		constructor(props){
			super(props);
			this.state = {
				showModal:false,
				showModal2:false,
				index:"",
				formInfo:{
					isNew:true,
					index:0,
					title:"",
					result:{}
				}
			}
		}
		render(){
			let results = this.props.member;
			let _this = this;
			return(
				<div>
					<h3>会员信息表</h3>
					<div className="clearfix">
						<Button bsSize="small" className="addBtn pull-right" onClick={this.addItem.bind(this,{title:"新增会员",isNew:true,index:"",result:{}})} >新增</Button>
					</div>
					<div className="panel panel-default mt20">
						<div className="panel-body">
							<table className="table tableMine table-hover">
								<thead>
									<tr>
										<th>用户号</th>
										<th>姓名</th>
										<th>年龄</th>
										<th>性别</th>
										<th>身高</th>
										<th>体重</th>
										<th>操作</th>
									</tr>
								</thead>
								<ReactCSSTransitionGroup transitionName="example"
								component="tbody"
								 transitionLeaveTimeout={1500}
 								transitionEnterTimeout={1500}>
								{
									results && results.map(function(item,index){
										return(
											<tr key={index} className={item.enable?"":"dn"}>
												<td>{item.serialNum}</td>
												<td>{item.name}</td>
												<td>{item.age}</td>
												<td>{item.sex}</td>
												<td>{item.height}</td>
												<td>{item.weight}</td>
												<td>
													<button className="btn btn-default btn-sm" onClick={_this.editItem.bind(_this,{title:"编辑会员",isNew:false,index:index,result:item})}>编辑</button>
												
													<button className="btn btn-sm closeBtn" onClick={_this.doDelete.bind(_this,index)}>删除</button>
												</td>
											</tr>
										)
									})
								}
								</ReactCSSTransitionGroup>
							</table>
						</div>
					</div>
					 <Modal className="modal1" show={this.state.showModal} onHide={this.closeModal.bind(this)}>
			          	<MyModal title={this.state.formInfo} doClose = {this.closeModal.bind(this)} addStudent={this.addStudent.bind(this)} editStudent = {this.editStudent.bind(this)} />
					 </Modal>
					 <Modal className="modal2" show={this.state.showModal2} onHide={this.closeModal2.bind(this)}>
							<MyModal2 index = {this.state.index} confirmDel = {this.confirmDel.bind(this)} doClose = {this.closeModal2.bind(this)} />
					 </Modal>
				</div>
			)
		}
		doDelete(index){
			this.setState({
				showModal2:true,
				index:index
			});
		}
		closeModal2(){
			this.setState({
				showModal2:false
			});
		}
		confirmDel(index){
			let _this = this;
			let promise = new Promise(function(resolve,reject){
				_this.props.dispatch(deleteItem(index));
 				resolve();
			});
			promise.then(function(){
				_this.setState({
					showModal2:false
				});
			});
		}
		addItem(data){
			this.setState({
				showModal:true,
				formInfo:data
			});
		}
		editItem(data){
			this.setState({
				showModal:true,
				formInfo:data
			})
		}
		addStudent(data){
			this.setState({showModal:false});
			this.props.dispatch(addItem(data));
		}
		editStudent(index,data){
			this.setState({showModal:false});
			this.props.dispatch(editItem(index,data));
		}
		closeModal(){
			this.setState({showModal:false});
		}
}
function theState(state){
	return {member:state.memberlist.results}
}

StudentApp.contextTypes = {
	router: React.PropTypes.object.isRequired,
	store:React.PropTypes.object
};

export default connect(theState)(StudentApp);
