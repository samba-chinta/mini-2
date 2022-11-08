import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Welcome from "./pages/Welcome";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageNotFound from "./pages/PageNotFound";
import Request from "./pages/Request";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";

const App = (props) => {
  //const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (localStorage.getItem("loggedin")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <>
      {isLoggedIn && <Navigation />}
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Welcome />} exact />}
        {!isLoggedIn && <Route path="/signin" element={<LoginPage />} exact />}
        {!isLoggedIn && <Route path="/signup" element={<SignupPage />} exact />}

        {isLoggedIn && <Route path="/" element={<Home />} exact />}
        {isLoggedIn && <Route path="/requests" element={<Request />} exact />}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
