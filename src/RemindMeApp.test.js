import React from 'react';
import ReactDOM from 'react-dom';
import RemindMeApp from './components/RemindMeApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RemindMeApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
