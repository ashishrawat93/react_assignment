import React, {Component} from 'react';
import './App.css';



class SizeFilter extends Component {

	render() {
		return(
			<div className="dropdown">
		
				<h4>&nbsp;&nbsp;&nbsp;&nbsp;Size &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</h4>
				
				<select  className="select" onChange={this.props.updateSize}>
				  <option value="All">All</option>
				  <option value="Small" >Small</option>
				  <option value="Medium">Medium</option>
				  <option value="Large">Large</option>
				</select>
			</div>
		)
	}

}

export default SizeFilter
