import React,{Component,PropTypes} from 'react'
import classnames from 'classnames'

class TabPanel extends Component{
  static propTypes = {
    tab:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    order:PropTypes.string.isRequired,
    isActive:PropTypes.bool,
    disable:PropTypes.bool
  };
  render(){
    const {className,isActive,children} = this.props;

    let cls = classnames({
      [className]:className,
      'tab-panel':true,
      'active':isActive
    })
    return (
      <div className={cls} role="tabpanel" aria-hidden={!isActive}>
        {children}
      </div>
    )

  }

}

export default TabPanel;