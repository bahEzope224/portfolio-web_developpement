import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Etudiant en Programmation web",
          "Freelancer",
          "Développeur Fullstack",
          "Développeur Python",
          "Passionné d'OSINT",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;