import React, { useEffect, useState } from "react";
import "./Avatar.css";

const Avatar = () => {
  const [avatarLinks, setAvatarLinks] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    const fetchAvatarLinks = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/usuario/listaimagen"
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de avatares");
        }

        const data = await response.json();
        setAvatarLinks(data);
      } catch (error) {
        console.error("Error al obtener los enlaces de los avatares:", error);
      }
    };

    fetchAvatarLinks();
  }, []);

  const handleAvatarClick = (index) => {
    console.log(index);
    // Manejar el clic en una imagen
    setSelectedAvatar(avatarLinks[index]);
  };

  useEffect(() => {
    if (selectedAvatar) localStorage.setItem("avatar", selectedAvatar);
  }, [selectedAvatar]);

  return (
    <div className="avatar-container">
      <h1 className="avatar-title">Selecciona tu avatar</h1>
      <div className="avatar-list">
        {avatarLinks.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className={`avatar-image ${
              selectedAvatar === avatar ? "selected" : ""
            }`}
            role="button"
            onClick={() => handleAvatarClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Avatar;
