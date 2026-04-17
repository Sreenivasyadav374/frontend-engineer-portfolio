import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Layers, Server, Wrench } from 'lucide-react';

const categories = [
  {
    label: 'Frontend',
    icon: Monitor,
    color: 'text-sky-400',
    bg: 'bg-sky-400/8',
    border: 'border-sky-400/15',
    skills: ['React 18+', 'Next.js', 'TypeScript', 'React Native', 'JavaScript (ES2024)'],
  },
  {
    label: 'State & UI',
    icon: Layers,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/8',
    border: 'border-emerald-400/15',
    skills: ['Redux Toolkit', 'Zustand', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  {
    label: 'Backend',
    icon: Server,
    color: 'text-amber-400',
    bg: 'bg-amber-400/8',
    border: 'border-amber-400/15',
    skills: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'JWT Auth'],
  },
  {
    label: 'Tools & DevOps',
    icon: Wrench,
    color: 'text-rose-400',
    bg: 'bg-rose-400/8',
    border: 'border-rose-400/15',
    skills: ['Playwright', 'Jest', 'GitHub Actions', 'AWS', 'Docker'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mono text-xs text-sky-400 tracking-widest mb-3 uppercase">Stack</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Tools of the
            <br />
            <span className="gradient-text">trade.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl border ${cat.border} bg-[#0f0f0f] p-6 group hover:border-white/15 transition-colors duration-300`}
              >
                <div className={`inline-flex p-2.5 rounded-xl ${cat.bg} border ${cat.border} mb-5`}>
                  <Icon size={16} className={cat.color} />
                </div>
                <p className={`text-sm font-medium ${cat.color} mb-4`}>{cat.label}</p>
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${cat.bg} ${cat.color} border ${cat.border} flex-shrink-0`} style={{ display: 'inline-block', width: 6, height: 6 }} />
                      <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 rounded-2xl border border-white/[0.06] bg-[#0f0f0f] p-6"
        >
          <p className="text-xs mono text-neutral-600 mb-4">Additional proficiencies</p>
          <div className="flex flex-wrap gap-2">
            {[
              'HTML5', 'CSS3', 'SASS', 'REST', 'GraphQL', 'Webpack', 'Vite', 'ESLint', 'Prettier',
              'Git', 'Figma', 'Postman', 'Linux', 'Vercel', 'Netlify',
            ].map((skill) => (
              <span
                key={skill}
                className="mono text-xs text-neutral-500 border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 rounded-lg hover:text-neutral-300 hover:border-white/15 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
