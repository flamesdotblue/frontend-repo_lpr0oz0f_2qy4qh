import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const skills = [
  'Product Design',
  'Design Systems',
  'User Research',
  'Micro-Interactions',
  'Visual Design',
  'Front-End Handoff',
  'Prototyping',
  'Branding',
  'UX Strategy',
  'Accessibility',
];

export default function ProfileAndContact() {
  const prefersReducedMotion = useReducedMotion();
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <>
      {/* Skills + UFO */}
      <section aria-labelledby="skills-title" className="bg-[#FFF9F0] text-[#162035]">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-24">
          <div className="text-center">
            <img src="/assets/ufo.svg" alt="UFO illustration" className="mx-auto w-10 h-10" />
            <h2 id="skills-title" className="mt-3 font-serif text-[clamp(28px,4.2vw,44px)] leading-[1.05]">What I bring to the table</h2>
          </div>
          <div className="relative mt-10">
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              {!prefersReducedMotion && (
                <style>{`
                  @keyframes float { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-8px);} }
                `}</style>
              )}
            </div>
            <div className={`mx-auto w-fit ${prefersReducedMotion ? '' : 'animate-[float_6s_ease-in-out_infinite]'}`}>
              <img src="/assets/ufo.svg" alt="Hovering UFO" className="w-20 h-20" />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12, filter: 'blur(3px)' }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.6, 0.2, 1] }}
                  className="px-3.5 py-2 rounded-full bg-white border border-[#EDE8DE] text-[#0B2D7A] shadow-sm hover:brightness-110 hover:-rotate-1 transition will-change-transform"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behind the canvas */}
      <section id="about" aria-labelledby="behind-title" className="relative">
        <div className="absolute inset-0 bg-[#0F1B2E]" aria-hidden />
        <div className="relative max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-24 text-white">
          <h2 id="behind-title" className="font-serif text-[clamp(28px,4.2vw,44px)] leading-[1.05] text-white">Behind the canvas</h2>
          <p className="mt-4 max-w-2xl text-[#c7d0df] leading-relaxed">
            I design experiences that merge clarity and character. My process blends systems thinking with obsessive craft so teams can scale design without losing soul.
          </p>
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.6, 0.2, 1] }}
            className="mt-10 flex justify-center"
          >
            <div className="relative">
              <img
                src="/assets/profile-kathan.jpg"
                alt="Portrait of Kathan Thaker"
                className="w-[60vw] max-w-[420px] aspect-[9/16] object-cover rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute -inset-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent" aria-hidden />
            </div>
          </motion.div>
          <div className="mt-8 text-center">
            <a href="#personal" className="inline-flex items-center rounded-full px-5 py-3 border border-white/20 text-white/90 hover:text-white hover:bg-white/5 transition">See the full story</a>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section aria-label="Brands" className="bg-[#FFF9F0] text-[#162035]">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="flex items-center justify-center gap-10 sm:gap-16 opacity-60">
            <img src="/assets/brand-1.svg" alt="Brand 1" className="h-8 sm:h-10 transition-all hover:opacity-100 hover:-translate-y-0.5" />
            <img src="/assets/brand-2.svg" alt="Brand 2" className="h-8 sm:h-10 transition-all hover:opacity-100 hover:-translate-y-0.5" />
          </div>
        </div>
      </section>

      {/* Contact + Footer */}
      <section id="contact" aria-labelledby="contact-title" className="bg-[#FFF9F0] text-[#162035]">
        <div className="max-w-[820px] mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-24">
          <div className="text-center">
            <h2 id="contact-title" className="font-serif text-[clamp(28px,4.2vw,44px)] leading-[1.05]">Ready to build something amazing?</h2>
            <p className="mt-3 text-[#46526B]">I’d love to connect with you.</p>
          </div>

          {sent && (
            <div role="status" aria-live="polite" className="mt-6 mb-2 rounded-xl bg-white border border-[#EDE8DE] p-3 text-sm text-[#0B2D7A] shadow-sm">
              Thanks! Your message has been sent.
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input id="name" required placeholder="Name" className="w-full rounded-xl border border-[#EDE8DE] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2D7A]" />
            </div>
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" required type="email" placeholder="Email" className="w-full rounded-xl border border-[#EDE8DE] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2D7A]" />
            </div>
            <div>
              <label className="sr-only" htmlFor="website">Website (optional)</label>
              <input id="website" placeholder="Website (optional)" className="w-full rounded-xl border border-[#EDE8DE] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2D7A]" />
            </div>
            <div>
              <label className="sr-only" htmlFor="project">Project Type</label>
              <select id="project" className="w-full rounded-xl border border-[#EDE8DE] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2D7A]">
                <option>Product Design</option>
                <option>Brand Identity</option>
                <option>Website</option>
                <option>Design System</option>
              </select>
            </div>
            <div>
              <label className="sr-only" htmlFor="budget">Budget Range</label>
              <select id="budget" className="w-full rounded-xl border border-[#EDE8DE] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2D7A]">
                <option>$2k–$5k</option>
                <option>$5k–$10k</option>
                <option>$10k–$25k</option>
                <option>$25k+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Message" className="w-full rounded-xl border border-[#EDE8DE] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B2D7A]" />
            </div>
            <div className="sm:col-span-2 flex justify-center">
              <button type="submit" className="inline-flex items-center rounded-full px-6 py-3 bg-[#FF6A2B] text-white shadow-[0_8px_24px_rgba(255,106,43,0.35)] transition-all hover:-translate-y-0.5">Send it →</button>
            </div>
          </form>

          <div className="mt-16 pt-6 border-t border-[#EDE8DE] text-center text-sm text-[#46526B]">
            <p>
              <span className="font-medium text-[#162035]">Kathan Thaker</span> · {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
