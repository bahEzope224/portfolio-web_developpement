// src/components/Admin/PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/**
 * Protège toutes les routes enfants.
 * Si l'utilisateur n'est pas connecté → redirection vers /admin/login
 */
export default function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
