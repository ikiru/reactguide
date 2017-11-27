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
      ],
      otherState: 'some other value',
      showPersons: false
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Max', age:28 },
        {name: event.target.value, age:30 },
        {name: 'Julie', age:27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>

        { this.state.showPersons ? 
          <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Judith!!!!!!!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name}  
          age={this.state.persons[2].age}/>
          </div>  : null
        }
      </div>
    );
  }
}

export default App;
