import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
    Bonjour, Je suis <span className="yellow">Ibrahima BAH</span>, <br />
    <br />
    J'ai obtenu mon <strong className="purple">BTS SIO</strong> (Services informatiques aux Organisations) option <strong className="purple">SLAM</strong> (Solutions Logicielles et Applications Métiers).
    <br />
    Je suis actuellement en recherche d'alternance pour un <strong className="purple">bac+3</strong> en <strong className="purple">programmation web et application</strong> pour la rentrée 2025.
    <br />
    J'ai également obtenu un <strong className="purple">baccalauréat général</strong> avec les spécialités <strong className="purple">Physique-Chimie</strong> et <strong className="purple">Numérique et Sciences de l'informatique</strong>.
    <br />
    <br />
    Mise à part la programmation, voici d'autres activités que j'adore faire :
</p>

          <ul>
          <li className="about-activity">
              <ImPointRight /> OSINT (Open Source INTelligence)
            </li>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéos
            </li>
            <li className="about-activity">
              <ImPointRight /> Lecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Intelligence Artificiel
            </li>
            <li className="about-activity">
              <ImPointRight /> Cinéma
            </li>
          </ul>

          <p style={{ color: "#1baf91cd" }}> <i>"Le seul moyen de faire du bon travail est d'aimer ce que vous faites."{" "}</i>
            
          </p>
          <footer className="blockquote-footer"><strong>Steve Jobs</strong></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
