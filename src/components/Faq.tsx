"use client";

import { useReveal } from "@/hooks/useReveal";

const FAQ_ITEMS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Is the community free?",
    a: <p>Yes. The main Telegram room — bias, analysis, and signals — is free to join. There&rsquo;s no hidden tier, no &ldquo;VIP&rdquo; upsell, no course to buy. If that ever changes, you&rsquo;ll know.</p>,
  },
  {
    q: "Do I need prior trading experience?",
    a: <p>No. The pinned welcome kit covers the basics (candles, structure, timeframes). If you&rsquo;ve opened a chart before, you&rsquo;ll follow along. If you haven&rsquo;t, the first two weeks are enough to catch up — and the room is judgement-free about questions.</p>,
  },
  {
    q: "What timezone are the signals in?",
    a: <p>I trade the <strong>London → New York</strong> overlap most days. In Phnom Penh time that&rsquo;s roughly 2 PM to 11 PM. Setups are tagged with the kill-zone they&rsquo;re from so you know whether to wake up for one.</p>,
  },
  {
    q: "English or Khmer?",
    a: <p>Mostly English — ICT terminology is English by nature. Khmer gets used in Q&amp;A and side-chat whenever it&rsquo;s clearer. Nobody&rsquo;s gatekept for language.</p>,
  },
  {
    q: "What's a realistic win rate? What should I risk?",
    a: <p>No &ldquo;95% accuracy&rdquo; nonsense. Target is <strong>1:3+ reward-risk</strong> which means we can be wrong often and still be profitable. I share monthly recaps with the actual numbers — wins and losses. Risk-per-trade should be yours alone; I don&rsquo;t tell anyone a specific percentage.</p>,
  },
  {
    q: "What happens after I DM you?",
    a: <p>I reply within a day (usually sooner, Phnom Penh hours). You get added to the room, pointed at the pinned welcome kit, and that&rsquo;s it — no onboarding call, no sales script. Lurk as long as you want before posting.</p>,
  },
];

export default function Faq() {
  const head = useReveal<HTMLDivElement>();
  const list = useReveal<HTMLDivElement>();

  return (
    <section id="faq">
      <div ref={head.ref} className={`reveal${head.visible ? " in" : ""}`}>
        <div className="label">03 · Before you ask</div>
        <h2 className="title">The usual <em>questions.</em></h2>
        <p className="lede">
          Honest answers to what people ask me first. If something&rsquo;s missing, DM me on Telegram.
        </p>
      </div>

      <div ref={list.ref} className={`faq reveal-stagger${list.visible ? " in" : ""}`}>
        {FAQ_ITEMS.map((item) => (
          <details key={item.q} className="faq-item glass">
            <summary>
              <span className="q">{item.q}</span>
              <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="a">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
