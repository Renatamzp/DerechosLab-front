import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Abouts from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import LoginCard from "./Components/Cards/LoginCard";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({ userName: "yo" });
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/about" element={<Abouts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {!user && <LoginCard setUser={setUser} />}
      </div>
    </Router>
  );
};

export default App;
