import React, { useState, useEffect } from "react";
import "./Preguntasherudito.css";
import axios from "axios";

function Preguntasherudito() {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/question/all-questions")
      .then((response) => {
        setData(response.data);
        shuffleOptions(response.data[currentQuestionIndex]);
      })
      .catch((error) => {
        console.error("Error al obtener las preguntas:", error);
      });
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleOptionClick = (selectedOption) => {
    console.log("Opción seleccionada:", selectedOption);
  };

  const shuffleOptions = (question) => {
    const allOptions = [
      ...JSON.parse(question.choices[0].choicesText),
      question.correctChoices.correctChoicesText,
    ];

    // Lógica para barajar todas las opciones
    const shuffled = allOptions.sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  };

  return (
    <div className="container-perfil">
      {data.length > 0 && (
        <div>
          <h2 className="pregunta">
            {data[currentQuestionIndex].questionText}
          </h2>
          <div>
            {shuffledOptions.map((choice, index) => (
              <button
                key={index}
                className="alternative-button"
                onClick={() => handleOptionClick(choice)}
              >
                {choice}
              </button>
            ))}
          </div>

          {currentQuestionIndex < data.length - 1 && (
            <button onClick={handleNextQuestion} className="siguiente">
              Siguiente
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Preguntasherudito;
