import React, { Component } from 'react';

import Person from './Person/Person';



class Persons extends Component {
    constructor(props){
        super(props);
        
        console.log('====================================');
        console.log('[Persons.js] Inside constructor', props);
        console.log('====================================');
      }
    
    componentWillMount (){
        console.log('====================================');
        console.log('[Persons.js] Inside componentWillMount()');
        console.log('====================================');
      }
    
      componentDidMount (){
        console.log('====================================');
        console.log('[Persons.js] Inside the componentDidMount()');
        console.log('====================================');
      }

      componentWillReceiveProps(nextProps){
          console.log('====================================');
          console.log('[UPDATE Persons.js] Inside componentWillRecieveProps', nextProps);
          console.log('====================================');
      }

      shouldComponentUpdate(nextProps,nextState){
          console.log('====================================');
          console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
          console.log('====================================');
          return true;
      }

      componentWillUpdate(nextProps, nextState){
          console.log('====================================');
          console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
          console.log('====================================');
      }

      componentDidUpdate(){
          console.log('====================================');
          console.log('[UPDATE Persons.js] Inside componentDidUpdate');
          console.log('====================================');
      }


    render (){

        console.log('====================================');
        console.log('[Persons.js] inside render ()');
        console.log('====================================');

        return this.props.persons.map( ( person,index ) => {
            return <Person 
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
          } );
    }
}

export default Persons;