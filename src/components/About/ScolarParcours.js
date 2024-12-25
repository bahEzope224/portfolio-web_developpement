import React from "react";
import Card from "react-bootstrap/Card";


function ScolarParcours() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

            <h1>C'est quoi le <strong className="purple">BTS SIO</strong></h1>
            <br />

            <p style={{ textAlign: "justify" }}>
            Le BTS <span className="yellow">Services informatiques aux Organisations</span>,
            permet d’apprendre à exploiter des <strong className="purple">données</strong>, enseigne les bases de la <strong className="purple">programmation </strong>, du développement <strong className="purple"> d’applications </strong>et apporte des enseignements sur le fonctionnement d’une <strong className="purple">entreprise. </strong>
            <br />
            <br />
            Le <strong className="purple"> BTS SIO </strong>apporte des compétences dans le support et la mise à disposition de services informatiques, ainsi qu’en cybersécurité. À la fin du premier semestre, il propose deux options (<strong className="purple">SISR et SLAM </strong>) qui délivrent chacune une compétence supplémentaire : <strong className="purple">l’administration des systèmes et des réseaux (SISR) </strong> ou <strong className="purple">la conception et le développement d'applications (SLAM). </strong>

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ScolarParcours;
