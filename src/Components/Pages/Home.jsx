import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a DerechosLab</h1>
      <p>
        Conoce tus derechos. Empodérate. Enfrenta el mundo laboral ¡CON TODO!
      </p>

      <div className="button-container">
        <Link to="/Quiz">
          <button>JUGAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
