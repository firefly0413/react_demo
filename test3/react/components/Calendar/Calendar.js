import React,{Component} from 'react'
import CalendarHeader from './calendarHeader'
import DateTable from './dateTable'
import YearTable from './yearTable'
import MonthTable from './monthTable'
import Format from '../format'
import './calendar.css'


class Calendar extends Component{
  constructor(props){
    super(props);
    this.state = {
      current:Format.date(props.value || props.defaultValue || new Date(),'yyyy/M/d'),
      value  : Format.date(props.value || props.defaultValue || new Date(), 'yyyy/M/d'),
      panel:'date'
    }
  }
  render(){
    let {current,value,panel} = this.state;
    //console.log(current);
    return(
      <div className="calendar-box">
        <CalendarHeader panel={panel} current={current}
          onChange={(type)=>{this.changePanel(type)}}
        changeCurrent={(value)=>{this.changeCurrent(value)}}/>
        <div className="calendar-ui-body">
          <YearTable visible={panel !== 'year'} value={value} current = {current} onYearClick={(value)=>{this.onYearClick(value)}} />
          <MonthTable  visible={panel !== 'month'} value={value} current = {current} onMonthClick={(value)=>{this.onMonthClick(value)}} />
          <DateTable visible={panel !== 'date'} value={value} current = {current} onDateClick={(value)=>{this.onDateClick(value)}} />
        </div>
      </div>
    )
  }
  changePanel(type){
    this.setState({
      panel:type
    })
  }
  changeCurrent(value){
    this.setState({
      current:value
    })
  }
  onDateClick(value){
    this.setState({
      current:value,
      value:value
    })
  }

  onYearClick(value){
    this.setState({
      current:value,
      panel:'date'
    })
  }
  onMonthClick(value){
    this.setState({
      current:value,
      panel:'date'
    })
  }
}

Calendar.defaultProps = {
  value:'',
  defaultValue:''
};

export default Calendar;