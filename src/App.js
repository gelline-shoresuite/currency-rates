import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      currRates: [],
      selectValue : 1,
      inputValue: 0,
    };

  }

  //The things inside the select Dropdown
  componentDidMount(){
    const API_KEY="d69d63eccfc65d52d99f5200bbf3dbf4";
    const apiGet= "http://data.fixer.io/api/latest?access_key=" + API_KEY;

    fetch(apiGet).then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({currRates: data.rates})
    })
    
  }

  selectChange = (event) =>{
    this.setState({selectValue: event.target.value});
  }

  inputChange = (event) =>{
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div className="App"> 
        EUR: <input type="number" onChange={this.inputChange} value={this.state.inputValue} min="0" max="99999999"/> to&nbsp;
        
        <select onChange={this.selectChange} value={this.state.selectValue}>
          <option value='1'>Select Currency</option>
          {
            Object.entries(this.state.currRates).map(([optionKey, optionValue])=>{
              return(
                <option key={optionKey} value={optionValue} className={optionKey.toString()}>{optionKey.toString()}</option> 
              )
                
            })
          }
        </select>
        Converted: <input type="text" value={this.state.selectValue * this.state.inputValue} disabled/>
        &nbsp; {this.state.selectValue * this.state.inputValue}
      </div>
    );
  }
}

export default App;