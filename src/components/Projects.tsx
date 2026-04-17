import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  FileText,
  ArrowUpRight,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "Smart Calendar",
    subtitle: "AI-Powered Task Management",
    description:
      "An intelligent calendar application with AI-driven task prioritization and seamless Google Calendar integration. Features drag-and-drop scheduling, smart reminders, and natural language event creation.",
    icon: Calendar,
    tags: [
      "React",
      "Framer Motion",
      "Google Calendar API",
      "OpenAI",
      "Node.js",
    ],
    accent: "from-sky-400/20 to-sky-600/5",
    border: "border-sky-400/15",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-400/10",
    span: "md:col-span-2",
    metrics: [
      { label: "Faster scheduling", value: "3x" },
      { label: "Calendar sync accuracy", value: "99%" },
    ],
    liveUrl: "https://smart-calendar-c.vercel.app/",
    githubUrl: "https://github.com/Sreenivasyadav374/smart-calendar",
  },
  {
    title: "Real-Time AI Chatbot",
    subtitle: "Next.js 14 Streaming Application",
    description:
      "A production-grade AI chatbot with token-by-token streaming responses using Server-Sent Events. Built on Next.js 14 App Router with edge runtime for ultra-low latency.",
    icon: MessageSquare,
    tags: [
      "Next.js 14",
      "TypeScript",
      "Streaming",
      "Edge Runtime",
      "Vercel AI SDK",
    ],
    accent: "from-emerald-400/20 to-emerald-600/5",
    border: "border-emerald-400/15",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10",
    span: "md:col-span-1",
    metrics: [{ label: "Time to first token", value: "<200ms" }],
    liveUrl: "https://streaming-chatbot-xi.vercel.app/",
    githubUrl: "https://github.com/Sreenivasyadav374/streaming-chatbot",
  },
  {
    title: "Smart Notes App",
    subtitle: "Full-Stack MERN Application",
    description:
      "A feature-rich notes application with real-time markdown preview, tag-based organization, and full-text search. Responsive across all devices with persistent MongoDB storage.",
    icon: FileText,
    tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    accent: "from-amber-400/20 to-amber-600/5",
    border: "border-amber-400/15",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    span: "md:col-span-1",
    metrics: [{ label: "Full-text search latency", value: "<50ms" }],
    liveUrl: "https://note-craft-suitee.vercel.app/",
    githubUrl: "https://github.com/Sreenivasyadav374/note-craft-suite",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono text-xs text-sky-400 tracking-widest mb-3 uppercase">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Things I've
            <br />
            <span className="gradient-text">shipped.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.13,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative rounded-2xl border ${project.border} bg-[#0f0f0f] p-6 overflow-hidden cursor-pointer ${project.span} hover:border-white/15 transition-all duration-300`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`p-2.5 rounded-xl ${project.iconBg} border ${project.border}`}
                    >
                      <Icon size={18} className={project.iconColor} />
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {/* GitHub Link */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg border border-white/10 text-neutral-500 hover:text-white transition-colors"
                        >
                          <Github size={14} />
                        </a>

                        {/* Live Demo Link */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg border border-white/10 text-neutral-500 hover:text-white transition-colors"
                        >
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <p className="mono text-xs text-neutral-600 mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-white font-semibold text-xl mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {project.metrics.length > 0 && (
                    <div className="flex gap-4 mb-5 pb-5 border-b border-white/[0.05]">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <p
                            className={`text-xl font-bold ${project.iconColor} tabular-nums`}
                          >
                            {m.value}
                          </p>
                          <p className="text-neutral-600 text-xs">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono text-xs text-neutral-500 border border-white/[0.07] bg-white/[0.02] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
