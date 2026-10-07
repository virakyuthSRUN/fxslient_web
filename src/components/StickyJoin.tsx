"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyJoin() {
  const [show, setShow] = useState(false);
  const heroVisible = useRef(true);
  const joinVisible = useRef(false);
  const isMobile = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    const sync = () => { isMobile.current = mq.matches; recompute(); };
    sync();
    mq.addEventListener?.("change", sync);

    const hero = document.querySelector(".hero");
    const join = document.getElementById("join");
    if (!hero || !join) return;

    const recompute = () => {
      if (!isMobile.current) { setShow(false); return; }
      setShow(!heroVisible.current && !joinVisible.current);
    };

    const io1 = new IntersectionObserver(
      (es) => { es.forEach((e) => { heroVisible.current = e.isIntersecting; }); recompute(); },
      { threshold: 0.1 }
    );
    const io2 = new IntersectionObserver(
      (es) => { es.forEach((e) => { joinVisible.current = e.isIntersecting; }); recompute(); },
      { threshold: 0.1 }
    );
    io1.observe(hero);
    io2.observe(join);

    return () => {
      mq.removeEventListener?.("change", sync);
      io1.disconnect();
      io2.disconnect();
    };
  }, []);

  return (
    <aside className={`sticky-join${show ? " show" : ""}`} aria-label="Join on Telegram">
      <div className="lhs">
        <span className="pill">Free</span>
        <span className="lbl">Join the room on Telegram</span>
      </div>
      <a href="https://t.me/Fxslientss" target="_blank" rel="noopener">Join →</a>
    </aside>
  );
}
