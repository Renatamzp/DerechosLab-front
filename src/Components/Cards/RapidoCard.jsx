import React from "react";
import { useNavigate } from "react-router-dom";
import "./RapidoCard.css";

const RapidoCard = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    console.log("¡Seleccionado!");
    navigate("/proximamente");
  };

  return (
    <div className="RapidoContainer">
      <h2 className="tituloRapido">Rápido y preciso </h2>
      <h4 className="textoRapido">
        Desafia tus conocimientos contra el tiempo{" "}
      </h4>
      <button className="RapidoBtn" onClick={handleSelect}>
        Proximamente
      </button>
    </div>
  );
};

export default RapidoCard;
