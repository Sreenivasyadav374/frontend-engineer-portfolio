import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="flex items-center gap-2 text-xs mono text-sky-400 border border-sky-400/20 bg-sky-400/5 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6"
        >
          <span className="gradient-text">Engineering</span>
          <br />
          <span className="text-white">high-performance</span>
          <br />
          <span className="gradient-text">web experiences</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Frontend Engineer at{" "}
          <span className="text-neutral-200 font-medium">Capgemini</span> with a
          focus on React, TypeScript, and Full-Stack efficiency. Building
          interfaces that scale.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-neutral-200 transition-all duration-200"
          >
            View Work
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="/Sreenivas_Yadav_Frontend_React_Developer.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-300 border border-white/[0.1] px-5 py-2.5 rounded-lg hover:border-white/20 hover:text-white transition-all duration-200"
          >
            <Download size={15} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.6)}
          className="mt-16 flex items-center justify-center gap-6 text-xs mono text-neutral-600"
        >
          <span className="flex items-center gap-1.5">
            <Sparkles size={12} className="text-sky-400/60" />
            MERN Stack
          </span>
          <span className="w-px h-3 bg-white/10" />
          <span>React 18+</span>
          <span className="w-px h-3 bg-white/10" />
          <span>TypeScript</span>
          <span className="w-px h-3 bg-white/10" />
          <span>Node.js</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-neutral-600 mono">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
