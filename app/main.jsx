import './main.css';
import 'array.prototype.findindex';
import React from 'react';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';
import App from './components/App.jsx';

persist(alt, storage, 'app');

const app = document.createElement('div');
document.body.appendChild(app);

React.render(<App />, app);
