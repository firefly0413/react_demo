import React,{Component,PropTypes} from 'react'


class A extends Component{
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render(){
    return(
      <div className="normBlock">
        <h3>这里是A组件</h3>
        <B />
      </div>
    )
  }
}
A.childContextTypes = {
  color:PropTypes.string
};

class B extends Component{
  render(){
    return(
      <div className="normBlock">
        <h3>这里是B组件</h3>
        <C />
      </div>
    )
  }
}

class C extends Component{
  constructor(props,context){
    super(props,context)
  }
  render(){
    return(
      <div className="normBlock">
        <h3 style={{color:this.context.color}}>这里是C组件</h3>
      </div>
    )
  }
}
C.contextTypes = {
  color:PropTypes.string
};


export default A;