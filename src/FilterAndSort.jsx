import React, {Component} from 'react';
import './App.css';
import DisplayContent from './DisplayContent';


export default ({
	data,
	color,
	size,
	popularity,
	sortBy,
	sortOrd
}) => {

	function swap(arr, i, j) {
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
	}

	function selectionSort(arr,element,type) {
	  for(var i = 0; i < arr.length; i++) {
	    var min = i;
	    for(var j = i + 1; j < arr.length; j++) {
	      	if(type === 'asc') {
		      if(arr[j][element] < arr[min][element]) {
		        min = j;
		      }
		    }
		    else {
		    	if(arr[j][element] > arr[min][element]) {
		        min = j;
		      }
		    }
	    }
	    if(i !== min) {
	      swap(arr, i, min);
	    }
	  }
	  return arr;
	}



	var sorted = selectionSort(data,sortBy,sortOrd)

	// window.alert(color)
	if(color.toLowerCase() !== "All".toLowerCase()){
		sorted = sorted.filter((dog,i)=>{
			return(
				dog.color.toLowerCase() === color.toLowerCase()
				)
		})
	}
	if(size.toLowerCase() !== "All".toLowerCase()){
		sorted = sorted.filter((dog,i)=>{
			return(
				dog.size.toLowerCase() === size.toLowerCase()
				)
		})
	}
	if(popularity.toLowerCase() !== "All".toLowerCase()){
		sorted = sorted.filter((dog,i)=>{
			return(
				dog.popularity == popularity
				)
		})
	}
	const imagee = ""
	if( sorted.length <1)
	{
		return(
			<div className="emptymessage">
			<h1>
			No dogs found!
			</h1>
			<h3 className="emptyspace">
			 Please change one of the filters.
			</h3>
			</div>
			)
	}
	const doglist = sorted
	// .filter((dog,i) =>{
	// 	return(
	
	// 		dog.id ==20

	// 		// ||
	// 		// dog.name.toLowerCase() === "pug" 
	// 			// &&
	// 			// dog.popularity === 4 
	// 			// &&
	// 			// dog.size.toLowerCase() === "small"
	// 			// 0 === 0
	// 		)
	// 	}
	// )
	.map((dog, i) => {
		return(
			<DisplayContent 
			dog={dog} />

			)


			// <div key={i}> KEY : {dog.id} __________ NAME : {dog.name.toLowerCase().replace(/\s+/g, '')} ____________
			//  PRICE : {dog.price} _____________ POP : {dog.popularity} 
			//  _______________ SIZE : {dog.size} ____________ COLOR : {dog.color}
			//  {dog.image}
			//  <img src={require(dog.image+'.jpg')} />			</div>
			// )
		}
	)
	return(
		<div className='ul'>
		{doglist}
		</div>
		)
		

}
