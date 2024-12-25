import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InterCard from "./InternCard";
import Particle from "../Particle";
import StagePremierAnnee from "../../Assets/Projects/qalamsoftware.png";
import StageDeuxiemeAnnee from "../../Assets/Projects/qalamsoftware.png";
// import Tableau_de_synthese from "./tableauSynthese";





function Intern() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes  <strong className="purple">Expéricences</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <InterCard
              imgPath={StagePremierAnnee}
              isBlog={false}
              title="Stage première année BTS SIO"
              description="Stage de validation de la première année de BTS SIO, effectué entièrement à distance : L'objectif principal était de développer la présence en ligne de l'organisation en présentant l'entreprise, les services proposés et ses partenaires, à travers une refonte complète de leurs site à l'epoque."
              BTdownload="https://drive.google.com/file/d/1HtQrp-AcvV1HsK5neT0k8iPwp0QX59kK/view?usp=sharing"
            />
          </Col>


          <Col md={4} className="project-card">
            <InterCard
              imgPath={StageDeuxiemeAnnee}
              isBlog={false}
              title="Stage deuxième année BTS SIO"
              description="Stage de validation de la deuxième année de BTS SIO, effectué intégralement en distanciel : Le projet avait pour objectif d'améliorer le site conçu lors du précédent stage, visant à accroître son attractivité et à introduire de nouvelles fonctionnalités."
              BTdownload="https://drive.google.com/file/d/1XiV9_sxdZCmdDfbGv0iBoD2vDKmE-ugb/view?usp=sharing"
            />
            
          </Col>
         
        </Row>

        {/* <Tableau_de_synthese /> */}

      </Container>
    </Container>
  );
}

export default Intern;
