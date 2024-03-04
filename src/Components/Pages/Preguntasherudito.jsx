import React, { useState, useEffect } from "react";
import "./Preguntasherudito.css";
import axios from "axios";

//Definición del componente:Se define la función del componente llamado Preguntaserudito
//Se utilizan los hooks useState para declarar dos estados en el componente:
// data que almacenará la información de las preguntas y currentQuestionIndex que almacenará el índice de la pregunta actual que se está mostrando
function Preguntasherudito() {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  //Efecto secundario con useEffect:
  //Se utiliza el hook useEffect para realizar una petición HTTP a "http://localhost:8080/question/all-questions"
  // cuando el componente se monta ([] como dependencia significa que solo se ejecuta una vez). El resultado de la petición se almacena en el estado data.
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

  //Manejo de siguiente pregunta:
  //Se define una función handleNextQuestion que incrementa el índice de la pregunta actual solo si no se ha llegado a la última pregunta.
  //Se define una función handleOptionClick que se ejecuta cuando se hace clic en una opción de respuesta.
  //En este caso, simplemente imprime la opción seleccionada en la consola.

  const handleNextQuestion = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleOptionClick = (selectedOption) => {
    console.log("Opción seleccionada:", selectedOption);
  };

  //Renderizado del componente:Se devuelve el JSX que representa el componente. La renderización está condicionada a que haya datos en data.
  return (
    <div className="container-perfil">
      {data.length > 0 && (
        <div>
          <h2 className="pregunta">
            {" "}
            {data[currentQuestionIndex].questionText}
          </h2>
          <div>
            {/* Botones para las opciones incorrectas */}
            {JSON.parse(data[currentQuestionIndex].choices[0].choicesText).map(
              (choice, index) => (
                <button
                  key={index}
                  className="alternative-button" // Clase específica para los botones de alternativas
                  onClick={() => handleOptionClick(choice)}
                >
                  {choice}
                </button>
              )
            )}

            {/* Botón para la opción correcta */}
            <button
              className="alternative-button correct-option" // Clase específica para el botón de la opción correcta
              onClick={() =>
                handleOptionClick(
                  data[currentQuestionIndex].correctChoices.correctChoicesText
                )
              }
            >
              {data[currentQuestionIndex].correctChoices.correctChoicesText}
            </button>
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
