import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PerfilUsuario.css";

function PerfilUsuarioDetalle({ usuario }) {
  const [avatar, setAvatar] = useState(null);
  const { username, apellidoUsuario, email, aniosUsuario } = usuario;

  useEffect(() => {
    const localAvatar = localStorage.getItem("avatar");
    if (localAvatar) {
      setAvatar(localAvatar);
    }
  }, []);
  return (
    <div className="perfil">
      <h1 className="titulo-perfil">{username}</h1>
      <div className="container-perfil">
        <div className="datos-usuario">
          <p>
            <span className="apellido-cont">Apellido:</span>
            <span className="valorapellido">{apellidoUsuario}</span>
          </p>
          <p>
            <span className="email-cont">Email:</span>
            <span className="valoremail">{email}</span>
          </p>
          <p>
            <span className="edad-cont">Edad:</span>
            <span className="valorusuario">{aniosUsuario}</span>
          </p>
        </div>
        <div className="avatar-content">
          {avatar ? (
            <>
              <img
                src={avatar}
                alt={`mi avatar`}
                className={`avatar-image `}
                role="button"
              />
            </>
          ) : (
            <>
              <Link className="boton-avatar" to="/avatar">
                selecciona
                <br /> tu <br /> Avatar
              </Link>
            </>
          )}
        </div>
      </div>
      <div></div>
      <Link to="/" className="boton-regresar">
        Ir a jugar
      </Link>
    </div>
  );
}

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"));

    if (token && token.token) {
      axios
        .get("http://localhost:8080/usuario/lista", {
          headers: { Authorization: `Bearer ${token.token}` },
        })
        .then((res) => {
          const usuarioActual = res.data.find(
            (u) => u.username === token.username
          );

          if (usuarioActual) {
            setUsuario(usuarioActual);
          } else {
            console.error("Usuario no encontrado");
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return <div>{usuario && <PerfilUsuarioDetalle usuario={usuario} />}</div>;
}

export default PerfilUsuario;
