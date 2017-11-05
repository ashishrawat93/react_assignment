import React, {Component} from 'react';
import './App.css';


class SortMe extends Component {

	render() {
		return(
			<div>Sort By :&nbsp;
				<select onChange={this.props.updateSize}>
				  <option value="name,asc">A-Z</option>
				  <option value="name,desc">Z-A</option>
				  <option value="price,asc">Price Low to High</option>
				  <option value="price,desc">Price High to Low</option>
				  
				</select>
			</div>
		)
	}
}

export default SizeFilter
