// src/components/Admin/AdminLayout.jsx
import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./admin.css";

const NAV_ITEMS = [
  { to: "/admin/dashboard",    label: "Vue d'ensemble", icon: "⊞" },
  { to: "/admin/projects",     label: "Projets",        icon: "◈" },
  { to: "/admin/experiences",  label: "Expériences",    icon: "◉" },
  { to: "/admin/skills",       label: "Compétences",    icon: "◆" },
  { to: "/admin/cv",           label: "CV",             icon: "◻" },
];

export default function AdminLayout() {
  const { logout, currentUser } = useAuth();
  const navigate                = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  async function handleLogout() {
    await logout();
    navigate("/admin/login");
  }

  return (
    <div className={`admin-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      {/* ── Sidebar ── */}
      <aside className="admin-sidebar">
        <div className="sidebar-top">
          <div className="sidebar-brand">
            {!collapsed && <span className="brand-text">Portfolio<em>Admin</em></span>}
            <button
              className="sidebar-toggle"
              onClick={() => setCollapsed(!collapsed)}
              title={collapsed ? "Étendre" : "Réduire"}
            >
              {collapsed ? "›" : "‹"}
            </button>
          </div>

          <nav className="sidebar-nav">
            {NAV_ITEMS.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "nav-item--active" : ""}`
                }
                title={collapsed ? label : undefined}
              >
                <span className="nav-icon">{icon}</span>
                {!collapsed && <span className="nav-label">{label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="sidebar-bottom">
          {!collapsed && (
            <div className="admin-info">
              <span className="admin-email">{currentUser?.email}</span>
            </div>
          )}
          <button className="logout-btn" onClick={handleLogout} title="Déconnexion">
            <span className="nav-icon">⏻</span>
            {!collapsed && <span>Déconnexion</span>}
          </button>
        </div>
      </aside>

      {/* ── Contenu principal ── */}
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
