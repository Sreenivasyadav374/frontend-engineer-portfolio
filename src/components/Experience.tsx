import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const highlights = [
  {
    tag: 'Performance',
    title: 'UI Performance Engineering',
    body: 'Architected and maintained reusable React component libraries, driving a 25% boost in team development velocity and ensuring consistent UX patterns across products.',
  },
  {
    tag: 'Backend',
    title: 'API Efficiency & Optimization',
    body: 'Designed and optimized RESTful Node.js/Express APIs with intelligent caching strategies, reducing server response times by 20% and improving overall system throughput.',
  },
  {
    tag: 'Quality',
    title: 'Automated Testing Workflows',
    body: 'Implemented end-to-end and unit test suites using Playwright and Jest integrated into GitHub Actions CI/CD pipelines, cutting post-deployment bug rates by 30%.',
  },
  {
    tag: 'Full-Stack',
    title: 'MERN Stack Development',
    body: 'Built and shipped full-stack features using MongoDB, Express, React 18+, and Node.js — owning the complete development lifecycle from schema design to UI delivery.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono text-xs text-sky-400 tracking-widest mb-3 uppercase">Experience</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Where I've been
            <br />
            <span className="gradient-text">building.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/[0.08] bg-[#0f0f0f] p-6 sticky top-24"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-white font-semibold text-lg">Capgemini</p>
                <p className="text-sky-400 text-sm font-medium mt-0.5">Frontend Engineer</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Present
              </span>
            </div>

            <div className="space-y-2 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Calendar size={13} />
                <span>June 2024 — Present</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} />
                <span>Gurgaon, India</span>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-white/[0.06]">
              <p className="text-xs text-neutral-600 mono mb-3">Core tech</p>
              <div className="flex flex-wrap gap-1.5">
                {['React 18', 'TypeScript', 'Node.js', 'MongoDB', 'Playwright', 'Jest', 'GitHub Actions'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs mono text-neutral-400 border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-white/[0.07] bg-[#0f0f0f] p-6 hover:border-white/[0.12] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="mono text-xs text-sky-400 bg-sky-400/8 border border-sky-400/15 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                  {/* <ExternalLink
                    size={14}
                    className="text-neutral-700 group-hover:text-neutral-500 transition-colors mt-0.5"
                  /> */}
                </div>
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
