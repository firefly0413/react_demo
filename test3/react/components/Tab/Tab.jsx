import React,{Component,PropTypes} from 'react'
import TabNav from './TabNav'
import TabContent from './TabContent'
import classnames from 'classnames'
import './tab.css'

class Tab extends Component{
  static propTypes = {
    activeIndex:PropTypes.number,
    defaultActiveIndex:PropTypes.number,
    className:PropTypes.string,
    onChange:PropTypes.func
  }

  static defaultProps = {
    defaultActiveIndex:0,
    onChange:()=>{}
  }

  constructor(props){
    super(props);
    const curProps = this.props;
    let activeIndex = curProps.activeIndex?curProps.activeIndex:curProps.defaultActiveIndex;

    this.state = {
      activeIndex,
      prevIndex:activeIndex
    }
  }

  componentWillReceiveProps(nextProps){
    if('activeIndex' in nextProps){
      this.setState({
        activeIndex:nextProps.activeIndex
      })
    }
  }

  render(){
    let {className} = this.props;
    let cls = classnames({
      [className]:true,
      'tab-wrap':true
    })
    return(
      <div className={cls}>
        {this.renderHeaders()}
        {this.renderContends()}
      </div>
    )
  }
  handleChange(activeIndex){
    let prevIndex = this.state.activeIndex;
    if(this.state.activeIndex !== activeIndex){
      this.setState({
        activeIndex,
        prevIndex
      })
    }
    //切换之后执行回调
    this.props.onChange({activeIndex,prevIndex})
  }
  renderHeaders(){
    let {children} = this.props;

    return (
      <TabNav
        panels = {children}
        activeIndex = {this.state.activeIndex}
        onChange={(order)=>this.handleChange(order)}
      />
    )
  }
  renderContends(){
    let {children} = this.props;

    return (
      <TabContent
        panels = {children}
        activeIndex = {this.state.activeIndex} />
    )
  }
}

export default Tab;