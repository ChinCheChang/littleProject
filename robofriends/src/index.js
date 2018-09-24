import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import { robots } from './robots';

ReactDOM.render(
  <div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].amail} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].amail} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].amail} />
  </div>
, document.getElementById('root'));
registerServiceWorker();
