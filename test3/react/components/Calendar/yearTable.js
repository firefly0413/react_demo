import React,{Component} from 'react'
import classnames from 'classnames'
import './calendar.css'


const YEAR_ROW_COUNT = 4;
const YEAR_COLUMN_COUNT = 3;

class YearTable extends Component{
  constructor(props){
    super(props);
    this.state={
      current:props.current||new Date()
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
          {this.renderYearTable()}
        </table>
      </div>
    )
  }
  renderYearTable(){
    let dd = new Date(this.state.current);
    let current={
      year:dd.getFullYear(),
      month:dd.getMonth()+1,
      date:dd.getDate()
    };

    let firstYear = parseInt(current.year/10)*10-1,
        lastYear = firstYear + 11;


    let years=[];
    for(let i=firstYear;i<=lastYear;i++){
      let type = (i===firstYear||i===lastYear)?'others':'';
      years.push(this.renderYearCell({
        year:i,
        month:current.month,
        date:current.date
      },type))
    }
    let yearTableCell = [];
    for(let m=0;m<YEAR_ROW_COUNT;m++){
      let yearTableRow=[];
      for(let n=0;n<YEAR_COLUMN_COUNT;n++){
        let index = m*YEAR_COLUMN_COUNT+n;
        yearTableRow.push(
          <td key={`yearTable${index}`} role="gridcell">{years[index]}</td>
        )
      }

      yearTableCell.push(
        <tr key={m} role="row">{yearTableRow}</tr>
      )
    }

    return(
      <tbody>
        {yearTableCell}
      </tbody>
    )
  }

  //渲染年份单元格
  renderYearCell(data,type){
    const { onYearClick } = this.props,
      fullDay = `${data.year}/${data.month}/${data.date}`;
    let cls = classnames({
      'calendar-ui-year'         : true,
      'calendar-ui-year-others'  : type === 'others',
      'calendar-ui-year-select': this.state.current === fullDay,
    })

    return <span className={cls} onClick={()=>{onYearClick(fullDay)}}>{data.year}</span>
  }
}

export default YearTable;