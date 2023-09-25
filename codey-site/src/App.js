import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Navigate to="/signin" />} />
    </Routes>
  );
}

export default App;
