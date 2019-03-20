import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
    constructor(props) {
        super(props)
        this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
        this.db = this.app.database().ref().child('notes'); // <-- create a notes object in db
    }

    componentWillMount() {
        const prevNotes = this.state.notes;
        this.db.on('child_added', snap => {
            prevNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent
            })
            this.setState({
                notes: prevNotes
            })
        })
    }

    state = {
        notes: []
    }

    addNote = (note) => {
        this.db.push().set({
            noteContent: note
        })
    }

    render() {
        return (
            <div className="notesWrapper">
                <div className="notesHeader">
                    <h1 className="heading">My notes</h1>
                </div>
                <div className="notesBody">
                   {
                        this.state.notes.length < 1 ? <p>Please add a note</p> : (
                            this.state.notes.map((note) => {
                                return (
                                    <Note
                                        noteContent={note.noteContent}
                                        noteId={note.noteId}
                                        key={note.id}
                                    />
                                )
                            })
                        )
                   }
                </div>
                <div className="notesFooter">
                    <NoteForm addNote={ this.addNote }/>
                </div>
            </div>
        );
    }
}

export default App;
