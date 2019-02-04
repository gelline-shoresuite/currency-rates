import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      currRates: [],
    };

  }

  componentDidMount(){
    const API_KEY="d69d63eccfc65d52d99f5200bbf3dbf4";
    const apiGet= "http://data.fixer.io/api/latest?access_key=" + API_KEY;

    fetch(apiGet).then(results => results.json())
    .then(data => {
      console.log(data);
      return data.rates;

    }).then(theRates =>{
      
      console.log(theRates);
      let optionOutput = Object.entries(theRates).map(([optionKey, optionValue])=>{
        return(
            <option value={optionValue} className={optionKey.toString()}>{optionKey.toString()}</option> 
        )
      })
      console.log(optionOutput);
      this.setState({currRates: optionOutput});

    })
    
  }

  render() {
    return (
      <div className="App">
        EUR: <input type="number"/>
        <select>
          {this.state.currRates}
        </select>
     
      </div>
    );
  }
}

export default App;