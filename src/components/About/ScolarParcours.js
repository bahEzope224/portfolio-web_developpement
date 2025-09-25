import React from "react";
import Card from "react-bootstrap/Card";


function ScolarParcours() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
  <blockquote className="blockquote mb-0">

    <h1>La <strong className="purple">Licence Professionnelle Data Mining & Statistique Décisionnelle</strong></h1>
    <br />

    <p style={{ textAlign: "justify" }}>
      Cette formation forme des spécialistes capables d’exploiter et de valoriser de larges volumes de 
      <strong className="purple"> données</strong> pour aider à la prise de décision.  
      Elle combine l’apprentissage des méthodes de <strong className="purple">statistique appliquée</strong>, 
      de <strong className="purple">data mining</strong> (exploration et analyse de données), 
      ainsi que des bases solides en <strong className="purple">programmation</strong> 
      et en <strong className="purple">gestion de bases de données</strong>.
      <br /><br />
      La formation met également l’accent sur la <strong className="purple">visualisation de données</strong>, 
      la <strong className="purple">modélisation prédictive</strong> et l’utilisation d’outils 
      professionnels comme R, Python ou SQL.  
      Elle prépare à des métiers tels que <strong className="purple">data analyst</strong>,  
      <strong className="purple"> statisticien décisionnel</strong> ou 
      <strong className="purple"> consultant en business intelligence</strong>, 
      en développant des compétences directement opérationnelles pour les secteurs de la finance, du marketing, 
      de l’industrie ou des services.
    </p>

  </blockquote>
</Card.Body>

    </Card>
  );
}

export default ScolarParcours;
