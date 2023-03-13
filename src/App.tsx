import React from 'react';
import './App.css';
import Router from './router';
import MainDashboard from './components/templates/main-dashboard';

function App() {
  return (
    <MainDashboard>
        <Router />
    </MainDashboard>
  );
}

export default App;
