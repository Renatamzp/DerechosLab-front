import React, { useState, useEffect } from "react";
import "./Preguntasherudito.css";
import axios from "axios";

function Preguntasherudito() {
  const [data, setData] = useState([]); // Agregado el estado 'data'

  useEffect(() => {
    // Llamada a la API para obtener todas las preguntas
    axios
      .get("http://localhost:8080/question/all-questions")
      .then((response) => {
        // Actualizar el estado con los datos de la respuesta
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las preguntas:", error);
      });
  }, []); // El segundo argumento del useEffect, un array vacío, asegura que la llamada se realice solo una vez al montar el componente

  return (
    <div className="container-perfil">
      {" "}
      {/* Corregido el nombre de la clase */}
      <h4>Preguntas de Herudito</h4>
      {data.map((item) => (
        <div key={item.id} className="card">
          <div>
            <p>Pregunta: {item.questionText}</p>
          </div>
        </div>
      ))}
    </div>
  ); // Agregado el cierre del bloque return
}

export default Preguntasherudito;
