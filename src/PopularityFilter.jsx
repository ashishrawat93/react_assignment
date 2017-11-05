import React, {Component} from 'react';
import './App.css';



class PopularityFilter extends Component {

	render() {
		return(
			<div className="dropdown">
		
				<h4>Popularity :&nbsp;</h4>
			
				<select className="select" onChange={this.props.updatePopularity}>
				  <option value="All">All</option>
				  <option value="5">5</option>
				  <option value="4">4</option>
				  <option value="3">3</option>
				  <option value="2">2</option>
				  <option value="1">1</option>
				</select>
			</div>
		)
	}

}

export default PopularityFilter
