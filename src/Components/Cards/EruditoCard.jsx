import React from "react";
import { useNavigate } from "react-router-dom";
import "../Cards/EruditoCard.css";

const EruditoCard = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    console.log("¡Seleccionado!");
    navigate("/preguntasherudito");
  };

  return (
    <div className="container">
      <div className="shape">
        <div className="image"></div>
      </div>
      <h2>Erudito Laboral</h2>
      <h4 className="title">Conoce tus derechos laborales</h4>
      <button onClick={handleSelect}>Seleccionar</button>
    </div>
  );
};

export default EruditoCard;
