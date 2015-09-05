import React, { Component } from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Learn Flux'
        },
        {
          id: uuid.v4(),
          task: 'Be awesome'
        }
      ]
    };

    this.findNote = this.findNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
  }

  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex < 0) {
      console.log('Failed to find note', notes, id);
    }

    return noteIndex;
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  editNote(id, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNote(id);

    if (noteIndex < 0) {
      return;
    }

    notes[noteIndex].task = task;

    this.setState({ notes });
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} />
      </div>
    );
  }
}
