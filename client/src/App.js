import React from "react";
import { Routes, Route } from 'react-router-dom';

import Welcome from "./pages/Welcome";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/signin" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
    </>
  )
}

export default App;