import { useState, createContext } from 'react';
import Landing from './Landing';
import AppLayout from './AppLayout';
import UserProfile from './helpers/UserProfile';


function App() {

  const isLogged = UserProfile.isLoggedIn();


  return (
    isLogged ? <AppLayout /> : <Landing />
  );
}

export default App;
