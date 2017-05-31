import React,{Component} from "react"


const monthDay=[null,31,28,31,30,31,30,31,31,30,31,30,31];

function isRun(year) {
	let $4 = (year % 4 == 0);
	let $100 = (year % 100 == 0);
	let $400 = (year % 400 == 0);
	if ($400) {
		return true;
	}
	return $4 && !$100;
}

function getDate(year,month){
	let total;
	let arr=[[]];
	let weekNum = 0;
	let d = new Date();
	let currentYear = year||d.getFullYear();
	let currentMonth = month||d.getMonth()+1;
	let today = d.getDate();
	let firstDay = new Date(currentYear,currentMonth-1,1).getDay();
	let dayNum = monthDay[currentMonth];
	if(isRun(currentYear)){
		monthDay[2] = 29;
	}
	if(firstDay+dayNum>35){
		total = 6*7;
	}else{
		total = 5*7;
	}
	for(let i=0;i<total;i++){
		let dateNum;
		let isPassed = false;
		let isNext = false;
		let isToday = false;
		if(i<firstDay){
			dateNum = new Date(currentYear,currentMonth-2,dayNum-firstDay+i);
			isPassed = true;
		}else if(i>firstDay+dayNum-1){
			isNext = true;
			dateNum = new Date(currentYear,currentMonth-1,i-firstDay+1);
		}else{
			dateNum = new Date(currentYear,currentMonth-1,i-firstDay+1);
		}
		if(dateNum.getDate() == today && year==d.getFullYear() && month==d.getMonth()+1){
			isToday = true;
		}
		arr[weekNum].push({dateNum:dateNum,isPassed:isPassed,isNext:isNext,isToday:isToday})
		if(i%7==6){
			arr[++weekNum] = [];
		}
	}
	if(arr[arr.length-1].length==0){
		arr.pop();
	}
	return arr;
}

function getClassName(isPassed,isNext,isToday){
	let str;
	if(isPassed||isNext){
		str = "ccc"
	}else if(isToday){
		str = "today"
	}else{
		str = "";
	}
	return str;
}

class Calendar extends Component{
	constructor(props){
		super(props);
	}
	render(){
		this.data = getDate(this.props.year,this.props.month);
		return(
			<table className="table textCenter table-hover table-bordered calendarTable">
				<thead>
					<tr>
						<td>日</td>
						<td>一</td>
						<td>二</td>
						<td>三</td>
						<td>四</td>
						<td>五</td>
						<td>六</td>
					</tr>
				</thead>
				<tbody>
					{
						this.data.map(function(item,index){
							return(
								<tr key={index}>
									{
										item.map(function(subItem,subIndex){
											return(
												<td key={subIndex} className={getClassName(subItem.isPassed,subItem.isNext,subItem.isToday)} >
													{subItem.dateNum.getDate()}
												</td>
											)
										})
									}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
	}
}

export default Calendar;