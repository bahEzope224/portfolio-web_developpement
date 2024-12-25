import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import JupyterPage from "./components/Veille/JupyterPage";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Stages from "./components/Internship/intern";
import Contact from "./components/Contact/Contact";
import Privacy from "./components/privacy"
import CookieConsent from "react-cookie-consent";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/veille" element={<JupyterPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experiences" element={<Stages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <CookieConsent
           location="bottom"
           cookieName="cookieConsent"
           style={{ background: "#333" }}
           buttonStyle={{ color: "#fff", fontSize: "13px" }}
           declineButtonStyle={{ color: "#fff", fontSize: "13px" }}
           buttonText="Accepter"
           declineButtonText="Refuser"
           expires={1}
         >
           Ce site utilise des cookies pour améliorer votre expérience.{" "}
           <span style={{ fontSize: "10px" }}>
             Pour en savoir plus, consultez <a href="/privacy">notre politique de confidentialité</a>.
           </span>
        </CookieConsent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
