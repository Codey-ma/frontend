import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  return (

    <Navbar/>

    /*
  
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>

  */



  
  );
}

export default App;
