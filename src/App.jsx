// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Abouts from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import LoginCard from "./Components/Cards/LoginCard";
import Quiz from "./Components/Pages/Quiz";
import HeruditoCard from "./Components/Cards/HeruditoCard";
import Preguntasherudito from "./Components/Pages/Preguntasherudito";
import "./App.css";
import { useState } from "react";
import RapidoCard from "./Components/Cards/RapidoCard";

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
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/herudito" element={<HeruditoCard />} />
          <Route
            path="/preguntasherudito"
            element={<Preguntasherudito />}
          />{" "}
          <Route path="/rapido" element={<RapidoCard />} />{" "}
        </Routes>
        {!user && <LoginCard setUser={setUser} />}
      </div>
    </Router>
  );
};

export default App;
