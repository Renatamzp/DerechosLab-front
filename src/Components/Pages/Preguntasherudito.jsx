import React, { useState, useEffect } from "react";
import "./Preguntasherudito.css";
import axios from "axios";

function Preguntasherudito() {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [incorrectlyAnsweredQuestions, setIncorrectlyAnsweredQuestions] =
    useState([]);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/question/all-questions")
      .then((response) => {
        setData(response.data);
        shuffleOptions(response.data[currentQuestionIndex]);
        resetTimer();
      })
      .catch((error) => {
        console.error("Error al obtener las preguntas:", error);
      });
  }, [currentQuestionIndex]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timeRemaining > 0 && timerActive) {
        setTimeRemaining((prev) => prev - 1);
      } else {
        // Si el tiempo se agota, avanza a la siguiente pregunta
        handleNextQuestion();
      }
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonta o cambia la pregunta
    return () => clearInterval(timerInterval);
  }, [timeRemaining, timerActive, currentQuestionIndex]);

  const resetTimer = () => {
    setTimeRemaining(15);
    setTimerActive(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reiniciar la selección al avanzar a la siguiente pregunta
      resetTimer();
    }
  };

  const handleOptionClick = (choice) => {
    console.log("Opción seleccionada:", choice);
    setSelectedOption(choice);
    setTimerActive(false); // Detener el cronómetro al seleccionar una opción
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

  const handleAnswerSubmit = () => {
    // Verificar si la opción seleccionada es correcta
    if (
      selectedOption ===
      data[currentQuestionIndex].correctChoices.correctChoicesText
    ) {
      setCorrectAnswers(correctAnswers + 1);
      setTotalPoints(totalPoints + 10);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
      setIncorrectlyAnsweredQuestions((prev) => [
        ...prev,
        currentQuestionIndex,
      ]);
      setTotalPoints(totalPoints - 5);
    }

    // Avanzar a la siguiente pregunta
    handleNextQuestion();
  };

  const reviewIncorrectAnswers = () => {
    setCurrentQuestionIndex(incorrectlyAnsweredQuestions[0]);
    setIncorrectlyAnsweredQuestions([]); // Limpiar la lista de preguntas incorrectas
  };

  return (
    <div className="container-perfil">
      {data.length > 0 && (
        <div>
          <span>
            Pregunta {currentQuestionIndex + 1} de {data.length}:
          </span>
          <h2 className="pregunta">
            {data[currentQuestionIndex].questionText}
          </h2>
          <div>
            {shuffledOptions.map((choice, index) => (
              <button
                key={index}
                className={`alternative-button ${
                  selectedOption === choice
                    ? choice ===
                      data[currentQuestionIndex].correctChoices
                        .correctChoicesText
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                onClick={() => handleOptionClick(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          <div>
            <p>Tiempo restante: {timeRemaining}s</p>
          </div>
          {currentQuestionIndex < data.length - 1 && (
            <button
              onClick={handleAnswerSubmit}
              className={`siguiente ${selectedOption ? "" : "disabled"}`}
            >
              Siguiente
            </button>
          )}
          {currentQuestionIndex === data.length - 1 && (
            <div>
              <h3>Resultados:</h3>
              <p>Preguntas Correctas: {correctAnswers}</p>
              <p>Preguntas Incorrectas: {incorrectAnswers}</p>
              <p>Puntos Totales: {totalPoints}</p>
              {incorrectAnswers > 0 && (
                <button onClick={reviewIncorrectAnswers}>
                  Revisar Preguntas Incorrectas
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Preguntasherudito;
