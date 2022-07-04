/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react';
import App from './components/App';

// Importamos los estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// TODO: Si trabajamos conn Redux

ReactDOM.render(
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line linebreak-style
  document.getElementById('root'),
);