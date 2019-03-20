import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note';

class App extends Component {
    state = {
        notes: [
            {id: 1, noteContent: 'Note 1 here'},
            {id: 2, noteContent: 'Note 2 here'}
        ]
    }

    render() {
        return (
            <div className="notesWrapper">
                <div className="notesHeader">
                    <h1 className="heading">My notes</h1>
                </div>
                <div className="notesBody">
                   {
                        this.state.notes.map((note) => {
                            return (
                                <Note
                                    noteContent={note.noteContent}
                                    noteId={note.noteId}
                                    key={note.id} 
                                />
                            )
                        })
                   }
                </div>
                <div className="notesFooter">
                    Footer will go here...
                </div>
            </div>
        );
    }
}

export default App;
