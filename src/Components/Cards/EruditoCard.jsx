import React from "react";
import { useNavigate } from "react-router-dom";

const EruditoCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navegar a la página deseada al hacer clic
    navigate("/About");
  };

  return (
    <div className="erudito-card" onClick={handleClick}>
      <h2>Erudito</h2>
      <p>Descripción del erudito...</p>
      {/* Otros detalles de la tarjeta */}
    </div>
  );
};

export default EruditoCard;
