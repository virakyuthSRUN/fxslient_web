"use client";

import { useReveal } from "@/hooks/useReveal";
import { useTilt } from "@/hooks/useTilt";

const CONCEPTS = [
  "BOS", "CHoCH", "FVG", "Order Block",
  "Equal Highs", "PD Array", "Asian Range",
  "Silver Bullet", "OTE", "Kill Zone",
];

export default function Method() {
  const head = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  const strip = useReveal<HTMLDivElement>();
  const rule = useReveal<HTMLDivElement>();

  return (
    <section id="method">
      <div ref={head.ref} className={`reveal${head.visible ? " in" : ""}`}>
        <div className="label">02 · What you&rsquo;ll learn</div>
        <h2 className="title">Four reads. One <em>entry.</em></h2>
        <p className="lede">
          Inside the community we walk through all four — on real charts, live where possible,
          replayed when not. ICT concepts over MSNR scaffolding. If any of the four fails, there&rsquo;s
          no trade. That one habit alone changes most traders&rsquo; accounts.
        </p>
      </div>

      <div ref={grid.ref} className={`process reveal-stagger${grid.visible ? " in" : ""}`}>
        <Step idx="a — bias" title="Market Structure" body="H4 and H1 draw the narrative. Break of structure, change of character — direction decides itself before kill-zone opens.">
          <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M4 32 L14 26 L22 29 L30 20 L40 14" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="14" cy="26" r="1.6" fill="currentColor"/>
            <circle cx="30" cy="20" r="1.6" fill="currentColor"/>
            <circle cx="40" cy="14" r="1.6" fill="currentColor"/>
          </svg>
        </Step>
        <Step idx="b — liquidity" title="Liquidity Pools" body="Equal highs, trendline stops, Asian range extremes. Price pays those bills first — I wait for the sweep, then the reversal.">
          <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="4" y1="14" x2="40" y2="14" strokeDasharray="3 3"/>
            <path d="M4 24 L12 20 L18 14 L26 8 L30 18 L36 26 L40 22" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="26" cy="8" r="2.4" strokeWidth="1.6"/>
          </svg>
        </Step>
        <Step idx="c — zones" title="Supply & Demand" body="Fresh order blocks, imbalance (FVG), untested range. If price returns to the zone with intent — long or short, we're in.">
          <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="4" y="18" width="36" height="8" opacity="0.35" fill="currentColor" stroke="none"/>
            <path d="M4 12 L14 16 L22 22 L28 20 L36 26 L40 22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Step>
        <Step idx="d — execution" title="Execution" body="M1 confirmation. CHoCH inside the zone, defined invalidation, 1:3 minimum. If the trade isn't there — no trade.">
          <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="6"  y="18" width="4" height="10"/>
            <line x1="8" y1="14" x2="8" y2="32"/>
            <rect x="14" y="14" width="4" height="14"/>
            <line x1="16" y1="10" x2="16" y2="34"/>
            <rect x="22" y="10" width="4" height="18"/>
            <line x1="24" y1="6"  x2="24" y2="30"/>
            <line x1="30" y1="12" x2="40" y2="12" strokeDasharray="3 3"/>
          </svg>
        </Step>
      </div>

      <div ref={strip.ref} className={`concepts glass reveal${strip.visible ? " in" : ""}`}>
        <span className="lbl">concepts I use —</span>
        {CONCEPTS.map((c, i) => (
          <span key={c} style={{ display: "contents" }}>
            <span>{c}</span>
            {i < CONCEPTS.length - 1 && <span>·</span>}
          </span>
        ))}
      </div>

      {/* Rule 0 — when NOT to trade */}
      <article ref={rule.ref} className={`rule-card glass-strong spec reveal${rule.visible ? " in" : ""}`}>
        <div className="rule-left">
          <span className="rule-idx">Rule 0</span>
          <h3>When <em>not</em> to trade.</h3>
        </div>
        <ul className="rule-list">
          <li><span>×</span> No HTF bias — the chart hasn&rsquo;t told you yet, don&rsquo;t guess</li>
          <li><span>×</span> Inside the London / NY open spike — wait for the sweep</li>
          <li><span>×</span> Setup needs you to squint — if you&rsquo;d skip it on a replay, skip it live</li>
          <li><span>×</span> After two losses in a session — close the terminal, review tomorrow</li>
          <li><span>×</span> News window ±15 min — spreads widen, structure lies</li>
        </ul>
      </article>
    </section>
  );
}

function Step({
  idx, title, body, children,
}: { idx: string; title: string; body: string; children: React.ReactNode }) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <article ref={ref} className="step glass spec">
      <span className="idx">{idx}</span>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="glyph">{children}</div>
    </article>
  );
}
