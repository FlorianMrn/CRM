import React, { Component } from 'react';
import './App.css';
import firebase from '../firebase';
import Grid from './Grid';
import Form from './Form';

class App extends Component {

  state = {
   contacts: []
  }

  updateData = () => {
    const db = firebase.firestore();


    db.collection('contacts').get()
    .then((snapshot) => {
      let contacts = [];
      snapshot.forEach((doc) => {
        let contact = Object.assign({id : doc.id}, doc.data());
        contacts.push(contact);
      })
      this.setState({
        contacts
      })
    })
    .catch((err) => {
      console.log('erreur', err);
    })
  }
  componentDidMount() {
    this.updateData();
  }

  deleteData = (docId) => {
    const db = firebase.firestore();

    db.collection('contacts').doc(docId).delete();
    this.updateData();

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
          <Form updateData={this.updateData}/>  
          <Grid items={this.state.contacts} deleteData={this.deleteData}/>
        </div>
      </div>
    );
  }
}

export default App;
