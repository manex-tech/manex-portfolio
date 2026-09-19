"use client";
import { useState } from "react";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import type { PublicPhoto } from "../photos";

export default function PhotoManager({ initialPhotos }: { initialPhotos: PublicPhoto[] }) {
  const [items, setItems] = useState(initialPhotos); const [busy, setBusy] = useState(false); const [message, setMessage] = useState("");
  async function upload(formData: FormData) {
    setBusy(true); setMessage("");
    const response = await fetch("/api/photos", { method: "POST", body: formData });
    const data = await response.json().catch(() => ({})); setBusy(false);
    if (!response.ok) return setMessage(data.error || "The upload could not be completed.");
    setItems([data.photo, ...items]); setMessage("Published to your photo journal.");
    (document.getElementById("photo-form") as HTMLFormElement)?.reset();
  }
  async function remove(id: string) {
    if (!confirm("Remove this photograph from the journal?")) return;
    const response = await fetch(`/api/photos/${id}`, { method: "DELETE" });
    if (response.ok) setItems(items.filter((item) => item.id !== id)); else setMessage("Could not remove that photograph.");
  }
  return <div className="managerGrid"><form id="photo-form" className="uploadCard" action={upload}><ImagePlus size={28}/><h2>Add a photograph</h2><label>Image<input name="image" type="file" accept="image/jpeg,image/png,image/webp" required /></label><label>Caption<input name="caption" placeholder="Presenting Nexmesh at FUTB" maxLength={90} required /></label><label>Alternative text<input name="alt" placeholder="Manex speaking beside the Nexmesh presentation" maxLength={160} required /></label><label>Year<input name="year" defaultValue={new Date().getFullYear()} inputMode="numeric" pattern="[0-9]{4}" required /></label><button disabled={busy}>{busy ? <><Loader2 className="spin" size={17}/> Publishing…</> : "Publish photograph"}</button>{message && <output>{message}</output>}<small>JPEG, PNG or WebP · maximum 8 MB</small></form><section className="managedPhotos"><h2>Published <span>{items.length}</span></h2>{items.length ? items.map(photo => <article key={photo.id}><img src={`/api/photos/${photo.id}`} alt={photo.alt}/><div><strong>{photo.caption}</strong><span>{photo.year}</span></div><button onClick={() => remove(photo.id)} aria-label={`Remove ${photo.caption}`}><Trash2 size={17}/></button></article>) : <p className="noneYet">No photographs published yet.</p>}</section></div>;
}
