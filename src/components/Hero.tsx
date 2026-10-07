"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import { useCountUp } from "@/hooks/useCountUp";

const TICKER = [
  { k: "XAUUSDs",  v: "4,284.76",      extra: "+0.24%", cls: "up" },
  { k: "BIAS",     v: "BULLISH · H4" },
  { k: "SESSION",  v: "LDN → NY" },
  { k: "BUY LIMIT", v: "4,278.40" },
  { k: "PAYOUTS",  v: "$19,671.60" },
  { k: "FIRMS",    v: "8" },
  { k: "TARGET",   v: "1:3 MIN" },
];

export default function Hero() {
  const stats = useReveal<HTMLDivElement>();
  const ticker = useReveal<HTMLDivElement>();

  return (
    <section className="hero">
      <div className="hero-top">
        <div>
          <span className="hero-chip glass-xs">
            <span className="pulse" aria-hidden="true" />
            XAUUSD · ICT · MSNR · PHNOM&nbsp;PENH
          </span>

          <h1 className="brand-title">
            ꜰx<span className="pipes">||</span>
            <span className="silent">ꜱɪʟᴇɴᴛ</span>.Ss
          </h1>

          <p className="brand-tag">
            A quiet way to trade gold — and a community built around it.{" "}
            <strong>Learning, analysis, and signals</strong> for traders who want the method,
            not the theatre.
          </p>

          <div className="hero-ctas">
            <a className="btn primary lg" href="#join">
              Join the community →
            </a>
            <a className="btn lg" href="#track">
              See the receipts
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <span className="caption">
            <span className="dot" aria-hidden="true" />
            The Trader
          </span>
          <div className="plate">
            <Image
              src="/images/portrait.webp"
              alt="Eang Dara — portrait"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectFit: "cover", objectPosition: "62% center" }}
            />
          </div>
          <div className="name-tag">
            <div className="n">Eang Dara</div>
            <span className="r">Founder of ꜰx || ꜱɪʟᴇɴᴛ.Ss</span>
          </div>
        </figure>
      </div>

      <div
        ref={stats.ref}
        className={`hero-stats reveal-stagger${stats.visible ? " in" : ""}`}
      >
        <Stat k="Verified payouts" target={19671} prefix="$" suffix="+" active={stats.visible} group />
        <Stat k="Prop firms"       target={8}     suffix="firms" active={stats.visible} />
        <Stat k="Documents"        target={11}    suffix="certs" active={stats.visible} />
        <Stat k="Years trading"    target={5}     suffix="yrs+"  active={stats.visible} />
      </div>

      <div
        ref={ticker.ref}
        className={`ticker glass-xs reveal${ticker.visible ? " in" : ""}`}
        aria-hidden="true"
      >
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span className="ticker-item">
                <span className="k">{t.k}</span>
                <span className="v">{t.v}</span>
                {t.extra && <span className={t.cls}>{t.extra}</span>}
              </span>
              <span className="ticker-dot" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  k, target, prefix = "", suffix, active, group,
}: {
  k: string; target: number; prefix?: string; suffix: string; active: boolean; group?: boolean;
}) {
  const n = useCountUp({ target, group, active });
  return (
    <div className="stat glass spec">
      <div className="stat-k">{k}</div>
      <div className="stat-v">
        {prefix}
        {n}
        <span className="unit">{suffix}</span>
      </div>
    </div>
  );
}
