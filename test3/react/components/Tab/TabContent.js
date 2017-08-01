import React,{Component,PropTypes} from 'react'
import classnames from 'classnames'

class TabContent extends Component{
  static propTypes = {
    panels:PropTypes.node.isRequired,
    activeIndex:PropTypes.number.isRequired,
  };
  render(){

    const cls = classnames({
      'tab-content':true
    })
    return (
      <div className={cls} role="tablist">
        {this.renderContent()}
      </div>
    )
  }
  renderContent(){
    let {panels,activeIndex} = this.props;

    return React.Children.map(panels,(child)=>{
      if(!child) return;

      const order = parseInt(child.props.order,10);
      const isActive = activeIndex === order;

      return React.cloneElement(child,{
        key:order,
        isActive,
        children:child.props.children
      })
    })
  }
}

export default TabContent;