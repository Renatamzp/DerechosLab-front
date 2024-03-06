import React from "react";
import HeruditoCard from "../Cards/EruditoCard";
import RapidoCard from "../Cards/RapidoCard";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="quiz-container">
      <h1> Elige la modalidad de juego</h1>
      <div className="cards-container">
        <div className="card-with-image">
          <img
            src="src\assets\img\trabajador.png"
            alt="IMG1"
            className="card-image1"
          />
          <HeruditoCard className="quiz-card" />
        </div>
        <div className="card-with-image">
          <RapidoCard className="quiz-card" />
          <img
            src="src/assets/img/paracaidas.png"
            alt="IMG2"
            className="card-image2"
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
