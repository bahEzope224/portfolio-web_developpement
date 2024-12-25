import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import VeilleTechno from "../../Assets/veille-technologique.png";
import JupyterImg from "../../Assets/jupyter.png";
import AboutVeille from "./AboutVeille";
// import {  ImPointRight } from "react-icons/im";




function JupyterPage() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            C'est quoi une <strong className="purple"> Veille Technologique</strong> ?
          </h1>
        </Row>
        <Row style={{ justifyContent: "center", alignItems: "center", marginRight: "100px" }}>
          <Col md={5} style={{ paddingTop: "30px", paddingBottom: "50px" }} className="text-center">
            <img src={VeilleTechno} alt="veille technolique" className="img-fluid" />
          </Col>
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }} className="text-center">
            <p>
              La <strong className="purple">veille technolique</strong> est un processus de <strong className="purple">surveillance</strong>, 
              de <strong className="purple">collecte</strong> et <strong className="purple">d'analyse</strong> en continue des dernières avancées, 
              tendances et innovations dans le domaine <strong className="purple">technologiques</strong>.
              Dans notre domaine, nous sommes constamment en train d'apprendre et de nous développer, et pour cela,
              nous devons nous immerger dans les <strong className="purple">communautés de développeurs</strong>.
              Ces communautés sont des <strong className="purple">mines d'or</strong> pour découvrir de <strong className="purple">nouveaux outils, langages</strong> et 
              <strong className="purple">bibliothèques</strong> qui
              peuvent grandement nous aider dans notre travail quotidien.
            </p>

          </Col>
        </Row>

        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <h1 className="project-heading">
            Sujet de la <strong className="purple">Veille Technologique</strong>
          </h1>
        </Row>

        <Row style={{ justifyContent: "center", alignItems: "center", padding: "10px", marginRight: "100px" }}>
          <Col md={5} style={{ paddingTop: "10px", paddingBottom: "30px" }} className="text-center">
            <img src={JupyterImg} alt="jupyter logo" className="img-fluid" />
          </Col>
          <Col md={7} style={{ paddingTop: "30px", paddingBottom: "50px" }} className="text-center">
            <p>
              Pour ma <strong className="purple">veille technologique</strong>, j'ai opté pour <strong className="purple">Jupyter Notebook</strong>,
              motivé par ma passion pour la manipulation de <strong className="purple">données</strong>. Cet outil polyvalent et interactif me permet d'explorer de
              <strong className="purple">nouvelles idées, de tester des solutions et d'analyser des données</strong>, le tout dans un seul environnement.
              Son support pour divers langages de programmation tels que <strong className="purple">Python</strong> et son intégration transparente avec des bibliothèques de
              visualisation en font un outil inestimable pour rester à la pointe
              des avancées <strong className="purple">technologiques</strong> dans le domaine de la programmation et de la manipulation de <strong className="purple">données</strong>.
            </p>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row style={{ justifyContent: "center", alignItems: "center", padding: "10px" }}>
          <h1 className="project-heading">
            Outils utilisés pour la <strong className="purple">Veille Technologique</strong>
          </h1>
        </Row>

        <p>Pour ma veille j'ai principalement utilisé des ressources en ligne telles que </p>
        <Row >
          <ul ressource-veille>
            <li className="ressource-veille-li">
              Google alerte
            </li>
            <li className="ressource-veille-li">
              Developpez.net
            </li>
            <li className="ressource-veille-li">
              Github
            </li>
            <li className="ressource-veille-li">
              inoreader.com
            </li>
            <li className="ressource-veille-li">
              reddit.com
            </li>
          </ul>
          
        </Row>
        <br></br>
        <br></br>
        <Row style={{ justifyContent: "center", alignItems: "center", padding: "10px" }}>
          <h3 className="project-heading">
            Dernière Actualité à propos de <strong className="purple">Jupyter Notebook</strong>
          </h3>
        </Row>

        <Row style={{ display: "flex", padding: "10px" }}>
          <Col className="project-card-veille  text-center">
            <AboutVeille
              isLink={false}
              title="Comment Jupyter Notebooks permet la recherche Open Source ?"
              description="Le nombre d'outils Open Source disponibles augmente rapidement, mais les obstacles techniques à l'entrée signifient qu'ils restent inaccessibles à de nombreux chercheurs. GitHub, une plateforme où les développeurs partagent et discutent de leur code, abrite bon nombre de ces outils."
              ClickLnk="https://www.bellingcat.com/resources/2024/03/06/how-code-notebooks-enable-open-source-research/"
              ghLink="https://github.com/bellingcat/open-source-research-notebooks"
            />
            
            <AboutVeille
              isLink={false}
              title="Jupyter AI apporte l'Intelligence Artificielle Générative aux notebooks"
              description="Jupyter AI, un nouvel outil du projet open-source Jupyter, offre des fonctionnalités d'intelligence artificielle générative. Avec des commandes magiques comme `%%ai` et une interface de chat appelée Jupyternaut, il permet aux utilisateurs de générer, expliquer et coder directement dans JupyterLab et les notebooks Jupyter. De plus, la commande `/generate` permet de créer des notebooks entiers à partir de prompts texte."
              ClickLnk="https://www.lemondeinformatique.fr/actualites/lire-cryptojacking-qubitstrike-cible-les-instances-jupyter-notebook-91938.html"
            />

            <AboutVeille
              isLink={false}
              title="Des pirates utilisent Discord pour le C&C afin d'exploiter les notebooks Jupyter et SSH."
              description="Les utilisateurs de Jupyter Notebook sur Internet sont visés par une campagne de cryptojacking nommée Qubit Strike, trouvée par Cado Security. Elle utilise les bots Discord pour créer une infrastructure C2 sophistiquée, permettant la gestion et la surveillance des nœuds infectés et du minage."
              ClickLnk="https://cybersecuritynews.com/hackers-use-discord-for-cc/"
            />
          </Col>
        </Row>

        <br></br>
        <br></br>

      </Container>
    </Container>
  );
}

export default JupyterPage;
