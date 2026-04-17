import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { useEffect } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  inView: boolean;
}

function AnimatedCounter({ target, suffix = '', inView }: CounterProps) {
  const count = useMotionValue(0);
  const spring = useSpring(count, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) count.set(target);
  }, [inView, target, count]);

  return <motion.span>{display}</motion.span>;
}

const metrics = [
  {
    value: 25,
    suffix: '%',
    label: 'Boost in development velocity',
    description: 'via reusable design systems and component libraries that accelerated cross-team delivery.',
    icon: TrendingUp,
    color: 'text-sky-400',
    bg: 'bg-sky-400/8',
    border: 'border-sky-400/15',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Reduction in post-deployment bugs',
    description: 'through comprehensive Playwright and Jest test suites integrated into CI pipelines.',
    icon: ShieldCheck,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/8',
    border: 'border-emerald-400/15',
  },
  {
    value: 20,
    suffix: '%',
    label: 'Reduction in server response times',
    description: 'through optimized Node.js APIs, query caching, and efficient middleware architecture.',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-400/8',
    border: 'border-amber-400/15',
  },
];

export default function Impact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="impact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mono text-xs text-sky-400 tracking-widest mb-3 uppercase">Impact</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Measurable results,
            <br />
            <span className="gradient-text">not just code.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl border ${metric.border} bg-[#0f0f0f] p-8 overflow-hidden group hover:border-white/15 transition-colors duration-300`}
              >
                <div
                  className={`absolute -top-8 -right-8 w-40 h-40 rounded-full ${metric.bg} blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500`}
                />

                <div className={`inline-flex p-2.5 rounded-xl ${metric.bg} border ${metric.border} mb-6`}>
                  <Icon size={18} className={metric.color} />
                </div>

                <div className={`text-6xl md:text-7xl font-bold ${metric.color} leading-none mb-2 tabular-nums`}>
                  <AnimatedCounter target={metric.value} suffix={metric.suffix} inView={inView} />
                </div>

                <p className="text-white font-medium text-lg mb-3 leading-snug">{metric.label}</p>
                <p className="text-neutral-500 text-sm leading-relaxed">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
