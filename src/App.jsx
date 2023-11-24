import { useState} from 'react';
import Landing from './Landing';
import AppLayout from './AppLayout';
import UserProfile from './helpers/UserProfile';

function App() {
  const [isLogged, setIsLogged] = useState(UserProfile.isLoggedIn());

  return isLogged ? <AppLayout setIsLogged={setIsLogged} /> : <Landing />;
}

export default App;
