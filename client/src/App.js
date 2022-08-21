import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Welcome from "./pages/Welcome";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Approve from "./pages/Approve";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";

const profileDummyData = {
  username: "Samba",
  email: "sambasivareddychinta@gmail.com",
  password: "samba123@",
  phone: 7337375243,
  dob: new Date(2000, 10, 24),
  gender: "male",
};

const App = (props) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      {isLoggedIn && <Navigation />}
      <Routes>
        {!isLoggedIn && <Route path="/" element={<Welcome />} exact />}
        {!isLoggedIn && <Route path="/signin" element={<LoginPage />} exact />}
        {!isLoggedIn && <Route path="/signup" element={<SignupPage />} exact />}

        {isLoggedIn && <Route path="/" element={<Home />} exact />}
        {isLoggedIn && <Route path="/approves" element={<Approve />} exact />}
        {isLoggedIn && (
          <Route
            path="/profile"
            element={<Profile {...profileDummyData} />}
            exact
          />
        )}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
