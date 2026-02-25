// src/components/Admin/ExperiencesManager.jsx
import React, { useEffect, useState } from "react";
import {
  collection, addDoc, updateDoc, deleteDoc,
  doc, onSnapshot, query, orderBy,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import "./admin.css";

const EMPTY = { title: "", company: "", period: "", description: "", order: 0 };

export default function ExperiencesManager() {
  const [experiences, setExperiences] = useState([]);
  const [form, setForm]               = useState(EMPTY);
  const [editingId, setEditingId]     = useState(null);
  const [saving, setSaving]           = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast]             = useState(null);

  useEffect(() => {
    const q = query(collection(db, "experiences"), orderBy("order", "asc"));
    return onSnapshot(q, (snap) =>
      setExperiences(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, []);

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }

  function startEdit(exp) {
    setEditingId(exp.id);
    setForm({
      title:       exp.title || "",
      company:     exp.company || "",
      period:      exp.period || "",
      description: exp.description || "",
      order:       exp.order ?? 0,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() { setEditingId(null); setForm(EMPTY); }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    const data = {
      title:       form.title.trim(),
      company:     form.company.trim(),
      period:      form.period.trim(),
      description: form.description.trim(),
      order:       Number(form.order) || 0,
    };
    try {
      if (editingId) {
        await updateDoc(doc(db, "experiences", editingId), data);
        showToast("Expérience mise à jour ✓");
        setEditingId(null);
      } else {
        await addDoc(collection(db, "experiences"), data);
        showToast("Expérience ajoutée ✓");
      }
      setForm(EMPTY);
    } catch (err) {
      showToast("Erreur: " + err.message, "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteDoc(doc(db, "experiences", id));
      showToast("Expérience supprimée");
      setDeleteConfirm(null);
    } catch (err) {
      showToast("Erreur: " + err.message, "error");
    }
  }

  return (
    <div className="admin-page">
      {toast && <div className={`toast toast--${toast.type}`}>{toast.msg}</div>}

      <div className="page-header">
        <h1 className="page-title">◉ Expériences</h1>
        <span className="badge">{experiences.length} expériences</span>
      </div>

      {/* Formulaire */}
      <section className="form-card">
        <h2 className="form-title">
          {editingId ? "✎ Modifier l'expérience" : "+ Nouvelle expérience"}
        </h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Titre du poste *</label>
              <input className="field-input" value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Développeur Full Stack" required />
            </div>
            <div className="field-group">
              <label className="field-label">Entreprise *</label>
              <input className="field-input" value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme Corp" required />
            </div>
          </div>

          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Période</label>
              <input className="field-input" value={form.period}
                onChange={(e) => setForm({ ...form, period: e.target.value })}
                placeholder="Jan 2023 – Présent" />
            </div>
            <div className="field-group">
              <label className="field-label">Ordre d'affichage</label>
              <input type="number" className="field-input" value={form.order}
                onChange={(e) => setForm({ ...form, order: e.target.value })}
                min="0" placeholder="0" />
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Description</label>
            <textarea className="field-input field-textarea" rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Description des missions et réalisations..." />
          </div>

          <div className="form-actions">
            {editingId && (
              <button type="button" className="btn btn-ghost" onClick={cancelEdit}>Annuler</button>
            )}
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? "Enregistrement…" : editingId ? "Mettre à jour" : "Ajouter"}
            </button>
          </div>
        </form>
      </section>

      {/* Liste */}
      <section className="items-list">
        {experiences.length === 0 && (
          <div className="empty-state">Aucune expérience pour l'instant.</div>
        )}
        {experiences.map((exp) => (
          <div key={exp.id} className="item-card">
            <div className="item-content">
              <div className="item-title">{exp.title}</div>
              <div className="item-meta">
                <span className="item-company">{exp.company}</span>
                {exp.period && <span className="item-period"> · {exp.period}</span>}
              </div>
              <div className="item-desc">{exp.description}</div>
            </div>
            <div className="item-actions">
              <button className="btn btn-sm btn-edit" onClick={() => startEdit(exp)}>
                ✎ Modifier
              </button>
              {deleteConfirm === exp.id ? (
                <div className="confirm-row">
                  <span>Confirmer ?</span>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(exp.id)}>
                    Oui, supprimer
                  </button>
                  <button className="btn btn-sm btn-ghost" onClick={() => setDeleteConfirm(null)}>
                    Annuler
                  </button>
                </div>
              ) : (
                <button className="btn btn-sm btn-danger" onClick={() => setDeleteConfirm(exp.id)}>
                  ✕ Supprimer
                </button>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
