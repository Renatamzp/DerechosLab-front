import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [ruta, setRute] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <>
      <div className="container-login">
        {ruta === "login" ? (
          <div className="contenedor">
            <button onClick={() => setRute("crear cuenta")}>
              Crea tu cuenta
            </button>
            <form
              className="formulario"
              onSubmit={(event) => {
                handleLogin(event);
              }}
              method="post"
            >
              <label className="pregunta">
                Username
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label className="pregunta">
                Password
                <input
                  type="password"
                  name="password"
                  required
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        ) : (
          <>
            <div className="contenedor">
              <button onClick={() => setRute("login")}>Login</button>
              <h1>CREA TU CUENTA</h1>
              <div className="preguntas">
                <form className="formulario" action="formulario" method="post">
                  <label className="pregunta">
                    Nombre
                    <input type="text" name="nombre" required />
                  </label>
                  <label className="pregunta">
                    Primer apellido
                    <input type="text" name="primerapellido" required />
                  </label>
                  <label className="pregunta">
                    Email
                    <input type="text" name="email" required />
                  </label>
                  <label className="pregunta">
                    Username
                    <input type="text" name="username" required />
                  </label>
                  <label className="pregunta">
                    Password
                    <input type="password" name="password" required />
                  </label>
                  <label className="pregunta">
                    Edad
                    <input type="number" name="edad" required />
                  </label>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Login;
