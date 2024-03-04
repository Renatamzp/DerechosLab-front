import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Acerca de DerechosLab</h1>
      <h2 className="about-subtitle">Nuestra Misión</h2>
      <p className="about-text">
        DerechosLab se compromete a proporcionar información precisa y accesible
        sobre los derechos laborales. Nuestra misión es empoderar a los
        trabajadores brindándoles el conocimiento necesario para enfrentar
        situaciones laborales con confianza.
      </p>
      <h2 className="about-subtitle">Nuestro Equipo</h2>
      <div className="team-cards">
        <div className="team-card" id="AdolfoCard">
          <img
            className="team-member-photo"
            src="src/assets/img/Adolfopic.png"
            alt="Adolfo"
          />
          <h3 className="team-member-name">Adolfo Hermosilla</h3>
          <p className="team-member-role">
            Scrum Master <br /> Desarrollador
          </p>
          <div class="linksAdolfo">
            <a
              href="https://github.com/AdolfoHR"
              target="_blank"
              rel="GitHub Adolfo"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adolfohram%C3%ADrez/"
              target="_blank"
              rel="Linkedin Adolfo"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="team-card" id="RenataCard">
          <img
            className="team-member-photo"
            src="src/assets/img/Renatapic.png"
            alt="Renata"
          />
          <h3 className="team-member-name">Renata</h3>
          <p className="team-member-role">
            Product Owner <br /> Desarrollador
          </p>
          <div class="linksAdolfo">
            <a
              href="https://github.com/Renatamzp"
              target="_blank"
              rel="GitHub Renata"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/renatazambrano"
              target="_blank"
              rel="Linkedin Renata"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="team-card" id="NicolasCard">
          <img
            className="team-member-photo"
            src="src/assets/img/Nicolaspic.png"
            alt="Nicolas"
          />
          <h3 className="team-member-name">Nicolás</h3>
          <p className="team-member-role">Desarrollador FullStack</p>
          <div class="linksAdolfo">
            <a
              href="https://github.com/nicobritob"
              target="_blank"
              rel="GitHub Nicolas"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolasbritob/"
              target="_blank"
              rel="Linkedin Nicolas"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
