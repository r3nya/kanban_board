import React, { Component, PropTypes } from 'react';
import Note from './Note.jsx';

export default class Notes extends Component {
  constructor(props) {
    super(props);

    this.renderNote = this.renderNote.bind(this);
  }

  renderNote(note) {
    return (
      <li className="note" key={`note${note.id}`}>
        <Note
          task={note.task}
          onEdit={this.props.onEdit.bind(null, note.id)}
          onDelete={this.props.onDelete.bind(null, note.id)}
        />
      </li>
    );
  }

  render() {
    const notes = this.props.items;

    return (
      <ul className="notes">
        {notes.map(this.renderNote)}
      </ul>
    );
  }
}
