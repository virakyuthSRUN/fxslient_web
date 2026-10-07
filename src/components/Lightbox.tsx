"use client";

import { useEffect, useSyncExternalStore } from "react";
import { CERTS } from "@/data/certs";

/* ─────── Module-level store (works across sibling components) ─────── */
let currentIndex: number | null = null;
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => { listeners.add(fn); return () => listeners.delete(fn); };
const notify = () => listeners.forEach((l) => l());

export function openLightbox(i: number) {
  currentIndex = i;
  if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  notify();
}
export function closeLightbox() {
  currentIndex = null;
  if (typeof document !== "undefined") document.body.style.overflow = "";
  notify();
}

/* Hook — stable across SSR/CSR via useSyncExternalStore */
export function useLightbox() {
  const index = useSyncExternalStore(
    subscribe,
    () => currentIndex,
    () => null, // SSR snapshot
  );
  return { index, open: openLightbox, close: closeLightbox };
}

/* ─────── The dialog UI ─────── */
export default function Lightbox() {
  const { index, close } = useLightbox();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  const cert = index != null ? CERTS[index] : null;

  return (
    <div
      className={`lightbox${cert ? " on" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate viewer"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <button className="close" aria-label="Close" onClick={close}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      {cert && <img src={cert.img} alt={`${cert.firm} — ${cert.sub}`} />}
      {cert && (
        <div className="cap">
          {cert.firm}  ·  {cert.sub}  ·  {cert.amount}
        </div>
      )}
    </div>
  );
}
