"use client";
import { useEffect, useRef, useState } from "react";

type Opts = { target: number; group?: boolean; active: boolean };

export function useCountUp({ target, group, active }: Opts) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const reduced = typeof window !== "undefined"
      && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setValue(target); return; }

    const dur = Math.min(1600, 400 + target * 0.03);
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 5);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return group ? value.toLocaleString("en-US") : String(value);
}
