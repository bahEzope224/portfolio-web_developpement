import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScolarParcours from "./ScolarParcours";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui <strong className="purple">SUIS-JE?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>

          <ScolarParcours/>
        </Row>
        <br />
        <br />
        <h1 className="project-heading">
          Compétences <strong className="purple">TECHNIQUES </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Technologies </strong>que j'utilise
        </h1>
        <Toolstack />

        <br></br>
        <br></br>

      </Container>
    </Container>
  );
}

export default About;
