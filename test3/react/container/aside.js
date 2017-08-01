import React,{Component,PropTypes} from "react"
import { PanelGroup,Panel } from 'react-bootstrap';

const lists = [
		{listName:'基础测试',path:'student', className:'j_student'},
		{listName:'日历组件',path:'myCalendar', className:'j_myCalendar'},
		{listName:'表单测试',path:'formTest', className:'formTest'},
		{listName:'context测试',path:'contextTest',className:'contextTest'},
  	{listName:'组件测试',path:'compTest',className:'compTest'}
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