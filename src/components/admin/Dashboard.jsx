// src/components/Admin/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../context/AuthContext";
import "./admin.css";

const STATS_CONFIG = [
  { label: "Projets",      collection: "projects",    to: "/admin/projects",    icon: "◈", color: "var(--admin-accent)" },
  { label: "Expériences",  collection: "experiences", to: "/admin/experiences", icon: "◉", color: "#7ee8a2" },
  { label: "Compétences",  collection: "skills",      to: "/admin/skills",      icon: "◆", color: "#f7b731" },
];

const QUICK_LINKS = [
  { to: "/admin/projects",    label: "+ Nouveau projet",      color: "var(--admin-accent)" },
  { to: "/admin/experiences", label: "+ Nouvelle expérience", color: "#7ee8a2" },
  { to: "/admin/skills",      label: "+ Nouvelle compétence", color: "#f7b731" },
  { to: "/admin/cv",          label: "↑ Mettre à jour le CV", color: "#e056fd" },
];

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [counts, setCounts] = useState({});

  useEffect(() => {
    async function fetchCounts() {
      const results = {};
      for (const stat of STATS_CONFIG) {
        try {
          const snap = await getCountFromServer(collection(db, stat.collection));
          results[stat.collection] = snap.data().count;
        } catch {
          results[stat.collection] = "—";
        }
      }
      setCounts(results);
    }
    fetchCounts();
  }, []);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir";

  return (
    <div className="admin-page">
      {/* En-tête */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            {greeting} 👋
          </h1>
          <p className="page-subtitle">
            Connecté en tant que <strong>{currentUser?.email}</strong>
          </p>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          ↗ Voir le portfolio public
        </a>
      </div>

      {/* Statistiques */}
      <section className="stats-grid">
        {STATS_CONFIG.map(({ label, collection: col, to, icon, color }) => (
          <Link to={to} key={col} className="stat-card" style={{ "--card-accent": color }}>
            <div className="stat-icon">{icon}</div>
            <div className="stat-count">{counts[col] ?? "…"}</div>
            <div className="stat-label">{label}</div>
            <div className="stat-arrow">→</div>
          </Link>
        ))}
      </section>

      {/* Actions rapides */}
      <section className="quick-actions">
        <h2 className="section-title">Actions rapides</h2>
        <div className="quick-grid">
          {QUICK_LINKS.map(({ to, label, color }) => (
            <Link
              to={to}
              key={to}
              className="quick-btn"
              style={{ "--btn-color": color }}
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* Info setup */}
      <div className="info-banner">
        <span className="info-icon">ℹ</span>
        <span>
          Les modifications effectuées ici sont <strong>sauvegardées en temps réel</strong> dans
          Firestore et reflétées immédiatement sur le portfolio public.
        </span>
      </div>
    </div>
  );
}
