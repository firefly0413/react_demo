import React,{Component,PropTypes} from 'react'
import classnames from 'classnames'

class TabNav extends Component{
  static propTypes = {
    panels:PropTypes.node.isRequired,
    activeIndex:PropTypes.number.isRequired,
    onChange:PropTypes.func
  };
  render(){

    const rootCls = classnames({
      'tab-bar':true,
    });
    const cls = classnames({
      'tab-nav':true
    })
    return (
      <div className={rootCls} role="tablist">
        <ul className={cls}>
          {this.getTabNavs()}
        </ul>
      </div>
    )
  }
  getTabNavs(){
    let {panels,activeIndex,onChange} = this.props;

    return React.Children.map(panels,(child)=>{
      if(!child) return;

      const order = parseInt(child.props.order,10);

      let cls = classnames({
        'active':activeIndex === order,
        'tab-disable':child.props.disabled
      })

      return(
        <li className={cls} role="tab" key={order}
            aria-disabled={child.props.disabled?'true':'false'}
            aria-selected={activeIndex === order?'true':'false'}
            onClick={()=>{onChange(order)}}
        >
          {child.props.tab}
        </li>
      )
    })
  }
}

export default TabNav;