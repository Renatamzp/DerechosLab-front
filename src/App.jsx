import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Abouts from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import Inicio from "./Components/Pages/Inicio";
import Quiz from "./Components/Pages/Quiz";
import EruditoCard from "./Components/Cards/EruditoCard";
import Preguntasherudito from "./Components/Pages/Preguntasherudito";
import "./App.css";
import { useState } from "react";
import RapidoCard from "./Components/Cards/RapidoCard";
import Login from "./Components/Login/Login";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState("null");

  useEffect(() => {}, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/about" element={<Abouts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/herudito" element={<EruditoCard />} />
          <Route
            path="/preguntasherudito"
            element={<Preguntasherudito />}
          />{" "}
          <Route path="/rapido" element={<RapidoCard />} />{" "}
        </Routes>
        {!user && <Login user={user} setUser={setUser} />}
      </div>
    </Router>
  );
};

export default App;
