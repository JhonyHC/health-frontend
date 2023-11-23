import { useState } from 'react';
import Landing from './Landing';
import AppLayout from './AppLayout';


function App() {
  const [isLogged, setIsLogged] = useState(1); //Logica para el inicio de sesion


  return (
    isLogged ? <AppLayout /> : <Landing />
  );
}

export default App;
