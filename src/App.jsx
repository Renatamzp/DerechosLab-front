import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Abouts from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Quiz from "./Components/Pages/Quiz";
import EruditoCard from "./Components/Cards/EruditoCard";
import Preguntasherudito from "./Components/Pages/Preguntasherudito";
import RapidoCard from "./Components/Cards/RapidoCard";
import Login from "./Components/Login/Login";
import axios from "axios";
import "./App.css";
import PerfilUsuario from "./Components/Pages/PerfilUsuario";
import Avatar from "./Components/Pages/Avatar";
import Proximamente from "./Components/Pages/Proximamente";

const App = () => {
  const [user, setUser] = React.useState(null);

  // Efecto para cargar el usuario desde localStorage al montar la aplicación
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Función para manejar el inicio de sesión y actualización del usuario
  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <Router>
      <div>
        <NavBar setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/herudito" element={<EruditoCard />} />
          <Route path="/preguntasherudito" element={<Preguntasherudito />} />
          <Route path="/rapido" element={<RapidoCard />} />
          <Route path="/proximamente" element={<Proximamente />} />
          <Route path="/perfilUsuario" element={<PerfilUsuario />} />
        </Routes>
        {!user && <Login setUser={handleLogin} />}
      </div>
    </Router>
  );
};

export default App;
