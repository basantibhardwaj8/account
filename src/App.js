// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';
// import Account from './components/Account';
// import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './component/Login';
import Register from './component/Register';
import Account from './component/Account';
import { auth } from './firebase';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>} /> {/* Home page shows only Login */}
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/account" element={user ? <Account /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
