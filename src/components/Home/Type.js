import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Etudiant en Data Mining",
          "Développeur Python",
          "Développeur R",
          "Développeur SQL",
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