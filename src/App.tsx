import React, { useEffect } from 'react';
import './App.css';
import Router from './router';
import MainDashboard from './components/templates/main-dashboard';
import { useAppDispatch } from './app/hooks';
import { loadUsers } from './features/users/usersSlice';

function App() {

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(loadUsers())
  },[dispatch])

  return (
    <MainDashboard>
        <Router />
    </MainDashboard>
  );
}

export default App;
