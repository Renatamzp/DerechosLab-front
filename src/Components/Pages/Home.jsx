import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1 className="Saludo">Bienvenido a DerechosLab</h1>
      <p className="Eslogan">
        Conoce tus derechos. <br />
        Empodérate.
        <br />
        Enfrenta el mundo laboral <br />
        ¡CON TODO!
        <br />
      </p>
      <div className="images-container">
        <div className="img1">
          <img src="src\assets\img\dvd.png" alt="otraimagen" />
        </div>

        <div className="img2">
          <img src="src\assets\img\trabajando.png" alt="imgportada" />
        </div>
      </div>

      <div className="button-container">
        <Link to="/Quiz">
          <button>JUGAR</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
