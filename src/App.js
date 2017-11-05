import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import FilterAndSort from './FilterAndSort';
import ColorFilter from './ColorFilter';
import SizeFilter from './SizeFilter';
import PopularityFilter from './PopularityFilter';
import SortMe from './SortMe';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

       sortBy : "name",
       sortOrd : "asc",
       colorChoice : ["All", "Brown", "Black", "White", "Gold"],
       sizeChoice : ["All", "Small", "Medium", "Large"],
       popChoice : ["All", "1", "2", "3", "4", "5"],
       color : "All",
       size : "All",
       popularity : "All",
       itemsDisplayed: 1
    }
  }

  updateColor(event) {
    // window.alert(eventKey);
    this.setState({

        color : event.target.value
    })
  }
  updateSize(event) {
    
    this.setState({
        size : event.target.value
    })
   
  }
  updatePopularity(event) {
    this.setState({
      popularity : event.target.value
    })
  }

  updateSort(event) {

    var parts = event.target.value.split(',');
    this.setState({
        sortBy : parts[0] ,
        sortOrd : parts[1] 
    })

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
           
          <h1 className="App-title">Doggie Woggie</h1>
          <p> Pick Me... &nbsp;&nbsp;&nbsp; Choose Me.. &nbsp;&nbsp;&nbsp;  Love Me</p><p>Find your pet</p>

          
        </header>
        <main> 
          <div className="sortandfilter">
            <ColorFilter
            updateColor={this.updateColor.bind(this)}
            />
            <SizeFilter 
            updateSize={this.updateSize.bind(this)}
            />
            <PopularityFilter 
            updatePopularity={this.updatePopularity.bind(this)}
            />
         
            <SortMe 
            updateSort={this.updateSort.bind(this)}
            />
          </div>
          <FilterAndSort
            data={this.props.data}
              color={this.state.color}
              size={this.state.size}
              popularity={this.state.popularity}
              sortBy={this.state.sortBy}
              sortOrd={this.state.sortOrd}
          />
        </main>
        <div>
            <header className="footer">Footer- Find your pet</header>
        </div>
      </div>
    );
  }
}

export default App;
