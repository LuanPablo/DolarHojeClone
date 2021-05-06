criando meu projeto: 
1- yarn create react-app dolarhoje

dentro de index.js cole:

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

dentro de app.js cole:


export function App() {
  return <div />;
}
