import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {  BsGithub, BsInfoCircle } from "react-icons/bs";

function AboutVeille(props) {
    return (
      <Card className="project-card-view-veille">
        {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
        <Card.Body>
          <Card.Title style={{paddingBottom: "10px", fontWeight: 'bold', color:"#1baf91cd" }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
         

          {!props.isLink && props.ClickLnk && (
            <Button
              variant="primary"
              href={props.ClickLnk}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <BsInfoCircle/> &nbsp;
              {"En Savoir plus"}
            </Button>
          )}
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

        </Card.Body>
      </Card>
    );
  }
  export default AboutVeille;