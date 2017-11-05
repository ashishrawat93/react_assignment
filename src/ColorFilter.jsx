import React, {Component} from 'react';
import './App.css';



class ColorFilter extends Component {


	render() {
		return(
			<div className="dropdown">
				
				<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Color &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</h4>

				<select className="select" onChange={this.props.updateColor}>
				  <option value="All" >All</option>
				  <option value="Black">Black</option>
				  <option value="Brown">Brown</option>
				  <option value="White">White</option>
				  <option value="Gold">Gold</option>
				</select>
			</div>
		)
	}
// e.target.value
}

export default ColorFilter







