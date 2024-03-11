import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { SignupPage } from "../pages/signup/SignupPage";
import HomePage from "../pages/home/HomePage";

const RootNavigation = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default RootNavigation;
