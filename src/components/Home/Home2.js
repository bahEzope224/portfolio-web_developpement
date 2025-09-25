import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Laissez <span className="purple">MOI</span> me présenter
            </h1>
            <p className="home-about-body">
              Je suis passionné par la manipulation de donnée et les nouvelles technologies liée a donnée et à l'intelligence artificiel. Je suis toujours en recherche de nouvelles
               <strong className="purple">OPPORTUNITES</strong> pour acquérir de nouvelles compétences et <strong className="purple">ENRICHIR</strong>
                mes connaisances;  
              <br />
              <br />Je suis très à l'aise avec les outils d'analyse de données comme
              <i>
                <b className="purple"> SQL, R, SAS, SQL et Python. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont les &nbsp;
              <i>
                <b className="purple">technologie liée a la fintech mais aussi</b>,
                 ceux liés à {" "}
                <b className="purple">
                la DATA, l'IA, les applications Web et la cybersécurité.
                </b>
              </i>
              <br />
              <br />
              Je maîtrise aussi quelques technologie comme <b className="purple">Power BI | DATAIKU | LOOKER | MongoBD</b>  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez moi sur</h1>
    
            <ul className="home-about-social-links">
            
              <li className="social-icons">
                <a
                  href="mailto:bahibrahima245857@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://github.com/bahEzope224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
              
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ibrahima-talib%C3%A9-bah-8215261b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <p>
                <br></br>
              Je serai <span className="purple">RAVI </span>de vous répondre
            </p>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;