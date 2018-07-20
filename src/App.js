import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      value: '',  // the value of the text field
      imageUrl: ''  //the url of the image that is returned from json
    }
    // bindings
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // triggered when input tex is changed
  handleChange(event){
    //set state.value to the input text when it is changed
    this.setState({value: event.target.value});
  }

  // triggered when form is submitted
  handleSubmit(event){
    // make a GET request to github api and parse the JSON
    fetch("https://api.github.com/users/" + this.state.value)
    .then(res => {return res.json()}).then(data => this.setState({imageUrl: data.avatar_url}))
    event.preventDefault();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="title" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <img src={this.state.imageUrl} alt=""/>
      </div>
    );
  }
}

export default App;
