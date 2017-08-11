import React,{Component} from 'react'
import classnames from 'classnames'

class MonthTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      current:props.current || new Date()
    }
  }
  static switchMonth = {
    1:'一月',
    2:'二月',
    3:'三月',
    4:'四月',
    5:'五月',
    6:'六月',
    7:'七月',
    8:'八月',
    9:'九月',
    10:'十月',
    11:'十一月',
    12:'十二月',

  };
  componentWillReceiveProps(nextProps){
    if('current' in nextProps){
      this.setState({
        current:nextProps.current
      })
    }
  }
  render(){
    let {visible}  = this.props;
    let style = {
      display:!!visible?'none':'block'
    };
    return(
      <div style={style}>
        <table className="table table-ui">
          {this.renderMonth()}
        </table>
      </div>
    )
  }
  renderMonth(){
    let dd = new Date(this.state.current);
    let current = {
      year:dd.getFullYear(),
      month:dd.getMonth()+1,
      date:dd.getDate()
    };

    let monthData = [];
    for(let j=1;j<=12;j++){
      monthData.push({
        year:current.year,
        month:j,
        date:current.date
      })
    }

    let monthCell=[];
    for(let i=0;i<4;i++){
      let monthRow=[];
      for(let k=0;k<3;k++){
        let index = i*3+k;
        monthRow.push(
          <td key={index} role="girdcell">{this.renderMonthCell(monthData[index])}</td>
        )
      }
      monthCell.push(
        <tr role="row" key={`calendarMonth${i}`}>{monthRow}</tr>
      )
    }

    return (
      <tbody>
      {monthCell}
      </tbody>
    )
  }
  renderMonthCell(data){
    let {onMonthClick} = this.props,
      fullDay =  `${data.year}/${data.month}/${data.date}`;

    let cls = classnames({
      'calendar-ui-month':true,
      'calendar-ui-month-select':this.state.current === fullDay
    });

    return <span className={cls} onClick={()=>{onMonthClick(fullDay)}}>{MonthTable.switchMonth[data.month]}</span>
  }
}

export default MonthTable;