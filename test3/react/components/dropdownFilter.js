import React,{Component} from "react"
import ReactDOM from "react-dom"
import { FormControl,Dropdown,MenuItem } from 'react-bootstrap';

class DropdownFilter extends Component{
	constructor(props){
		super(props);
		this.state = {
			filter:""
		}
	}
	render(){
		let _this = this;
		let children = this.props.children?(this.props.children instanceof Array?this.props.children:[this.props.children]):[];
		return(
			<Dropdown className="with-filter">
				<Dropdown.Toggle className="cut" onClick={_this.focusFilter.bind(_this)}>
					{_this.props.title}
				</Dropdown.Toggle>
				<FormControl
					ref="filter"
					type="text"
					onChange={_this.handleChange.bind(_this)}
					value={_this.state.filter}
					onClick={function(e){e.stopPropagation();e.nativeEvent.stopImmediatePropagation();}}
					onMouseDown={function(e){e.stopPropagation();e.nativeEvent.stopImmediatePropagation();}}
				/>
				<Dropdown.Menu style={{height:"300px",overflow:"scroll"}} >
					{
						children.map(function (item,index) {
							if(item.props.name.indexOf(_this.state.filter) == -1) {
								return null;
							}
							return React.cloneElement(item,{...item.props,key:index,
								onSelect:function(eventKey,e){item.props.onSelect(eventKey);
									_this.setState({filter:''});
								}});
						})
					}
				</Dropdown.Menu>
			</Dropdown>
		)
	}
	handleChange(e){
		this.setState({
			filter:e.target.value
		})
	}
	focusFilter(e) {
		let _this = this;
		setTimeout(function () {
			ReactDOM.findDOMNode(_this.refs['filter']).focus();
		});
	}
}

export {DropdownFilter};