import React,{Component} from 'react'
import classnames from 'classnames'
import './calendar.css'


const CALENDAR_ROW_COUNT = 6;
const CALENDAR_COLUMN_COUNT = 7;
const CALENDAR_WEEK = ['一','二','三','四','五','六','日'];

class DateTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      current:props.current || new Date()
    }
  }
  componentWillReceiveProps(nextProps){
    if('current' in nextProps){
      this.setState({
        current:nextProps.current
      })
    }
  }
  render(){
    const {visible} = this.props;
    let style = {
      display:!visible?'block':'none'
    };
    return(
      <div style={style}>
        <table className="table-ui table">
          {this.renderWeek()}
          {this.renderDate()}
        </table>
      </div>
    )
  }
  //渲染星期
  renderWeek(){
    return(
      <thead>
        <tr>
          {
            CALENDAR_WEEK.map((week,index)=>{
              return(
                <th className="calendar-ui-column" key={`week${index}`}>{week}</th>
              )
            })
          }
        </tr>
      </thead>
    )
  }
  //渲染日期
  renderDate(){
    let dates = [];
    let dd = new Date(this.state.current);
    let current = {
        year:dd.getFullYear(),
        month:dd.getMonth()+1
      },
      pre = this.getPreMonth(current),
      next = this.getNextMonth(current);

    current.days = this.getDays(current);
    pre.days = this.getDays(pre);

    let firstDayOfWeek = this.getFirstDayOfWeek(current);

    //本月第一天不在星期一，上月天数填充
    for(let i=pre.days;i > pre.days-firstDayOfWeek+1;i--){
      dates.unshift(this.renderDateCell({
        year:pre.year,
        month:pre.month,
        day:i
      },'others'))
    }

    //本月数据
    for(let j=1;j<=current.days;j++){
      dates.push(this.renderDateCell({
        year:current.year,
        month:current.month,
        day:j
      }))
    }

    //本月最后一天不是星期天，下月天数填充
    for(let k=1;k<=(CALENDAR_ROW_COUNT*CALENDAR_COLUMN_COUNT-current.days-firstDayOfWeek+1);k++){
      dates.push(this.renderDateCell({
        year:next.year,
        month:next.month,
        day:k
      },'others'))
    }
    //console.log(dates);

    //渲染数据
    let tableCell = [];
    for(let m=0;m<CALENDAR_ROW_COUNT;m++){
      let rowData = [];
      for(let n=0;n<CALENDAR_COLUMN_COUNT;n++){
        let index = CALENDAR_COLUMN_COUNT*m + n;
        rowData.push(
          <td key={index} role="gridcell">{dates[index]}</td>
        )
      }
      tableCell.push(
        <tr key={m} role="row">{rowData}</tr>
      )
    }

    return (
      <tbody>
      {tableCell}
      </tbody>
    )
  }

  renderDateCell(data,type){
    const { value, onDateClick} = this.props,
      fullDay = `${data.year}/${data.month}/${data.day}`,
      displayDay = `${data.year}-${data.month}-${data.day}`;
    let cls = classnames({
      'calendar-ui-text':true,
      'calendar-ui-select':value === fullDay,
      'calendar-ui-others':type === 'others',
      'calendar-ui-today':new Date().toLocaleDateString() === new Date(fullDay).toLocaleDateString()
    })

    return <span className={cls} title={displayDay} onClick={()=>{onDateClick(fullDay)}}>{data.day}</span>
  }

  //获取本月第一天是星期几
  getFirstDayOfWeek(current){
    let cur = new Date(current.year,current.month-1,1);
    if(cur.getDay() === 0){
      return 7;
    }else{
      return cur.getDay();
    }
  }

  //获取上月数据
  getPreMonth(current){
    let result = {};
    if(current.month === 1){
      result.year = current.year-1;
      result.month = 12;
    }else{
      result.year = current.year;
      result.month = current.month - 1;
    }
    return result;
  }

  //获取下月数据
  getNextMonth(current){
    let result = {};
    if(current.month === 12){
      result.year = current.year+1;
      result.month = 1;
    }else{
      result.year = current.year;
      result.month = current.month + 1;
    }
    return result;
  }

  //获取指定月天数
  getDays(current){
    return new Date(current.year,current.month,0).getDate();
  }
}

DateTable.defaultProps = {
  value:'',
  defaultValue:'',
  onDateClick:()=>{}
}

export default DateTable;