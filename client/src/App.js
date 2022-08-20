import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Welcome from "./pages/Welcome";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UploadPage from "./pages/UploadPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Approve from "./pages/Approve";
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
        <Route path="/" element={<Welcome />} exact />
        <Route path="/signin" element={<LoginPage />} exact />
        <Route path="/signup" element={<SignupPage />} exact />
        <Route path="/upload" element={<UploadPage />} exact />
        <Route path="/approves" element={<Approve />} exact />
        <Route
          path="/profile"
          element={<Profile {...profileDummyData} />}
          exact
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
