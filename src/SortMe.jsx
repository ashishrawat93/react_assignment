import React, {Component} from 'react';
import './App.css';


class SortMe extends Component {

	render() {
		return(
			<div className="dropdown"  >
				
				<h4>Sort By &nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h4>
				
				<select className="selectsort" onChange={this.props.updateSort} >
				  <option className="option" value="name,asc">A-Z</option>
				  <option className="option" value="name,desc">Z-A</option>
				  <option className="option" value="price,asc">Price Low to High</option>
				  <option className="option" value="price,desc">Price High to Low</option>
				  <option className="option" value="popularity,asc">Popularity Low to High</option>
				  <option className="option" value="popularity,desc">Popularity High to Low</option>
				</select>
			</div>
		)
	}
}

export default SortMe
