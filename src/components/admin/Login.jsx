// src/components/Admin/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./admin.css";

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [shake, setShake]       = useState(false);
  const { login, currentUser }  = useAuth();
  const navigate                = useNavigate();

  // Si déjà connecté, rediriger directement
  useEffect(() => {
    if (currentUser) navigate("/admin/dashboard");
  }, [currentUser, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      switch (err.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
        case "auth/user-not-found":
          setError("Identifiants incorrects.");
          break;
        case "auth/too-many-requests":
          setError("Trop de tentatives. Réessayez plus tard.");
          break;
        default:
          setError("Erreur de connexion. Vérifiez votre configuration Firebase.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-screen">
      {/* Grille décorative en arrière-plan */}
      <div className="login-grid" aria-hidden="true" />

      <div className={`login-card ${shake ? "shake" : ""}`}>
        {/* Header */}
        <div className="login-header">
          <div className="login-dot-row">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="login-terminal-label">admin@portfolio ~ </span>
        </div>

        {/* Corps */}
        <div className="login-body">
          <div className="login-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="2" y="2" width="36" height="36" rx="8"
                stroke="var(--admin-accent)" strokeWidth="2" />
              <path d="M13 20h14M20 13v14" stroke="var(--admin-accent)"
                strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="login-title">Espace Admin</h1>
          <p className="login-subtitle">Connexion sécurisée — accès restreint</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="field-group">
              <label htmlFor="email" className="field-label">
                Identifiant (email)
              </label>
              <input
                id="email"
                type="email"
                className="field-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                autoComplete="username"
              />
            </div>

            <div className="field-group">
              <label htmlFor="password" className="field-label">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                className="field-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="login-error" role="alert">
                <span className="error-icon">⚠</span> {error}
              </div>
            )}

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="btn-spinner" />
              ) : (
                "→ Se connecter"
              )}
            </button>
          </form>
        </div>

        <div className="login-footer">
          <span className="blink">█</span> Système sécurisé — accès admin uniquement
        </div>
      </div>
    </div>
  );
}
