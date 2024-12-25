import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{paddingBottom: "10px", fontWeight: 'bold',color:"#1baf91cd" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {!props.isLink && props.ghLink && (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsGithub/> &nbsp;
              {"Github"}
            </Button>
          )}
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
            {"CDC"}
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
            {"télecharger la note"}
          </Button>
        )}
        {"\n"}
        {"\n"}

{
  !props.isLink && props.BTdownload3 &&(
    <Button variant="primary"
    href={props.BTdownload3}
    target="_blank"
    style={{marginLeft: "10px"}}
      >
<BsDownload /> &nbsp;
{"fichier Jupyter"}
    </Button> 
  )
}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

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
export default ProjectCards;
