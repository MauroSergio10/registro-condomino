import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterUser from "./pages/registerUser";
import Home from "./pages/home";

const Navigation: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
