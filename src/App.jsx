import { useState } from 'react';
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}