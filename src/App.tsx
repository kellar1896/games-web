import React from 'react';
import './App.css';
import SideBar from './components/side-bar';
import NavBar from './components/nav-bar';
import Router from './router';

function App() {
  return (
    <div className="min-h-screen bg-raisingBlack font-mono flex flex-col md:flex-row">
      <SideBar />
      <NavBar />
      <div className='w-full md:w-9/12 min-h-screen'>
        <Router />
      </div>
    </div>
  );
}

export default App;
