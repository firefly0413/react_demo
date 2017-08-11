import React,{Component} from 'react'

class Select extends Component{
  constructor(props){
    super(props);
    this.state={
      area:this.props.defaultValue
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      area:e.target.value
    })
  }
  render(){
    const {area} = this.state;
    return(
      <select value={area} onChange={this.handleChange}>
        {this.props.children}
      </select>
    )
  }
}

export default Select;