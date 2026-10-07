"use client";

import { useReveal } from "@/hooks/useReveal";

export default function Footer() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <footer>
      <div ref={ref} className={`foot-inner glass spec reveal${visible ? " in" : ""}`}>
        <div>
          <div className="foot-brand">ꜰx || ꜱɪʟᴇɴᴛ.Ss</div>
          <div className="foot-mono">
            Eang Dara · Phnom Penh 🇰🇭 · XAUUSD · ICT / MSNR
          </div>
        </div>
        <div className="disclaimer">
          <strong>Risk disclosure.</strong> Trading leveraged instruments like gold carries
          substantial risk and may not be suitable for every investor. Past performance — mine or
          anyone else&rsquo;s — is not indicative of future results. Nothing here is financial advice.
          Trade your own account and your own risk.
        </div>
      </div>
    </footer>
  );
}
