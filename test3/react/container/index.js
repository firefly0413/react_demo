import React,{PropTypes,Component} from "react"
import Header from "./header"
import Aside from "./aside"
import "../style/index.css"

class Index extends Component{
	render(){
		return (
			<div>
				<Header />
				<div className="container">
					<Aside />
					<div className="col-sm-10">
						{this.props.children}
					</div>
				</div>
			
			</div>
		)
	}
}

export default Index;