import React,{Component} from "react"
import {connect} from "react-redux"

class roomList extends Component{
	constructor(props){
		super(props);
		this.state={
			alertVisible:false
		}
	}
	render(){
		let results = this.props.roomList;
		return(
			<div>
				<div className="panel panel-default mt20">
					<div className="panel-title">
						<h4>房型列表</h4>
					</div>
					<div className="panel-body">
						<table className="table tableMine table-hover">
							<thead>
								<tr>
									<th>房型编号</th>
									<th>房型名称</th>
									<th>平均价格</th>
									<th>装修状态</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								{
									results && results.map(function(item,index){
										return(
											<tr key={index} >
												<td>{item.roomNum}</td>
												<td>{item.name}</td>
												<td>{item.price}</td>
												<td>{item.enable?"已完成":"未完成"}</td>
												<td>
													<button className="btn btn-sm closeBtn">删除</button>
												</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

function theState(state){
	return {roomList:state.roomlist.result}
}

export default connect(theState)(roomList);