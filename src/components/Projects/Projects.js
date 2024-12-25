import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jo2024 from "../../Assets/Projects/jo2024.png";
import etudePerfoBourse from "../../Assets/Projects/perfobourse.png";
import disneyPlus from "../../Assets/Projects/disneyplus.png";
import projetBiblio from "../../Assets/Projects/projet-biblo.png";
import projetNoteCadrage from "../../Assets/Projects/projet-note-cadrage.png";
import QalamSoftware from "../../Assets/Projects/qalamsoftware.png";






function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
          Quelques projets sur lesqueles j'ai travaillé récemment

        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetNoteCadrage}
              isBlog={false}
              title="Note de cadrage pour la refonte d'un parc informatique"
              description="Ce projet fictif à été réalisé en cours de formation du BTS SIO avec deux autres collègues dont je jouais le rôle de chef de projet. L'objectif principal de ce projet est de moderniser et d'optimiser le parc informatique de l'entreprise, en se focalisant sur les postes de travail, les imprimantes, et les outils de cybersécurité pour améliorer l'efficacité opérationnelle, la sécurité des données et à répondre aux besoins croissants des utilisateurs et automatiser la gestion du parc."
              BTdownload2="https://drive.google.com/file/d/1QPUOHnYWoHEQw_51a_Ia4y7J1hhB9WAK/view?usp=sharing"            
              />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etudePerfoBourse}
              isBlog={false}
              title="Etude de performance boursière"
              description="Ce projet a été fait dans le cadre personnel, le programme Python récupère les données de prix des actions de certaines entreprises sur les 5 dernières années à l'aide de la bibliothèque yfinance. Ensuite, il effectue une analyse des actions en calculant les rendements journaliers, la volatilité annualisée, le rendement cumulé, le rendement annualisé et le ratio de Sharpe. Finalement, il recommande les actions à investir en se basant sur le ratio de Sharpe. "
              BTdownload3="https://drive.google.com/file/d/15JpU9a72sNQJl1A3ZuARCuxq4iDifx5U/view?usp=sharing "
              demoLink ="https://drive.google.com/file/d/1AHISB25L8lWNCVpDHaxHxUtMArtLL5Gi/view?usp=sharing"
                          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disneyPlus}
              isBlog={false}
              title="Projet disneyplus"
              description="Ce projet a été mené dans le cadre de ma première année de BTS Services Informatiques aux Organisations (SIO). L'objectif était de reproduire la page d'accueil du service de streaming Disney+ en utilisant les langages HTML/CSS et JavaScript. Cette page présente une mise en page moderne et adaptable, convenant aux ordinateurs, tablettes et smartphones. Elle comprend plusieurs sections mettant en avant les points forts de Disney+, tels que ses contenus exclusifs, sa compatibilité avec différents appareils et ses fonctionnalités."
              ghLink="https://github.com/bahEzope224/projet-disney-plus"
              demoLink="https://disneyplus-ibrahima.netlify.app/"
              BTdownload = "https://drive.google.com/file/d/1PAwM1ZzjIWvJz5kMrD9La2QsqarqIW5K/view?usp=sharing"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QalamSoftware}
              isBlog={false}
              title="Réfonte site Qalam Software"
              description="Réfonte complète du site de l'entreprise Qalam Software avec WordPress et Elementor dans le  cadre de mon stage de premère année de BTS  afin de présenter de manière efficace et attractive ses services, ses partenaires et ses projets réalisés. Ce stage a constitué une étape importante de ma formation, me permettant d'appliquer les connaissances théoriques acquises en classe et de découvrir le fonctionnement concret d'une entreprise évoluant dans le domaine des technologies de l'informatique"
              demoLink="https://qalamsoftware.fr/"
            />
          </Col> 

          <Col md={4} className="project-card">
            
            <ProjectCard
              imgPath={jo2024}
              isBlog={false}
              title="Epreuve E5 BTS SIO Projet JO-2024"
              description="Ce projet a été réalisée dans le cadre de l'épreuve E5 de l'examen du BTS SIO. Ce projet est une application web complète pour les Jeux Olympiques de 2024. L'application web permet de gerer les athlètes par les administrateurs et fournit aux utilisateurs des informations détaillées sur les JO, telles que le calendrier des événements, les résultats passés, les détails des lieux et des sports. De la gestion interne à la consultation externe, cette application offre une plateforme centrale pour suivre les Jeux Olympiques de 2024. "
              demoLink="https://jo-2024-ibrahima.free.nf/"
              ghLink="https://github.com/bahEzope224/jo-2024-bah-ibrahima"
              BTdownload = "https://drive.google.com/file/d/1afFgQcjmi2ehwlWWabGUQZFXQwAZYqHd/view?usp=sharing"
            />
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetBiblio}
              isBlog={false}
              title="Epreuve E5 BTS SIO Bibliothèque"
              description="Ce projet a été réalisé dans le cadre de l'épreuve E5 pour l'obtention de mon diplôme de BTS (Brevet de Technicien Supérieur). Il consiste à automatiser le processus de gestion des emprunts à la bibliothèque municipale. L'objectif principal de ce projet est de concevoir et de développer un système de gestion automatisée permettant aux adhérents de la bibliothèque municipale d'emprunter et de retourner des livres de manière autonome, tout en facilitant le travail des bibliothécaires."
              ghLink="https://github.com/bahEzope224/Projet-java-E5"
              BTdownload="https://drive.google.com/file/d/191ZNhjpq0kT7S6TKdDmEZk3gK6DXHlOJ/view?usp=sharing"            
              />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
            imgPath = {projetTesla}   
            isBlog =  {false}
            title = "Analyse E-reputation de Tesla"
            description = "Le projet visait à analyser l'E-réputation de Tesla dans le cadre de ma formation du BTS SIO réalisé en groupe. Nous avons collecté des données en ligne, analysé les opinions et les sentiments des consommateurs, puis formulé des recommandations pour améliorer la stratégie de communication en ligne de l'entreprise. Ce projet nous a permis de développer nos compétences en analyse de données et en gestion de réputation en ligne, tout en offrant des perspectives précieuses sur l'impact de la perception publique sur une entreprise."
            demoLink="https://drive.google.com/file/d/18ChhkiWBf5kolvTKZ6QCwT00EtqjY27I/view?usp=sharing"
            />
                     
          </Col> */}
         
        </Row>
       <p className="cdc"> *CDC = Cahier Des Charges </p>
      </Container>
    </Container>
  );
}

export default Projects;
