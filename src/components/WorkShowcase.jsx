import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const sneakImages = Array.from({ length: 8 }).map((_, i) => ({
  src: `/assets/sneak-0${i + 1}.jpg`,
  alt: `Sneak preview ${i + 1}`,
  label: ['Poster', 'UI', 'Branding', 'Motion', 'Web', 'Illustration', '3D', 'Concept'][i],
}));

const projects = [
  {
    title: 'FinFlow',
    img: '/assets/project-finflow.jpg',
    tags: ['Fintech', 'iOS', 'Design System'],
    desc: 'A financial platform that turns complex data into delightful insight.'
  },
  {
    title: 'LaunchPad',
    img: '/assets/project-launchpad.jpg',
    tags: ['Web', 'SaaS', 'Growth'],
    desc: 'A modern launch stack with conversion-led UI and crisp storytelling.'
  },
  {
    title: 'HealthSync',
    img: '/assets/project-healthsync.jpg',
    tags: ['Healthcare', 'Mobile', 'Research'],
    desc: 'Connecting care teams with patients through calm, focused flows.'
  },
  {
    title: 'TalentBridge',
    img: '/assets/project-talentbridge.jpg',
    tags: ['HR', 'Dashboard', 'Data Viz'],
    desc: 'Human-centric hiring with clear signals and confident decisions.'
  }
];

export default function WorkShowcase() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = prefersReducedMotion;

  const marquee = useMemo(() => (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="relative">
        <div className={`flex gap-4 sm:gap-6 py-4 ${reduced ? '' : 'animate-[marquee_24s_linear_infinite] hover:[animation-direction:reverse]'}`}>
          {[...sneakImages, ...sneakImages].map((img, idx) => (
            <div key={idx} className="relative group rounded-xl bg-white border border-[#EDE8DE] shadow-sm overflow-hidden w-40 sm:w-56 h-24 sm:h-36 shrink-0">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2 left-2 text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(-50%);} to { transform: translateX(0);} }
      `}</style>
    </div>
  ), [reduced]);

  return (
    <section id="works" aria-labelledby="sneak-title" className="bg-[#FFF9F0] text-[#162035]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="flex items-center gap-2 mb-6">
          <img src="/assets/ufo.svg" alt="Tiny icon" className="w-4 h-4" />
          <h2 id="sneak-title" className="font-semibold text-sm tracking-wide text-[#46526B]">Sneak peek of my works</h2>
        </div>
        {marquee}

        <div className="mt-16 sm:mt-20">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-serif text-[clamp(28px,4.2vw,44px)] leading-[1.05]">Design in action</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: i * 0.16, ease: [0.2, 0.6, 0.2, 1] }}
                className="rounded-2xl border border-[#EDE8DE] bg-white shadow-sm overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={`${p.title} project thumbnail`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-[#FFF9F0] text-[#0B2D7A] border border-[#EDE8DE]">{t}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-[#46526B] leading-relaxed">{p.desc}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <button className="text-sm px-3 py-2 rounded-full border border-[#EDE8DE] text-[#0B2D7A] hover:bg-white transition-colors">Case Study</button>
                    <button className="text-sm px-3 py-2 rounded-full border border-[#EDE8DE] text-[#0B2D7A] hover:bg-white transition-colors">Live Demo</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="inline-flex items-center rounded-full px-5 py-3 bg-[#FF6A2B] text-white shadow-[0_8px_24px_rgba(255,106,43,0.35)] transition-all hover:-translate-y-0.5">Load more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
