import React from "react";
import HeruditoCard from "../Cards/EruditoCard";
import RapidoCard from "../Cards/RapidoCard";
import "./Quiz.css";

const Quiz = () => {
  return (
    <div className="quiz-container">
      <h1> Elige la modalidad de juego</h1>
      <div className="cards-container">
        <HeruditoCard className="quiz-card" />
        <RapidoCard className="quiz-card" />
      </div>
    </div>
  );
};

export default Quiz;
