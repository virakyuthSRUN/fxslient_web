"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useTilt } from "@/hooks/useTilt";

const TG_ICON = (
  <svg className="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
  </svg>
);

const TIKTOK_ICON = (
  <svg className="glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.321 5.562a5.124 5.124 0 0 1-3.414-1.267 5.123 5.123 0 0 1-1.537-2.955h-3.168v12.84a2.944 2.944 0 0 1-2.943 2.942 2.944 2.944 0 0 1-2.944-2.942 2.944 2.944 0 0 1 2.944-2.943c.267 0 .527.036.773.104V8.057a6.137 6.137 0 0 0-.773-.049A6.133 6.133 0 0 0 2.126 14.18 6.133 6.133 0 0 0 8.259 20.312 6.133 6.133 0 0 0 14.391 14.18V8.95a8.26 8.26 0 0 0 4.93 1.619V7.4a5.1 5.1 0 0 1 0-1.838z" />
  </svg>
);

export default function Join() {
  const head = useReveal<HTMLDivElement>();
  const htj = useReveal<HTMLDivElement>();
  const pillars = useReveal<HTMLDivElement>();
  const doorsHead = useReveal<HTMLDivElement>();
  const doors = useReveal<HTMLDivElement>();

  return (
    <section id="join">
      <div ref={head.ref} className={`reveal${head.visible ? " in" : ""}`}>
        <div className="label">04 · Join the community</div>
        <h2 className="title">Three pillars. One <em>room.</em></h2>
        <p className="lede">
          fxsilentss isn&rsquo;t a signal dump — it&rsquo;s a trading room. You learn the method,
          see the analysis before the moves, and get the signals once the setup confirms.
          Here&rsquo;s exactly what you get inside.
        </p>
      </div>

      {/* How to join */}
      <div ref={htj.ref} className={`htj reveal${htj.visible ? " in" : ""}`}>
        <div className="htj-head">
          <span className="free-badge"><span className="dot" aria-hidden="true" />Free to join</span>
          <h3>Three steps to inside.</h3>
        </div>
        <ol className="htj-steps">
          <li className="glass spec">
            <span className="htj-n">01</span>
            <h4>Open a door</h4>
            <p>Tap any Telegram link below — community channel or my DM. Both land in the same place.</p>
          </li>
          <li className="glass spec">
            <span className="htj-n">02</span>
            <h4>Say hi</h4>
            <p>Send &ldquo;I&rsquo;d like to join the room.&rdquo; One line is enough; a bit about your trading helps.</p>
          </li>
          <li className="glass spec">
            <span className="htj-n">03</span>
            <h4>Get added</h4>
            <p>You&rsquo;re in within 24 hours (usually faster). Pinned welcome kit catches you up on day one.</p>
          </li>
        </ol>
      </div>

      {/* Three pillars */}
      <div ref={pillars.ref} className={`pillars reveal-stagger${pillars.visible ? " in" : ""}`}>
        <Pillar
          num="01" title="Learning"
          body="Structured ICT & MSNR walkthroughs, chart replays, weekend study sessions. Beginner-friendly, judgement-free. By month three you read your own charts."
          list={[
            "Live concept classes (BOS · CHoCH · FVG · OB)",
            "Chart-replay drills from my own trades",
            "Q&A — nothing's a dumb question",
          ]}
          glyph={
            <svg className="pillar-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 5h16v12H4z" strokeLinejoin="round" />
              <path d="M4 9h16M9 13h6" strokeLinecap="round" />
              <path d="M8 19v2M16 19v2" strokeLinecap="round" />
            </svg>
          }
        />
        <Pillar
          featured num="02" title="Analysis"
          body="Daily H4/H1 bias before London opens. Marked-up charts: kill-zones, liquidity, invalidations. Post-session reviews — win or lose, we study what the chart actually did."
          list={[
            "Pre-market bias notes (daily)",
            "Live kill-zone commentary",
            "End-of-week trade reviews",
          ]}
          glyph={
            <svg className="pillar-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M3 17 L8 12 L12 15 L17 8 L21 11" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="17" cy="8" r="1.6" fill="currentColor" />
              <path d="M3 21h18" strokeLinecap="round" />
            </svg>
          }
        />
        <Pillar
          num="03" title="Signals"
          body="HTF-aligned setups with entry, stop and 1:3+ target. Posted when they confirm, never earlier. No chasing, no FOMO, no gambler-grade &ldquo;100% accurate&rdquo; nonsense."
          list={[
            "XAUUSD entries with full plan",
            "Risk guidance per setup",
            "Honest hit-rate & monthly recap",
          ]}
          glyph={
            <svg className="pillar-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          }
        />
      </div>

      {/* Doors */}
      <div ref={doorsHead.ref} className={`doors-head reveal${doorsHead.visible ? " in" : ""}`}>
        <h3 className="sub-h">Where to find us</h3>
        <p className="sub-p">
          Three ways in. Public reads on TikTok, the private room on the community channel, or just DM me.
        </p>
      </div>

      <div ref={doors.ref} className={`doors reveal-stagger${doors.visible ? " in" : ""}`}>
        <Door
          platform="TikTok · Public"
          handle="fx__silent.ss"
          sub="Daily gold reads, live reactions, the setups I actually took — in short form."
          href="https://www.tiktok.com/@fx__silent.ss"
          copy="@fx__silent.ss"
          cta="Open TikTok →"
          icon={TIKTOK_ICON}
        />
        <Door
          platform="Telegram · Community"
          handle="Fxslientss"
          sub="The signals room — HTF bias, intraday levels, risk notes, chart walk-throughs."
          href="https://t.me/Fxslientss"
          copy="@Fxslientss"
          cta="Open Telegram →"
          icon={TG_ICON}
        />
        <Door
          platform="Telegram · DM"
          handle="eangdaraa"
          sub="Direct line. Questions on the method, mentorship, or just to say hi."
          href="https://t.me/eangdaraa"
          copy="@eangdaraa"
          cta="Open Telegram →"
          icon={TG_ICON}
        />
      </div>
    </section>
  );
}

function Pillar({
  num, title, body, list, glyph, featured,
}: {
  num: string; title: string; body: string; list: string[];
  glyph: React.ReactNode; featured?: boolean;
}) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <article ref={ref} className={`pillar glass spec${featured ? " featured" : ""}`}>
      <div className="pillar-head">
        <span className="pillar-num">{num}</span>
        {glyph}
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <ul className="pillar-list">
        {list.map((li) => <li key={li}>{li}</li>)}
      </ul>
    </article>
  );
}

function Door({
  platform, handle, sub, href, copy, cta, icon,
}: {
  platform: string; handle: string; sub: string; href: string;
  copy: string; cta: string; icon: React.ReactNode;
}) {
  const [flash, setFlash] = useState(false);

  const onCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(copy);
      } else {
        const ta = document.createElement("textarea");
        ta.value = copy;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setFlash(true);
      setTimeout(() => setFlash(false), 1400);
    } catch {
      /* ignore */
    }
  };

  return (
    <article className="door glass spec">
      <div className="top">
        <span className="platform">{platform}</span>
        {icon}
      </div>
      <div className="handle">
        <span className="at">@</span>{handle}
      </div>
      <p className="sub">{sub}</p>
      <div className="actions">
        <a className="btn primary" href={href} target="_blank" rel="noopener">{cta}</a>
        <button className="btn" type="button" onClick={onCopy}>Copy @</button>
      </div>
      <span className={`flash${flash ? " on" : ""}`}>Copied</span>
    </article>
  );
}
