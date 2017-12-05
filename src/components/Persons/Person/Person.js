import React, { Component } from 'react';
import classes from './Person.css';



class Person extends Component {

    constructor(props){
        super(props);
        
        console.log('====================================');
        console.log('[Person.js] Inside constructor', props);
        console.log('====================================');
    }
    
    componentWillMount (){
        console.log('====================================');
        console.log('[Person.js] Inside componentWillMount()');
        console.log('====================================');
    }
    
      componentDidMount () {
        console.log('====================================');
        console.log('[Person.js] Inside the componentDidMount()');
        console.log('====================================');
    }

    componentWillRecieveProps(nextProps) {
        console.log('====================================');
        console.log('[UPDATE Person.js] Inside componentWillRecieveProps', nextProps );
        console.log('====================================');
    }

    shouldComponentUpdate(nextProps){
        console.log('====================================');
        console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState);
        console.log('====================================');
    }

    render() {
        console.log('====================================');
        console.log('[Person.js] inside render ()');
        console.log('====================================');
    

        return this.props.persons.map(( person, index ) => { 
            return <Person
                click={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed( event, person)} />
        });
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
            </div>
                    
    }
} 

export default Person;