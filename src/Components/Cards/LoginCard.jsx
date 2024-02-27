import { useState } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation desde react-router-dom
import "./LoginCard.css";

const LoginCard = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation(); // Obtiene la ubicación actual de la aplicación

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Iniciar sesión con:", username, password);
    // token () ===>
    setUser({ userName: "yo" });
  };

  // Condicionalmente renderiza el componente solo en la página de inicio
  if (location.pathname !== "/") {
    return null;
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div id="login-card">
          <h2>Iniciar Sesión</h2>
          <form>
            <div>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={(e) => handleLogin(e)}>
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
