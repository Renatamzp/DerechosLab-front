import React, { useState, useEffect } from "react";
import "./Preguntasherudito.css";
import axios from "axios";

function Preguntasherudito() {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/question/all-questions")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las preguntas:", error);
      });
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="container-perfil">
      <h4>Preguntas de Herudito</h4>
      {data.length > 0 && (
        <div>
          <p>Pregunta: {data[currentQuestionIndex].questionText}</p>
          {currentQuestionIndex < data.length - 1 && (
            <button onClick={handleNextQuestion}>Siguiente</button>
          )}
        </div>
      )}
    </div>
  );
}

export default Preguntasherudito;
