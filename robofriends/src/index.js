import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <CardList />
  </div>
, document.getElementById('root'));
registerServiceWorker();
