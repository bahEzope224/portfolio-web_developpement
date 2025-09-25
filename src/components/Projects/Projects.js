import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jo2024 from "../../Assets/Projects/jo2024.png";
import etudePerfoBourse from "../../Assets/Projects/perfobourse.png";
import disneyPlus from "../../Assets/Projects/disneyplus.png";
import projetBiblio from "../../Assets/Projects/projet-biblo.png";
//import projetNoteCadrage from "../../Assets/Projects/projet-note-cadrage.png";
import QalamSoftware from "../../Assets/Projects/qalamsoftware.png";
import SiteSavenelec from "../../Assets/img-savenelec.png";






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
      {/*   <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetNoteCadrage}
              isBlog={false}
              title="Note de cadrage pour la refonte d'un parc informatique"
              description="Ce projet fictif à été réalisé en cours de formation du BTS SIO avec deux autres collègues dont je jouais le rôle de chef de projet. L'objectif principal de ce projet est de moderniser et d'optimiser le parc informatique de l'entreprise, en se focalisant sur les postes de travail, les imprimantes, et les outils de cybersécurité pour améliorer l'efficacité opérationnelle, la sécurité des données et à répondre aux besoins croissants des utilisateurs et automatiser la gestion du parc."
              BTdownload2="https://drive.google.com/file/d/1QPUOHnYWoHEQw_51a_Ia4y7J1hhB9WAK/view?usp=sharing"            
              />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={etudePerfoBourse}
              isBlog={false}
              title="Etude de performance boursière"
              description="Projet personnel en Python : récupération des données de prix d’actions via yfinance, calcul des rendements, volatilité, ratio de Sharpe, puis recommandation d’actions à fort potentiel selon ce ratio "
              BTdownload3="https://drive.google.com/file/d/15JpU9a72sNQJl1A3ZuARCuxq4iDifx5U/view?usp=sharing "
              demoLink ="https://drive.google.com/file/d/1AHISB25L8lWNCVpDHaxHxUtMArtLL5Gi/view?usp=sharing"
                          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disneyPlus}
              isBlog={false}
              title="Projet disneyplus"
              description="Projet réalisé en 1re année de BTS SIO : création d’une page d’accueil responsive inspirée de Disney+, mettant en avant ses contenus et fonctionnalités à travers une mise en page moderne et adaptable tous supports."
              ghLink="https://github.com/bahEzope224/projet-disney-plus"
              //demoLink="https://disneyplus-ibrahima.netlify.app/"
              BTdownload = "https://drive.google.com/file/d/1PAwM1ZzjIWvJz5kMrD9La2QsqarqIW5K/view?usp=sharing"
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SiteSavenelec}
              isBlog={false}
              title="Conception d’un site vitrine pour une entreprise d’électricité"
              description="Création d’un site web responsive sous WordPress pour présenter l’entreprise, ses services (installations, dépannages, mises aux normes) et faciliter la prise de contact. Design professionnel, optimisation SEO et intégration d’un formulaire de contact."
              // ghLink="https://github.com/bahEzope224/projet-disney-plus"
              demoLink="https://savenelec.fr"
              //BTdownload = "https://drive.google.com/file/d/1PAwM1ZzjIWvJz5kMrD9La2QsqarqIW5K/view?usp=sharing"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QalamSoftware}
              isBlog={false}
              title="Réfonte site Qalam Software"
              description="Refonte complète du site vitrine de Qalam Software durant mon stage de 1re année de BTS, afin de valoriser ses services, partenaires et projets. Ce projet m’a permis de mettre en pratique mes acquis et de découvrir le fonctionnement d’une entreprise IT."
              demoLink="https://qalamsoftware.fr/"
            />
          </Col> 

          <Col md={4} className="project-card">
            
            <ProjectCard
              imgPath={jo2024}
              isBlog={false}
              title="Epreuve E5 BTS SIO Projet JO-2024"
              description="rojet réalisé dans le cadre de l’épreuve E5 du BTS SIO : développement d’une application web permettant aux administrateurs de gérer les athlètes et aux utilisateurs de consulter les informations clés des JO 2024 (calendrier, résultats, lieux, sports). "
              //demoLink="https://jo-2024-ibrahima.free.nf/"
              ghLink="https://github.com/bahEzope224/jo-2024-bah-ibrahima"
              BTdownload = "https://drive.google.com/file/d/1afFgQcjmi2ehwlWWabGUQZFXQwAZYqHd/view?usp=sharing"
            />
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projetBiblio}
              isBlog={false}
              title="Epreuve E5 BTS SIO Bibliothèque"
              description="Développement d’un système automatisé de gestion des emprunts pour une bibliothèque municipale, permettant aux adhérents d’emprunter et retourner des livres en autonomie, tout en allégeant le travail des bibliothécaires."
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
