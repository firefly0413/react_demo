import React,{Component,PropTypes} from "react"
import { PanelGroup,Panel } from 'react-bootstrap';

const lists = [
		{listName:'学生列表',path:'student', className:'j_student'},
		{listName:'房型列表',path:'roomList', className:'j_roomList'},
		{listName:'日历',path:'myCalendar', className:'j_myCalendar'},
		{listName:'表单测试',path:'formTest', className:'formTest'}
	];

class Aside extends Component{
	constructor(props){
		super(props);
		this.state = {
			activeList:0,
		}
	}
	render(){
		let _this = this;
		let activeList = this.state.activeList;
		return(
			<div className="col-sm-2 aside">
				<PanelGroup accordion>
					{
						lists.map(function(item,index){
							return(
								<Panel key={index} className={activeList == index?'active':''} onClick={_this.jumpToPage.bind(_this,item.path,index)}>{item.listName}</Panel>
							)
						})
					}
				</PanelGroup>
			</div>
		)
	}
	jumpToPage(path,index){
		this.setState({
			activeList:index
		},function(){
			this.context.router.push(path)
		})
	}
}

Aside.contextTypes = {
	router:React.PropTypes.object.isRequired
}

export default Aside;