import React,{Component} from 'react'
import domUtil from './dom';

class Slider extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentValue:0
    }
    this.handleMove = this.handleMove.bind(this);
    this.handleMoveEnd = this.handleMoveEnd.bind(this);
  }

  static defaultProps = {
    min:0,
    max:20,
    defaultValue:5,
    onChange:()=>{}
  }

  componentDidMount(){
    let { min, max, defaultValue } = this.props;

    defaultValue = defaultValue||min;

    this.setState({
      currentValue:defaultValue
    })
    this.offsetLeft = domUtil.getLeft(this.refs.sliderBody);
    this.isTouchSuported = domUtil.probTouch()
  }
  render(){
    const { min, max ,styleWidth} = this.props;
    const transitionArray = ['WebkitTransition', 'MozTransition', 'msTransition', 'OTransition', 'Transition']

    let percent = (this.state.currentValue-min)/(max-min)*100;

    let styleWidthObj = {
      width:`${styleWidth||200}px`
    }

    let styleObj = {
      handle:{left:`${percent}%`},
      back:{width:`${percent}%`}
    }

    if(!this.removeTransition){
      transitionArray.forEach((transition)=>{
        styleObj.handle[transition] = 'left 0.6s ease';
        styleObj.back[transition] = 'width 0.6s ease';
      })
    }

    return(
      <div className="slider">
        <div className='ui-slider-horizontal' style={styleWidthObj} ref='sliderBody' onClick={(e)=>this.handleClick(e)}>
          <div>
            <span className='ui-slider-handle' style={styleObj.handle}
              onClick={(e)=>e.stopPropagation()}
              onMouseDown={(e)=>!this.isTouchSuported && this.handleDown(e)}
              onTouchStart={(e)=>this.isTouchSuported && this.handleDown(e)}
              onTouchMove={(e)=>this.isTouchSuported && this.handleMove(e)}
              onTouchEnd={(e)=>this.isTouchSuported && this.handleMoveEnd(e)}
            >

            </span>
            <div className='ui-slider-back' style={styleObj.back} />
          </div>
        </div>
      </div>
    )
  }
  handleDown(e){
    e.stopPropagation();
    e.preventDefault();
    const addBodyListener = document.body.addEventListener.bind(document.body);
    if(this.isTouchSuported){
      addBodyListener('touchmove',this.handleMove,false);
      addBodyListener('touchend',this.handleMoveEnd,false);
    }else{
      addBodyListener('mousemove',this.handleMove,false);
      addBodyListener('mouseup',this.handleMoveEnd,false);
    }

    this.removeTransition = true;
    this.isDragging = true;
    this.prevX = this.isTouchSuported? e.touches[0].clientX:e.clientX
  }
  handleMove(e){
    e.stopPropagation()
    e.preventDefault()
    let {min,max,styleWidth} = this.props;
    let clientX = (this.isTouchSuported&&e.touches&&e.touches[0])?e.touches[0].clientX:e.clientX;
    let mouseMoveDist = clientX - this.prevX;
    let percent = mouseMoveDist/(styleWidth||200),
      value = percent*(max-min);

    //设置移动的最小值
    if(Math.abs(value)>=1){
      let newValue = Math.round(this.state.currentValue + value);
      this.prevX = this.isTouchSuported? e.touches[0].clientX:e.clientX
      if(newValue>=min && newValue<=max){
        this.setState({
          currentValue:newValue
        })
      }
    }
  }
  handleMoveEnd(e){
    e.stopPropagation()
    e.preventDefault()
    const removeBodyListener = document.body.removeEventListener.bind(document.body);

    if(this.isTouchSuported){
      removeBodyListener('touchmove',this.handleMove,false);
      removeBodyListener('touchend',this.handleMoveEnd,false);
    }else{
      removeBodyListener('mousemove',this.handleMove,false);
      removeBodyListener('mouseup',this.handleMoveEnd,false);
    }
    this.removeTransition = false;
    setTimeout(()=>{
      this.isDragging = false;
    },0)

    //执行回调
    this.props.onChange(this.state);
  }
  handleClick(e){
    e.stopPropagation();
    e.preventDefault();

    if(this.isDragging) return

    this.removeTransition = false;
    let {min,max,styleWidth,onChange} = this.props;
    let mouseLeft = e.pageX - this.offsetLeft;
    if(mouseLeft<0 || mouseLeft > (styleWidth||200)) return;

    //根据点击的位置算出点击处的值是多少
    let percent = mouseLeft/(styleWidth||200),
      value = Math.floor((max-min)*percent+min);

    this.setState({
      currentValue:value
    },()=>{
      //执行回调
      onChange(this.state);
    })
  }
}

export default Slider;