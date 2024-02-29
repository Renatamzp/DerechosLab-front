import React from "react";
import { useNavigate } from "react-router-dom";
import "./RapidoCard.css";

const RapidoCard = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    console.log("¡Seleccionado!");
    navigate("/otra-ruta");
  };

  return (
    <div className="container">
      {" "}
      <div className="shape">
        <div className="image"></div>
      </div>
      <h2>Rápido y preciso </h2>
      <h4 className="title">Desafia tus conocimientos contra el tiempo </h4>
      <button onClick={handleSelect}>Seleccionar</button>
    </div>
  );
};

export default RapidoCard;
