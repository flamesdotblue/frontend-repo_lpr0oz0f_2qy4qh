import { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { id: 'works', label: 'Works', href: '#works' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'personal', label: 'Personal', href: '#personal' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('works');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? 'backdrop-blur-xl bg-[#FFF9F0]/70 shadow-[0_6px_20px_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
     >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-12 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Name with cyan dot */}
            <a href="#top" className="inline-flex items-center gap-2 text-[#162035] font-semibold tracking-tight">
              <span className="relative inline-block">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" aria-hidden="true" />
              </span>
              <span className="sr-only">Go to top</span>
              <span aria-hidden>Kathan Thaker</span>
            </a>

            {/* Center: Segmented toggle */}
            <nav className="hidden md:flex items-center">
              <div className="flex rounded-full border border-[#EDE8DE] bg-white/80 shadow-sm overflow-hidden">
                {NAV.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActive(item.id);
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`px-4 py-2 text-sm transition-colors ${
                      active === item.id
                        ? 'bg-[#0B2D7A] text-white'
                        : 'text-[#46526B] hover:text-[#0B2D7A]'
                    }`}
                    aria-pressed={active === item.id}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            {/* Right: Socials */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#EDE8DE] text-[#162035] hover:text-[#0B2D7A] bg-white/70 px-3 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#EDE8DE] text-[#162035] hover:text-[#0B2D7A] bg-white/70 px-3 py-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
