"use client";
import { useEffect, useRef } from "react";

/**
 * Attaches a pointer-driven 3D tilt to an element.
 * Respects reduced-motion and only runs on fine pointer devices.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(enabled = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia?.("(pointer: fine)").matches;
    if (reduced || !fine) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      const rx = (0.5 - y) * 6;
      const ry = (x - 0.5) * 6;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translateY(-4px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  return ref;
}
