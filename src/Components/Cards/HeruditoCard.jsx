import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeruditoCard.css";

const HeruditoCard = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    console.log("¡Seleccionado!");
    navigate("/preguntasherudito"); // Asegúrate de que esta ruta coincida con la configuración en tu enrutador
  };

  return (
    <div className="container">
      <div className="shape">
        <div className="image"></div>
      </div>
      <h3>Herudito Laboral</h3>
      <h4 className="title">Pon a prueba tus conocimientos</h4>
      <button onClick={handleSelect}>Seleccionar</button>
    </div>
  );
};

export default HeruditoCard;
