// src/App.js — VERSION MISE À JOUR avec routes admin
// Remplacer le contenu de votre App.js existant par celui-ci.
// ⚠️  Adapter les imports des composants publics existants selon votre structure actuelle.

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// --- Contexte Auth ---
import { AuthProvider } from "./context/AuthContext";

// --- Admin ---
import Login           from "./components/Admin/Login";
import AdminLayout     from "./components/Admin/AdminLayout";
import Dashboard       from "./components/Admin/Dashboard";
import ProjectsManager from "./components/Admin/ProjectsManager";
import ExperiencesManager from "./components/Admin/ExperiencesManager";
import SkillsManager   from "./components/Admin/SkillsManager";
import CVManager       from "./components/Admin/CVManager";
import PrivateRoute    from "./components/Admin/PrivateRoute";

// --- Composants publics du portfolio (adapter selon votre App.js actuel) ---
// Exemple : import Home from "./components/Home/Home";
// Conservez ici tous vos imports/composants publics existants

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* ══════════════════════════════════
              ROUTES PUBLIQUES DU PORTFOLIO
              Remplacer par vos routes actuelles
          ══════════════════════════════════ */}
          <Route path="/" element={<div>Portfolio Public (vos composants existants)</div>} />

          {/* ══════════════════════════════════
              ROUTE DE CONNEXION ADMIN
          ══════════════════════════════════ */}
          <Route path="/admin/login" element={<Login />} />

          {/* ══════════════════════════════════
              ROUTES ADMIN PROTÉGÉES
          ══════════════════════════════════ */}
          <Route element={<PrivateRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin"           element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/projects"  element={<ProjectsManager />} />
              <Route path="/admin/experiences" element={<ExperiencesManager />} />
              <Route path="/admin/skills"    element={<SkillsManager />} />
              <Route path="/admin/cv"        element={<CVManager />} />
            </Route>
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
