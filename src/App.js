import React, { Component } from 'react';
import './App.css';

class AppTest extends Component{
  constructor(){
    super();

    this.state = {
      sayHello: 'Hello World',
    };

    this.buttonChange = this.buttonChange.bind(this);
  }

  buttonChange(){
    this.setState({sayHello: 'Good Bye!'})
  }

  render(){
    return(
      <div className="App"> 
        <p>{this.state.sayHello}</p>
        <button onClick={this.buttonChange}>Bye Bye!</button>
      </div>
    );
  }
}

class App extends Component{

  constructor(){
    super();

    this.state = {
      currRates: [],
      selectValue : 'None',
      inputValue: 0,
    };

    this.selectChange = this.selectChange.bind(this); //ALWAYS BIND THEM FUNCTIONS?
    this.inputChange = this.inputChange.bind(this);
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

  selectChange(event){
    this.setState({selectValue: event.target.value});
  }

  inputChange(event){
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div className="App"> 
        EUR: <input type="number" onChange={this.inputChange} value={this.state.inputValue}/> to&nbsp;
        
        <select onChange={this.selectChange} value={this.state.selectValue}>
          <option value='None'>Select Currency</option>
          {
            Object.entries(this.state.currRates).map(([optionKey, optionValue])=>{
              return(
                <option key={optionValue} value={optionValue} className={optionKey.toString()}>{optionKey.toString()}</option> 
              )
                
            })
          }
        </select>

        &nbsp; Converted: {this.state.selectValue * this.state.inputValue}
      </div>
    );
  }
}

export default App;