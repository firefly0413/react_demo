import React,{Component} from "react"
import {Panel,ButtonToolbar,DropdownButton,MenuItem} from "react-bootstrap"
import Calendar from "../components/calendar"

const Year = [2015,2016,2017,2018];
const Month = [1,2,3,4,5,6,7,8,9,10,11,12];

let d = new Date();
let nowYear = d.getFullYear();
let nowMonth = d.getMonth()+1;
class MyCalendar extends Component{
	constructor(props){
		super(props);
		this.state = {
			time:{
				year:nowYear,
				yearIndex:"",
				month:nowMonth,
				monthIndex:""
			}
		}
	}
	render(){
		let _this = this;
		let yearNum = this.state.time.year;
		let monthNum = this.state.time.month;
		let yearIndex = this.state.time.yearIndex;
		let monthIndex = this.state.time.monthIndex;
		return(
			<Panel className="calendarPanel">
				<h3>这是个日历</h3>
				<div className="clearfix selBox">
					<ButtonToolbar>
				      	<DropdownButton bsSize="small" title={yearNum} id="dropdown-size-large" className="selYear">
				        	{
				        		Year.map(function(item,index){
				        			return(
				        				<MenuItem className={index==yearIndex?"active":""} key={index} eventKey={index} 
				        				onClick={_this.selTime.bind(_this,{type:"year",value:item,index:index})}>
				        					{item}
				        				</MenuItem>
				        			)
				        		})
				        	}
				      	</DropdownButton>
				    </ButtonToolbar>
				    <ButtonToolbar>
				      	<DropdownButton bsSize="small" title={monthNum} id="dropdown-size-large2" className="selMonth">
				        	{
				        		Month.map(function(item,index){
				        			return(
				        				<MenuItem className={index==monthIndex?"active":""} key={index} eventKey={index} 
				        				onClick={_this.selTime.bind(_this,{type:"month",value:item,index:index})}>
				        					{item}
				        				</MenuItem>
				        			)
				        		})
				        	}
				      	</DropdownButton>
				    </ButtonToolbar>
				</div>
				<Calendar year={yearNum} month={monthNum} />
			</Panel>
		)
	}
	selTime(data){
		let theTime = this.state.time;
		if(data.type=="year"){
			theTime["yearIndex"] = data.index;
		}else if(data.type=="month"){
			theTime["monthIndex"] = data.index;
		}
		theTime[data.type] = data.value;
		this.setState({
			time:theTime
		})
	}
}

export default MyCalendar;