import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <Card.Body>
  <blockquote className="blockquote mb-0">

    <h1>Parcours : <strong className="purple">BTS SIO</strong> vers <strong className="purple">Licence Professionnelle Data Mining & Statistique Décisionnelle</strong></h1>
    <br />

    <p style={{ textAlign: "justify" }}>
      Après l’obtention de mon <strong className="purple">BTS Services Informatiques aux Organisations (option SLAM)</strong>, 
      j’ai choisi de me réorienter en <strong className="purple">Licence Professionnelle Data Mining & Statistique Décisionnelle</strong> 
      afin d’approfondir mes compétences en <strong className="purple">analyse de données</strong> et de me spécialiser 
      dans le domaine de la <strong className="purple">Big Data</strong>.
      <br /><br />
      Cette formation me permet de développer des compétences avancées en <strong className="purple">statistique appliquée</strong>, 
      <strong className="purple">programmation (Python, R, SQL)</strong>, 
      <strong className="purple">data mining</strong> et <strong className="purple">visualisation de données</strong>, 
      dans le but de résoudre des problématiques réelles d’aide à la décision.
      <br /><br />
      Je suis actuellement à la recherche :
      <ul>
        <li>d’une <strong className="purple">alternance</strong> en <strong className="purple">data analyse</strong> (rythme : 3 jours en entreprise / 2 jours à l’université),</li>
        <li>ou d’un <strong className="purple">stage de 2 mois minimum à partir de juin</strong>,</li>
        <li>ou d’un <strong className="purple">stage alterné</strong> dès maintenant.</li>
      </ul>
      Mon objectif est de mettre à profit mes compétences en <strong className="purple">Big Data </strong> 
      et en <strong className="purple">analyse statistique</strong> au sein d’une entreprise innovante.
    </p>

  </blockquote>
</Card.Body>


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
