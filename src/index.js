import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RemindMeApp from './components/RemindMeApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RemindMeApp />,
  document.getElementById('root')
);
registerServiceWorker();
