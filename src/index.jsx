﻿import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <Router>
    <App />
  </Router>
);
