import React from 'react';
import './style/GlobalStyles.css';
import { Router } from 'react-router-dom';
import Main from './routes';
import Header from './components/Header';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
