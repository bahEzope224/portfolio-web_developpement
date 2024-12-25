import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiUbuntu,
  SiWordpress,
  SiLinux,
  SiGit,
  SiElementor,
  SiJupyter,
  SiTrello,
  SiPhpmyadmin,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Linux</p>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">VSC</p>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Ubuntu</p>

        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">WordPress</p>
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">GIT</p>

        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Elementor</p>

        <SiElementor />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Trello</p>

        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Jupyter</p>

        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">PhpMyadmin</p>

        <SiPhpmyadmin />
      </Col>
    </Row>
  );
}

export default Toolstack;
