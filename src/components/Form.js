import React, { Component } from 'react';
import firebase from 'firebase';

class Form extends Component {

    updateData = () => {
        this.props.updateData();
    }

    addContact = (e) => {
        e.prevenDefault();

        let newContact = {
            prenom: e.target.prenom.value,
            nom: e.target.nom.value,
            email: e.target.email.value,
            compagnie: e.target.compagnie.value,
            notes: e.target.compagnie.value
        }

        const db = firebase.firestore();
        db.collection('contacts').add(newContact);

        // Reset Form
        document.getElementById("addContact").reset();
        this.updateData();
    }

    
    render() { 
        return ( 
            <div className="row">
                <form className="col s12" id="addContact" onSubmit={this.addContact}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="precompagnie" type="text" className="validate" />
                            <label htmlFor="prenom">Prenom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate" />
                            <label htmlFor="nom">Nom de famille</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="compagnie" type="text" className="validate" />
                            <label htmlFor="compagnie">Compagnie</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="notes" type="text" className="validate" />
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div className="input-field col s4">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default Form;