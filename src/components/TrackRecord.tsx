"use client";

import { CERTS, FIRMS } from "@/data/certs";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { openLightbox } from "@/components/Lightbox";

export default function TrackRecord() {
  const head = useReveal<HTMLDivElement>();
  const nums = useReveal<HTMLDivElement>();
  const strip = useReveal<HTMLDivElement>();
  const grid = useReveal<HTMLDivElement>();
  const cta = useReveal<HTMLDivElement>();
  const open = openLightbox;

  const total = useCountUp({ target: 19671, group: true, active: nums.visible });
  const docs  = useCountUp({ target: 11, active: nums.visible });
  const firms = useCountUp({ target: 8, active: nums.visible });

  return (
    <section id="track">
      <div ref={head.ref} className={`reveal${head.visible ? " in" : ""}`}>
        <div className="label">01 · Track record</div>
        <h2 className="title">Receipts, not <em>pitches.</em></h2>
        <p className="lede">
          Eleven documents, eight prop firms, one name —{" "}
          <strong style={{ color: "var(--ink)" }}>Eang Dara</strong>.
          This is the method the community studies with me, trades alongside, and gets signals from.
          What you&rsquo;re about to see is what you&rsquo;re joining.
        </p>
      </div>

      <div
        ref={strip.ref}
        className={`firm-strip reveal-stagger${strip.visible ? " in" : ""}`}
      >
        {FIRMS.map((f) => (
          <span key={f} className="firm"><strong>{f}</strong></span>
        ))}
      </div>

      <div
        ref={grid.ref}
        className={`cert-grid reveal-stagger${grid.visible ? " in" : ""}`}
        id="certGrid"
      >
        {CERTS.map((c, i) => (
          <article
            key={c.img}
            className="cert-card glass spec"
            onClick={() => open(i)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") open(i); }}
            role="button"
            tabIndex={0}
          >
            <div className="cert-img-wrap">
              {/* raw img — these are already compressed and we want cover fill */}
              <img src={c.img} alt={`${c.firm} — ${c.sub}`} loading="lazy" />
            </div>
            <div className="cert-meta">
              <div className="cert-firm">
                {c.firm}
                <span className="cert-sub">{c.sub}</span>
              </div>
              <div className={`cert-amount${c.badge ? " badge" : ""}`}>{c.amount}</div>
            </div>
          </article>
        ))}
      </div>

      <div
        ref={nums.ref}
        className={`numbers-wrap reveal-stagger${nums.visible ? " in" : ""}`}
        style={{ marginTop: "56px" }}
      >
        <div className="big-figure glass-strong spec">
          <div>
            <div className="k">Total verified payouts</div>
            <div className="n">
              <span className="currency">$</span>
              {total}
              <span className="cents">.60</span>
            </div>
          </div>
          <p className="meta">
            Pulled from <strong>five settled withdrawals</strong> across The5ers, FundedNext,
            FTM and FundingPips. Six additional certified-funded badges don&rsquo;t publish an
            amount — the receipts above.
          </p>
        </div>
        <div className="nums-side">
          <div className="nums-tile glass spec">
            <div className="k">Documents on file</div>
            <div>
              <div className="n">{docs}</div>
              <div className="sub">payouts &amp; achievement certs</div>
            </div>
          </div>
          <div className="nums-tile glass spec">
            <div className="k">Firms represented</div>
            <div>
              <div className="n">{firms}</div>
              <div className="sub">
                The5ers · FTM · FundedNext · FundingPips · Alpha Capital · Alpha Futures · MFF · TFT
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={cta.ref}
        className={`section-cta reveal${cta.visible ? " in" : ""}`}
      >
        <div className="glass spec">
          <div>
            <div className="section-cta-k">Ready to trade with the room?</div>
            <div className="section-cta-h">
              Join <em>fxsilentss</em> — learning, analysis, signals.
            </div>
          </div>
          <a className="btn primary lg" href="#join">Open the doors →</a>
        </div>
      </div>
    </section>
  );
}
