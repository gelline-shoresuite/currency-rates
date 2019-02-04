import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      currRates: [],
      value : 'Select',
    };

    this.change = this.change.bind(this); //ALWAYS BIND THIS
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

  change(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App"> 
        EUR: <input type="number"/> to&nbsp;
        <select onChange={this.change} value={this.state.value}>
          <option value='select'>Select Currency</option>
          {this.state.currRates}
        </select>
        &nbsp;{this.state.value}
     
      </div>
    );
  }
}

export default App;