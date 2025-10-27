import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const stickers = [
  { src: '/assets/hero-sticker-01.png', alt: 'Sticker 1', style: 'top-8 left-4 sm:top-10 sm:left-10 w-14 sm:w-16 rotate-3' },
  { src: '/assets/hero-sticker-02.png', alt: 'Sticker 2', style: 'top-20 right-6 sm:right-16 w-12 sm:w-16 -rotate-6' },
  { src: '/assets/hero-sticker-03.png', alt: 'Sticker 3', style: 'top-40 left-6 sm:left-28 w-12 sm:w-16 rotate-2' },
  { src: '/assets/hero-sticker-04.png', alt: 'Sticker 4', style: 'top-44 right-4 sm:right-36 w-14 sm:w-16 -rotate-2' },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const headlineVariants = {
    hidden: { y: 12, opacity: 0 },
    show: (i) => ({ y: 0, opacity: 1, transition: { duration: 0.55, delay: i * 0.12, ease: [0.2, 0.6, 0.2, 1] } }),
  };

  const stickerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.85 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: i % 2 === 0 ? 6 : -6,
      transition: { duration: 0.7, delay: 0.5 + i * 0.14, ease: [0.2, 0.6, 0.2, 1] },
    }),
  };

  const reduced = prefersReducedMotion;

  const spline = useMemo(
    () => (
      <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px]">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFF9F0]/20 via-transparent to-[#FFF9F0]" />
      </div>
    ),
    []
  );

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative pt-24 md:pt-28 bg-[#FFF9F0] text-[#162035]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12">
        {spline}
        <div className="relative">
          <div className="relative text-center mt-10 sm:mt-12 md:mt-16">
            <motion.h1
              id="hero-heading"
              className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-tight"
              initial="hidden"
              animate={reduced ? 'show' : 'show'}
            >
              <motion.span
                className="italic block"
                custom={0}
                variants={headlineVariants}
              >
                Product & Visual
              </motion.span>
              <motion.span
                className="font-bold block"
                custom={1}
                variants={headlineVariants}
              >
                Designer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.2, 0.6, 0.2, 1] }}
              className="mt-5 text-base sm:text-lg text-[#46526B] max-w-2xl mx-auto leading-relaxed"
            >
              I craft design systems & visuals that ship right the first time.
            </motion.p>

            <div className="mt-7 sm:mt-8 flex items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 sm:py-3.5 text-white bg-[#FF6A2B] shadow-[0_8px_24px_rgba(255,106,43,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(255,106,43,0.45)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6A2B]"
              >
                Get Started →
              </a>
              <a
                href="#works"
                className="inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3 sm:py-3.5 text-[#0B2D7A] border border-[#EDE8DE] bg-white/80 hover:bg-white transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0B2D7A]"
              >
                See Work
              </a>
            </div>

            {/* Floating stickers */}
            {!reduced && (
              <div aria-hidden className="pointer-events-none absolute inset-0">
                {stickers.map((s, i) => (
                  <motion.img
                    key={s.alt}
                    src={s.src}
                    alt=""
                    className={`absolute ${s.style}`}
                    initial="hidden"
                    animate="show"
                    custom={i}
                    variants={stickerVariants}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
