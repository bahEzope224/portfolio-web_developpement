import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";


function InterCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ paddingBottom: "10px", fontWeight: 'bold', color: "#1baf91cd" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}

        {!props.isLink && props.BTdownload && (
          <Button
            variant="primary"
            href={props.BTdownload}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsDownload /> &nbsp;
            {"Rapport de stage"}
          </Button>
        )}


        {"\n"}
        {"\n"}


        {!props.isLink && props.BTdownload2 && (
          <Button
            variant="primary"
            href={props.BTdownload2}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsDownload /> &nbsp;
            {"Tableau de synthèse"}
          </Button>
        )}

        {"\n"}
        {"\n"}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default InterCard;
