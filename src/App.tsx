import React from 'react';
import './App.css';
import SideBar from './components/side-bar';
import TopBar from './components/top-bar';
import Router from './router';

function App() {
  return (
    <div className="min-h-screen bg-raisingBlack font-mono flex flex-row">
      <SideBar />
      <TopBar />
      <div className='w-full md:w-9/12 min-h-screen'>
        <Router />
      </div>
    </div>
  );
}

export default App;
