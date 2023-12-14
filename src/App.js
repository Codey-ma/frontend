import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Mainpage';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    
  );
}

export default App;
