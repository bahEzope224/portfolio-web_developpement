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
  SiDataiku,
  SiPowerbi,
  SiLooker,
  SiMysql,
  SiMongodb,
  SiKibana,
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
      <p className = "name_tech">Dataiku</p>
        <SiDataiku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">GIT</p>

        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">PowerBI</p>

        <SiPowerbi />
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
      <p className = "name_tech">Looker</p>

        <SiLooker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">MySQL</p>

        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">MongoDB</p>

        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Kibana</p>

        <SiKibana />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
