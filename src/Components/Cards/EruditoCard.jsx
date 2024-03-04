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
    <div className="containerErudito">
      <h2 className="tituloErudito">Erudito Laboral</h2>
      <h4 className="textoErudito">
        Conoce y aprende sobre tus derechos laborales
      </h4>
      <button className="EruditoBtn" onClick={handleSelect}>
        Seleccionar
      </button>
    </div>
  );
};

export default EruditoCard;
