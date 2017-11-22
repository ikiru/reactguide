import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person />
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'DOES THIS WORK NOW?'))
  }
}

export default App;