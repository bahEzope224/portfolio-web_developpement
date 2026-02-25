// src/components/Admin/ProjectsManager.jsx
import React, { useEffect, useState } from "react";
import {
  collection, addDoc, updateDoc, deleteDoc,
  doc, onSnapshot, serverTimestamp, query, orderBy,
} from "firebase/firestore";
import {
  ref, uploadBytesResumable, getDownloadURL, deleteObject,
} from "firebase/storage";
import { db, storage } from "../../firebase/config";
import "./admin.css";

const EMPTY_FORM = {
  title: "", description: "", link: "", imageUrl: "",
  technologies: "", imageStoragePath: "",
};

export default function ProjectsManager() {
  const [projects, setProjects]       = useState([]);
  const [form, setForm]               = useState(EMPTY_FORM);
  const [editingId, setEditingId]     = useState(null);
  const [uploading, setUploading]     = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [saving, setSaving]           = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast]             = useState(null);

  // Abonnement temps réel Firestore
  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setProjects(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }

  function startEdit(project) {
    setEditingId(project.id);
    setForm({
      title:            project.title || "",
      description:      project.description || "",
      link:             project.link || "",
      imageUrl:         project.imageUrl || "",
      technologies:     (project.technologies || []).join(", "),
      imageStoragePath: project.imageStoragePath || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm(EMPTY_FORM);
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const path = `projects/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, path);
    const task = uploadBytesResumable(storageRef, file);
    task.on(
      "state_changed",
      (snap) => setUploadProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100)),
      (err) => { showToast("Erreur upload: " + err.message, "error"); setUploading(false); },
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        setForm((f) => ({ ...f, imageUrl: url, imageStoragePath: path }));
        setUploading(false);
        setUploadProgress(0);
      }
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    const data = {
      title:            form.title.trim(),
      description:      form.description.trim(),
      link:             form.link.trim(),
      imageUrl:         form.imageUrl,
      imageStoragePath: form.imageStoragePath,
      technologies:     form.technologies.split(",").map((t) => t.trim()).filter(Boolean),
    };
    try {
      if (editingId) {
        await updateDoc(doc(db, "projects", editingId), data);
        showToast("Projet mis à jour ✓");
        setEditingId(null);
      } else {
        await addDoc(collection(db, "projects"), { ...data, createdAt: serverTimestamp() });
        showToast("Projet ajouté ✓");
      }
      setForm(EMPTY_FORM);
    } catch (err) {
      showToast("Erreur: " + err.message, "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(project) {
    try {
      // Supprimer l'image dans Storage si elle existe
      if (project.imageStoragePath) {
        await deleteObject(ref(storage, project.imageStoragePath)).catch(() => {});
      }
      await deleteDoc(doc(db, "projects", project.id));
      showToast("Projet supprimé");
      setDeleteConfirm(null);
    } catch (err) {
      showToast("Erreur suppression: " + err.message, "error");
    }
  }

  return (
    <div className="admin-page">
      {toast && <div className={`toast toast--${toast.type}`}>{toast.msg}</div>}

      <div className="page-header">
        <h1 className="page-title">◈ Projets</h1>
        <span className="badge">{projects.length} projets</span>
      </div>

      {/* ── Formulaire ── */}
      <section className="form-card">
        <h2 className="form-title">
          {editingId ? "✎ Modifier le projet" : "+ Nouveau projet"}
        </h2>
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-row">
            <div className="field-group">
              <label className="field-label">Titre *</label>
              <input className="field-input" value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Mon super projet" required />
            </div>
            <div className="field-group">
              <label className="field-label">Lien (URL)</label>
              <input className="field-input" value={form.link}
                onChange={(e) => setForm({ ...form, link: e.target.value })}
                placeholder="https://github.com/..." />
            </div>
          </div>

          <div className="field-group">
            <label className="field-label">Description</label>
            <textarea className="field-input field-textarea" rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Description du projet..." />
          </div>

          <div className="field-group">
            <label className="field-label">Technologies (séparées par des virgules)</label>
            <input className="field-input" value={form.technologies}
              onChange={(e) => setForm({ ...form, technologies: e.target.value })}
              placeholder="React, Node.js, MongoDB" />
          </div>

          <div className="field-group">
            <label className="field-label">Image du projet</label>
            {form.imageUrl && (
              <img src={form.imageUrl} alt="aperçu" className="image-preview" />
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload}
              className="file-input" disabled={uploading} />
            {uploading && (
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${uploadProgress}%` }} />
              </div>
            )}
          </div>

          <div className="form-actions">
            {editingId && (
              <button type="button" className="btn btn-ghost" onClick={cancelEdit}>
                Annuler
              </button>
            )}
            <button type="submit" className="btn btn-primary" disabled={saving || uploading}>
              {saving ? "Enregistrement…" : editingId ? "Mettre à jour" : "Ajouter le projet"}
            </button>
          </div>
        </form>
      </section>

      {/* ── Liste ── */}
      <section className="items-list">
        {projects.length === 0 && (
          <div className="empty-state">Aucun projet pour l'instant.</div>
        )}
        {projects.map((project) => (
          <div key={project.id} className="item-card">
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} className="item-thumb" />
            )}
            <div className="item-content">
              <div className="item-title">{project.title}</div>
              <div className="item-desc">{project.description}</div>
              {project.technologies?.length > 0 && (
                <div className="tech-tags">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="item-link">↗ Voir le projet</a>
              )}
            </div>
            <div className="item-actions">
              <button className="btn btn-sm btn-edit" onClick={() => startEdit(project)}>
                ✎ Modifier
              </button>
              {deleteConfirm === project.id ? (
                <div className="confirm-row">
                  <span>Confirmer ?</span>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(project)}>
                    Oui, supprimer
                  </button>
                  <button className="btn btn-sm btn-ghost" onClick={() => setDeleteConfirm(null)}>
                    Annuler
                  </button>
                </div>
              ) : (
                <button className="btn btn-sm btn-danger" onClick={() => setDeleteConfirm(project.id)}>
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
