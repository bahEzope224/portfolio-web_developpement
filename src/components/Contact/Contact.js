import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import Particle from "../Particle";

function Contact() {
    return (
        <section>
            <Container>
                {/* <Particle /> */}
                <Container>
                    <Row className="justify-content-center" style={{marginTop:"200px"}}>
                        <iframe
                            title="Formulaire de contact"
                            src="https://docs.google.com/forms/d/e/1FAIpQLSexjBtGQ2EPN_0gMO7zE99uiA7f2WuXp7OguMb2XgUu2Snflw/viewform?embedded=false"
                            width="640"
                            height="876"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                        >
                            Chargement…
                        </iframe>
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
          </ul>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Contact;
