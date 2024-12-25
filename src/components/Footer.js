import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,

  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaLock } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Crée par Ibrahima Bah  avec react </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} IB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/bahEzope224/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:bahibrahima245857@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ibrahima-talib%C3%A9-bah-8215261b9/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href='./privacy'
                style={{ color: "white" }}
                rel="noopener noreferrer"
              >
                <FaLock />
                <span style={{marginLeft: "5px"}}>Politique de Confidentialité</span>
                
                
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
