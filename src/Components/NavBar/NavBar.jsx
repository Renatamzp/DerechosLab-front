import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ setUser }) => {
  const cerrarSesion = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li className="nav-li logo-container">
            <Link to="/">
              <img src="src\assets\img\logoB.png" alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="nav-li About">
            <Link to="/about">Acerca de</Link>
          </li>
          <li className="nav-li About">
            <Link to="/perfilUsuario">Mi Perfil</Link>
          </li>
          <li className="nav-li About">
            <Link to="/avatar">Avatar</Link>
          </li>
          <li className="nav-li cerrarSesion">
            <a role="button" onClick={() => cerrarSesion()}>
              Cerrar Sesión{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
