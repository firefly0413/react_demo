import React,{Component} from 'react'
import classnames from 'classnames'

class Modal extends Component{
  constructor (props){
    super(props);
    this.state = {
      isShow:props.visible || false,
      isPending:false,
      animationState:'enter'
    }
  }
  static defaultProps = {
    visible:false,
    animationType:'zoom',
    animationDuration:300,
    width:'70%',
    minWidth:270,
    onMaskClick:()=>{}
  }
  componentWillReceiveProps(nextProps){
    if(!this.props.visible && nextProps.visible){
      this.enter();
    }else if(this.props.visible && !nextProps.visible){
      this.leave();
    }
  }
  render(){
    const {className,animationType,animationDuration,width,minWidth,onMaskClick} = this.props;
    const {isShow,isPending,animationState} = this.state;
    let cls = {
      'modal':classnames({
        'ui-modal':true,
        [`fade-${animationState}`]:isPending,
        [className]:!!className
      }),
      'dialog':classnames({
        'ui-modal-dialog':true,
        [`${animationType}-${animationState}`]:true
      })
    }

    let style = {
      'modal':{
        WebkitAnimationDuration : `${animationDuration}ms`,
        MozAnimationDuration    : `${animationDuration}ms`,
        msAnimationDuration     : `${animationDuration}ms`,
        OAnimationDuration      : `${animationDuration}ms`,
        animationDuration       : `${animationDuration}ms`,
      },
      'dialog':{
        width                   : width,
        minWidth                : minWidth,
        WebkitAnimationDuration : `${animationDuration}ms`,
        MozAnimationDuration    : `${animationDuration}ms`,
        msAnimationDuration     : `${animationDuration}ms`,
        OAnimationDuration      : `${animationDuration}ms`,
        animationDuration       : `${animationDuration}ms`,
      }
    }
    if(!isShow){
      style.modal.display = 'none';
    }
    return(
      <div className={cls.modal} style={style.modal} onClick={onMaskClick}>
        <div className="ui-modal-wraper">
          <div className={cls.dialog} style={style.dialog}>
            我是一个模态框
          </div>
        </div>
      </div>
    )
  }
  enter(){
    this.setState({
      isShow:true,
      isPending:true,
      animationState:'enter'
    })
  }
  leave(){
    this.setState({
      isShow:false,
      isPending:false,
      animationState:'leave'
    })
  }
}

export default Modal;