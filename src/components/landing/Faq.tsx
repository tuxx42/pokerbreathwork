"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is this just meditation?",
    a: "No. Meditation is one tool among many, and most meditation practices don't transfer to high-pressure in-game moments. This program uses somatic regulation — working directly with your body's stress response — which is faster and more reliable under acute pressure.",
  },
  {
    q: "I've tried mindset coaches before and it didn't work.",
    a: "Most mindset work operates at the level of thoughts. The problem is that when your nervous system activates, the thinking brain loses priority. This program addresses the physiology first — so you can actually access clear thinking when it matters.",
  },
  {
    q: "How long until I see results?",
    a: "Most players notice changes in their in-game response within the first few weeks. Deep pattern-level changes take longer. The program is designed to build lasting capacity, not just temporary relief.",
  },
  {
    q: "Is this available online?",
    a: "Yes. Sessions are conducted online, in English or German.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is discussed during your application call. Spots are limited to ensure program quality.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <span className="label">FAQ</span>
      <h2>Common questions</h2>

      <div className="faq-list">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className={`faq-arrow${isOpen ? " open" : ""}`}>›</span>
              </button>
              <div className={`faq-answer${isOpen ? " open" : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
