// src/components/Admin/SkillsManager.jsx
import React, { useEffect, useState } from "react";
import {
  collection, addDoc, deleteDoc,
  doc, onSnapshot, query, orderBy,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import "./admin.css";

const CATEGORIES = ["Frontend", "Backend", "DevOps", "Tools", "Autres"];
const EMPTY = { name: "", iconUrl: "", level: 3, category: "Frontend" };

export default function SkillsManager() {
  const [skills, setSkills]   = useState([]);
  const [form, setForm]       = useState(EMPTY);
  const [saving, setSaving]   = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast]     = useState(null);
  const [filter, setFilter]   = useState("Tous");

  useEffect(() => {
    const q = query(collection(db, "skills"), orderBy("name", "asc"));
    return onSnapshot(q, (snap) =>
      setSkills(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
  }, []);

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      await addDoc(collection(db, "skills"), {
        name:     form.name.trim(),
        iconUrl:  form.iconUrl.trim(),
        level:    Number(form.level),
        category: form.category,
      });
      showToast(`Compétence "${form.name}" ajoutée ✓`);
      setForm(EMPTY);
    } catch (err) {
      showToast("Erreur: " + err.message, "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id, name) {
    try {
      await deleteDoc(doc(db, "skills", id));
      showToast(`"${name}" supprimée`);
      setDeleteConfirm(null);
    } catch (err) {
      showToast("Erreur: " + err.message, "error");
    }
  }

  const filtered = filter === "Tous"
    ? skills
    : skills.filter((s) => s.category === filter);

  const allCategories = ["Tous", ...CATEGORIES];

  return (
    <div className="admin-page">
      {toast && <div className={`toast toast--${toast.type}`}>{toast.msg}</div>}

      <div className="page-header">
        <h1 className="page-title">◆ Compétences</h1>
        <span className="badge">{skills.length} compétences</span>
      </div>

      {/* Formulaire */}
      <section className="form-card">
        <h2 className="form-title">+ Nouvelle compétence</h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Nom *</label>
              <input className="field-input" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="React.js" required />
            </div>
            <div className="field-group">
              <label className="field-label">Catégorie</label>
              <select className="field-input field-select" value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="field-group">
              <label className="field-label">URL de l'icône / logo</label>
              <input className="field-input" value={form.iconUrl}
                onChange={(e) => setForm({ ...form, iconUrl: e.target.value })}
                placeholder="https://cdn.svgporn.com/logos/react.svg" />
            </div>
            <div className="field-group">
              <label className="field-label">Niveau (1 – 5)</label>
              <div className="level-row">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`level-dot ${Number(form.level) >= n ? "level-dot--active" : ""}`}
                    onClick={() => setForm({ ...form, level: n })}
                    title={`Niveau ${n}`}
                  />
                ))}
                <span className="level-label">Niveau {form.level}/5</span>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? "Ajout…" : "Ajouter la compétence"}
            </button>
          </div>
        </form>
      </section>

      {/* Filtres */}
      <div className="filter-tabs">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${filter === cat ? "filter-tab--active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
            {cat !== "Tous" && (
              <span className="filter-count">
                {skills.filter((s) => s.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grille de compétences */}
      <section className="skills-grid">
        {filtered.length === 0 && (
          <div className="empty-state">Aucune compétence dans cette catégorie.</div>
        )}
        {filtered.map((skill) => (
          <div key={skill.id} className="skill-card">
            {skill.iconUrl && (
              <img src={skill.iconUrl} alt={skill.name} className="skill-icon" />
            )}
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`level-pip ${skill.level >= n ? "level-pip--on" : ""}`}
                />
              ))}
            </div>
            <span className="skill-category">{skill.category}</span>

            {deleteConfirm === skill.id ? (
              <div className="confirm-inline">
                <button className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(skill.id, skill.name)}>
                  Confirmer
                </button>
                <button className="btn btn-sm btn-ghost"
                  onClick={() => setDeleteConfirm(null)}>
                  Annuler
                </button>
              </div>
            ) : (
              <button className="btn btn-sm btn-danger skill-delete"
                onClick={() => setDeleteConfirm(skill.id)}>
                ✕
              </button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
