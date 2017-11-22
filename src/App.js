import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons:[
      {name: 'Max', age:28 },
      {name: 'Manu', age:30 },
      {name: 'Julie', age:27 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        {name: newName, age:28 },
        {name: 'Manu', age:30 },
        {name: 'Julie', age:27 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Judith!!!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Judith!!!!!!!')}>My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name}  
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
