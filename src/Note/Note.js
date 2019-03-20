import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
    render() {
        return (
            <div className="note fade-in">
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
