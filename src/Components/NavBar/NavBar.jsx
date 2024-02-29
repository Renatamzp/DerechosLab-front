import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li className="logo-container">
            <Link to="/">
              <img src="src\assets\img\Logo.png" alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="About">
            <Link to="/about">Acerca de</Link>
          </li>
          <li className="Register">
            <Link to="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
