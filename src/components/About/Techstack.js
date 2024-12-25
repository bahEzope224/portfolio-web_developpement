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
  SiHtml5,
  SiCss3,
  SiJquery,
  SiBootstrap,
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
      <p className = "name_tech">HTML</p>
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">CSS</p>
        
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">PHP</p>
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Jquery</p>
        <SiJquery />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">bootstrap</p>
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">Python</p>
        
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className = "name_tech">java</p>
        <DiJava />
      </Col>
      
    </Row>
  );
}

export default Techstack;
