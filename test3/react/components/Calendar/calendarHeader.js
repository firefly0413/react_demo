import React,{Component} from 'react'

class CalendarHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      current:this.props.current || new Date()
    }
  }
  render(){
    let {panel,current} = this.props;
    let dd = new Date(current),
      curYear = dd.getFullYear(),
      curMon = dd.getMonth()+1,
      firstYear = parseInt(curYear/10)*10,
      lastYear = firstYear+9;
    let curDay = {
      year:curYear,
      month:curMon,
      date:dd.getDate()
    };
    return(
      <div className="calendar-ui-header">
        <div style={{display:panel === 'year'?'block':'none'}} className="header-wrap">
          <a href="javascript:;" className="calendar-header-left" onClick={()=>{this.toLastDecade(curDay)}}>left</a>
          <span onClick={()=>{this.changeThePanel('date')}} className="year-range">
            <a href="javascript:;">{firstYear}</a>-
            <a href="javascript:;">{lastYear}</a>
          </span>
          <a href="javascript:;" className="calendar-header-right" onClick={()=>{this.toNextDecade(curDay)}}>right</a>
        </div>
        <div style={{display:panel === 'date'?'block':'none'}} className="header-wrap">
          <a href="javascript:;" className="calendar-header-left" onClick={()=>{this.toLastMonth(curDay)}}>left</a>
          <span>
            <a href="javascript:;" onClick={()=>{this.changeThePanel('year')}}>{curYear}年</a>
            <a href="javascript:;" onClick={()=>{this.changeThePanel('month')}}>{curMon}月</a>
          </span>
          <a href="javascript:;" className="calendar-header-right" onClick={()=>{this.toNextMonth(curDay)}}>right</a>
        </div>
        <div style={{display:panel === 'month'?'block':'none'}} className="header-wrap">
          <a href="javascript:;" className="calendar-header-left" onClick={()=>{this.toLastYear(curDay)}}>left</a>
          <span>
            <a href="javascript:;" onClick={()=>{this.changeThePanel('date')}}>{curYear}年</a>
          </span>
          <a href="javascript:;" className="calendar-header-right" onClick={()=>{this.toNextYear(curDay)}}>right</a>
        </div>
      </div>
    )
  }
  changeThePanel(type){
    this.props.onChange(type)
  }
  toLastDecade(curDay){
    curDay.year = curDay.year - 10;
    let value = `${curDay.year}/${curDay.month}/${curDay.date}`;
    this.props.changeCurrent(value);
  }
  toNextDecade(curDay){
    curDay.year = curDay.year + 10;
    let value = `${curDay.year}/${curDay.month}/${curDay.date}`;
    this.props.changeCurrent(value);
  }
  toLastYear(curDay){
    curDay.year = curDay.year - 1;
    let value = `${curDay.year}/${curDay.month}/${curDay.date}`;
    this.props.changeCurrent(value);
  }
  toNextYear(curDay){
    curDay.year = curDay.year + 1;
    let value = `${curDay.year}/${curDay.month}/${curDay.date}`;
    this.props.changeCurrent(value);
  }
  toLastMonth(curDay){
    if(curDay.month === 1){
      curDay.month = 12;
      curDay.year = curDay.year - 1;
    }else{
      curDay.month = curDay.month - 1;
    }
    let value = `${curDay.year}/${curDay.month}/${curDay.date}`;
    this.props.changeCurrent(value);
  }
  toNextMonth(curDay){
    if(curDay.month === 12){
      curDay.month = 1;
      curDay.year = curDay.year + 1;
    }else{
      curDay.month = curDay.month + 1;
    }
    let value = `${curDay.year}/${curDay.month}/${curDay.date}`;
    this.props.changeCurrent(value);
  }
}

export default CalendarHeader;