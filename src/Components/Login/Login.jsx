import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const navigate = useNavigate();

  // Estado local para gestionar la ruta, nombre de usuario, contraseña, etc.
  const [ruta, setRute] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [aniosUsuario, setAniosUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");

  // Función para manejar el inicio de sesión
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);

    // Llamada a la API para iniciar sesión
    axios
      .post("http://localhost:8080/api/auth/login", {
        username: username,
        password: password,
      })
      .then((resp) => {
        setUser(resp.data);
        localStorage.setItem("user", JSON.stringify(resp.data));
        console.log("Usuario guardado en localStorage");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // Función para manejar la creación de cuenta
  const handleCrear = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(aniosUsuario);
    console.log(apellidoUsuario);

    // Llamada a la API para crear una cuenta
    axios
      .post("http://localhost:8080/api/auth/registro", {
        username: username,
        password: password,
        email: email,
        aniosUsuario: aniosUsuario,
        apellidoUsuario: apellidoUsuario,
      })
      .then((resp) => {
        //setUser(resp.data);
        //localStorage.setItem("user", JSON.stringify(resp.data));
        //console.log("Usuario nuevo guardado en localStorage");
        //navigate("/");
        setRute("login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-login">
      <div className="contenedor-login">
        {/* Encabezado del formulario */}
        <h1 className="TituloLogin">
          ¿Listo para aprender? <br />
          {ruta === "login" ? "Inicia sesión" : "Crea tu cuenta"}
        </h1>

        {/* Formulario con renderizado condicional basado en la ruta */}
        <form
          className="formulario"
          onSubmit={(event) =>
            ruta === "login" ? handleLogin(event) : handleCrear(event)
          }
          method="post"
        >
          {ruta === "login" ? (
            /* Campos del formulario para inicio de sesión */
            <>
              <div className="pregunta">
                <label htmlFor="texto">Nombre</label>
                <input
                  type="text"
                  name="texto"
                  required
                  id="texto"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="pregunta">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  required
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </>
          ) : (
            /* Campos del formulario para creación de cuenta */
            <>
              <div className="pregunta">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="pregunta">
                <label htmlFor="primerapellido">Primer apellido</label>
                <input
                  type="text"
                  name="primerapellido"
                  required
                  value={apellidoUsuario}
                  onChange={(e) => setApellidoUsuario(e.target.value)}
                />
              </div>
              <div className="pregunta">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pregunta">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="pregunta">
                <label htmlFor="edad">Edad</label>
                <input
                  type="number"
                  name="edad"
                  required
                  value={aniosUsuario}
                  onChange={(e) => setAniosUsuario(e.target.value)}
                />
              </div>
            </>
          )}

          {/* Botones de acción */}
          <button className="LoginBtn" type="submit">
            {ruta === "login" ? "Iniciar sesión" : "Crear cuenta"}
          </button>
          {ruta === "login" ? (
            <button
              className="creaCuentaBtn"
              onClick={() => setRute("registro")} // Corregido a "registro"
            >
              Crea tu cuenta
            </button>
          ) : (
            <button className="volverAlLogin" onClick={() => setRute("login")}>
              Volver
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
