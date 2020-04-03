import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import data from '../data.json';
import Grid from './Grid';
import Form from './Form';

class App extends Component {

  state = {
    data
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyACxS6IsO9y1KAIdcJD0C40gWba-nGLQsk",
      authDomain: "crm-linkedin-5b2fd.firebaseapp.com",
      databaseURL: "https://crm-linkedin-5b2fd.firebaseio.com",
      projectId: "crm-linkedin-5b2fd",
      storageBucket: "crm-linkedin-5b2fd.appspot.com",
      messagingSenderId: "456851432817",
      appId: "1:456851432817:web:d23100792b59a687ca82d0"
    })
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="indigo darken-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>
        <div>
          <Form />  
          <Grid items={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default App;
