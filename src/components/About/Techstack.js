import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiPhp,
  SiR,
  SiSass,
  SiJupyter,
  SiPandas,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">React</p>
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">R</p>
        <SiR />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">SAS</p>
        
        <SiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">PHP</p>
        <SiPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Jupyter</p>
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Python</p>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Pandas</p>
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">java</p>
        <DiJava />
      </Col>
      
    </Row>
  );
}

export default Techstack;
