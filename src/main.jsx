import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { GifExpertApp } from './GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode> // TODO Ayuda a identificar problemas con lifeCycles con warnings https://reactjs.org/docs/strict-mode.html
)
