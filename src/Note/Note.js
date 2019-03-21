import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
    handleRemoveNote = (id) => {
        this.props.removeNote(id);
    }

    render() {
        return (
            <div className="note fade-in">
                <span 
                    className="closebtn" 
                    onClick={() => this.handleRemoveNote(this.props.noteId)}>
                    &times;
                </span>
                <p className="noteContent">
                    { this.props.noteContent }
                </p>
            </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
