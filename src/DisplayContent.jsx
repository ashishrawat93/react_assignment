import React, {Component} from 'react';
import './App.css';
// import { AppRegistry, View } from './react-native';



export default ({
	dog
}) => {
	return(
	
		<div className="eachline" >
			<div className="imagecontainer">
		 		<img src={require(dog.image+'.jpg')} />	
		 	</div>	
			<div className="eachimage" key={dog.id}>
				<p className="dogname"><strong> {dog.name} </strong></p>

				<p className="dogname">&nbsp;&nbsp;&nbsp; ${dog.price}<strong>.</strong>00 </p>
			 </div>
			 <div className="eachimage2">
			 	<p className="dogname2"><strong>Size: </strong> {dog.size}&nbsp; </p>&nbsp;
			 	<p className="dogname2">&nbsp;&nbsp;&nbsp;<strong>Color: </strong>{dog.color}&nbsp; </p>&nbsp;
			 	<p className="dogname2">&nbsp;&nbsp;&nbsp; {dog.popularity} &#9733;</p>
			 	

			 </div>
		 </div>
	)
}

 // KEY : {dog.id} __________ NAME : {dog.name.toLowerCase().replace(/\s+/g, '')} ____________
	// 		 PRICE : {dog.price} _____________ POP : {dog.popularity} 
	// 		 _______________ SIZE : {dog.size} ____________ COLOR : {dog.color}
	// 		 {dog.image}

	// <p className="dogname2">&nbsp;&nbsp;&nbsp;{dog.popularity} &#9733;</p>
	// <span>&#9733;</span>


	


	// <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>