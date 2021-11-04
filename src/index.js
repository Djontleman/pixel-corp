import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import AppHooks from './AppHooks'
import 'tachyons'
import './styles.css'


ReactDOM.render(
  <React.StrictMode>
    <AppHooks />
  </React.StrictMode>,
  document.getElementById('root')
);

// users.map(user=> <Card name={user.name} email={user.email}/>)