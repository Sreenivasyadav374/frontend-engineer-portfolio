import { motion } from 'framer-motion';
import { MapPin, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="#hero" className="mono text-sm text-white font-medium">
              GSY<span className="text-sky-400">.</span>
            </a>
            <div className="flex items-center gap-1.5 text-xs text-neutral-600">
              <MapPin size={11} />
              <span>Gurgaon, India</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sreenivasyadav374"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href="https://www.linkedin.com/in/srinivas-yadav-b6a30527a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="text-xs text-neutral-700 mono">
            &copy; {year} Golla Sreenivas Yadav
          </p>
        </div>
      </div>
    </footer>
  );
}
