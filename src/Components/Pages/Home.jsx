import React from "react";
import "./Home.css";

const Home = () => {
  const handlePlayClick = () => {
    // Aquí puedes agregar la lógica para iniciar el juego o redirigir a otra pantalla
    console.log("Iniciar el juego...");
  };

  return (
    <div>
      <h1>Bienvenido a DerechosLab</h1>
      <p>
        Conoce tus derechos. Empodérate. Enfrenta el mundo laboral ¡CON TODO!
      </p>

      <button onClick={handlePlayClick}>JUGAR</button>
    </div>
  );
};

export default Home;
