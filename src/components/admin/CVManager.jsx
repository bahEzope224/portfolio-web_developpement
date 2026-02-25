// src/components/Admin/CVManager.jsx
import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, deleteField, updateDoc } from "firebase/firestore";
import {
  ref, uploadBytesResumable, getDownloadURL, deleteObject,
} from "firebase/storage";
import { db, storage } from "../../firebase/config";
import "./admin.css";

const CV_DOC_REF = () => doc(db, "settings", "cv");

export default function CVManager() {
  const [currentCV, setCurrentCV]       = useState(null);
  const [uploading, setUploading]       = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [toast, setToast]               = useState(null);
  const [loading, setLoading]           = useState(true);

  useEffect(() => {
    async function fetchCV() {
      try {
        const snap = await getDoc(CV_DOC_REF());
        if (snap.exists()) setCurrentCV(snap.data());
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCV();
  }, []);

  function showToast(msg, type = "success") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      showToast("Seuls les fichiers PDF sont acceptés.", "error");
      return;
    }

    setUploading(true);

    // Supprimer l'ancien CV dans Storage si existant
    if (currentCV?.storagePath) {
      await deleteObject(ref(storage, currentCV.storagePath)).catch(() => {});
    }

    const path = `cv/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, path);
    const task = uploadBytesResumable(storageRef, file);

    task.on(
      "state_changed",
      (snap) => setUploadProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100)),
      (err) => {
        showToast("Erreur upload: " + err.message, "error");
        setUploading(false);
      },
      async () => {
        const downloadUrl = await getDownloadURL(task.snapshot.ref);
        const data = {
          fileName:    file.name,
          downloadUrl,
          storagePath: path,
          uploadedAt:  new Date().toISOString(),
        };
        await setDoc(CV_DOC_REF(), data);
        setCurrentCV(data);
        setUploading(false);
        setUploadProgress(0);
        showToast("CV mis à jour ✓");
      }
    );
  }

  async function handleDelete() {
    try {
      if (currentCV?.storagePath) {
        await deleteObject(ref(storage, currentCV.storagePath)).catch(() => {});
      }
      await updateDoc(CV_DOC_REF(), {
        fileName: deleteField(),
        downloadUrl: deleteField(),
        storagePath: deleteField(),
        uploadedAt: deleteField(),
      });
      setCurrentCV(null);
      setDeleteConfirm(false);
      showToast("CV supprimé");
    } catch (err) {
      showToast("Erreur: " + err.message, "error");
    }
  }

  return (
    <div className="admin-page">
      {toast && <div className={`toast toast--${toast.type}`}>{toast.msg}</div>}

      <div className="page-header">
        <h1 className="page-title">◻ Gestion du CV</h1>
      </div>

      {/* CV actuel */}
      <section className="form-card">
        <h2 className="form-title">CV en ligne</h2>

        {loading ? (
          <div className="loading-text">Chargement…</div>
        ) : currentCV?.downloadUrl ? (
          <div className="cv-current">
            <div className="cv-info">
              <div className="cv-icon">📄</div>
              <div>
                <div className="cv-filename">{currentCV.fileName}</div>
                <div className="cv-meta">
                  Mis à jour le{" "}
                  {currentCV.uploadedAt
                    ? new Date(currentCV.uploadedAt).toLocaleDateString("fr-FR", {
                        day: "2-digit", month: "long", year: "numeric",
                      })
                    : "—"}
                </div>
              </div>
            </div>
            <div className="cv-actions">
              <a
                href={currentCV.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                ↗ Prévisualiser
              </a>
              {deleteConfirm ? (
                <div className="confirm-row">
                  <span>Supprimer le CV ?</span>
                  <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                    Oui, supprimer
                  </button>
                  <button className="btn btn-ghost btn-sm" onClick={() => setDeleteConfirm(false)}>
                    Annuler
                  </button>
                </div>
              ) : (
                <button className="btn btn-danger btn-sm" onClick={() => setDeleteConfirm(true)}>
                  ✕ Supprimer
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="cv-empty">
            <div className="cv-icon">📂</div>
            <p>Aucun CV en ligne pour le moment.</p>
          </div>
        )}
      </section>

      {/* Upload */}
      <section className="form-card">
        <h2 className="form-title">
          {currentCV?.downloadUrl ? "↑ Remplacer le CV" : "↑ Uploader un CV"}
        </h2>
        <div className="upload-zone">
          <input
            type="file"
            accept=".pdf,application/pdf"
            id="cv-upload"
            className="upload-input"
            onChange={handleUpload}
            disabled={uploading}
          />
          <label htmlFor="cv-upload" className={`upload-label ${uploading ? "uploading" : ""}`}>
            {uploading ? (
              <>
                <span className="upload-icon">⏳</span>
                <span>Upload en cours… {uploadProgress}%</span>
              </>
            ) : (
              <>
                <span className="upload-icon">📤</span>
                <span>Cliquer pour sélectionner un fichier PDF</span>
                <span className="upload-hint">PDF uniquement — taille max recommandée : 5 Mo</span>
              </>
            )}
          </label>

          {uploading && (
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${uploadProgress}%` }} />
            </div>
          )}
        </div>

        <div className="info-banner" style={{ marginTop: "16px" }}>
          <span className="info-icon">ℹ</span>
          <span>
            Le CV est accessible publiquement via une URL Firebase Storage. 
            La route <code>/admin/cv</code> met à jour automatiquement le lien de téléchargement 
            affiché sur le portfolio.
          </span>
        </div>
      </section>
    </div>
  );
}
