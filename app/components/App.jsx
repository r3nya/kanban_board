import React, { Component } from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';

const notes = [
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
    task: 'Be awesome'
  }
];

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
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}
