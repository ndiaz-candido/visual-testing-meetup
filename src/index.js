import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('react-app')
  );
};

render();
