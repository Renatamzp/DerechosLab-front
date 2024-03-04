import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./About";

const Home = () => {
  const [sloganIndex, setSloganIndex] = useState(0);
  const sloganLines = [
    "Conoce tus derechos.",
    "Empodérate.",
    "Enfrenta el mundo laboral ¡CON TODO!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prevIndex) =>
        prevIndex === sloganLines.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homeContainer">
      <h1 className="Saludo">Bienvenido a DerechosLab</h1>
      <p className="Eslogan">
        {sloganLines[sloganIndex].split("").map((char, index) => (
          <span
            key={index}
            className={char === " " ? "char-space" : "char-animation"}
          >
            {char}
          </span>
        ))}
      </p>
      <div className="images-container">
        <div className="img1">
          <img src="src\assets\img\dvd.png" alt="otraimagen" />
        </div>
        <div className="contenedor-bj">
          <Link to="/Quiz">
            <button className="button-jugar">JUGAR</button>
          </Link>
        </div>
        <div className="img2">
          <img src="src\assets\img\trabajando.png" alt="imgportada" />
        </div>
      </div>
    </div>
  );
};

export default Home;
