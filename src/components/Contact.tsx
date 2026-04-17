import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    if (error) {
      setFormState('error');
      setErrorMsg('Something went wrong. Please try again.');
    } else {
      setFormState('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  const inputClass =
    'w-full bg-[#0f0f0f] border border-white/[0.08] text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-400/40 focus:ring-1 focus:ring-sky-400/20 transition-all duration-200';

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mono text-xs text-sky-400 tracking-widest mb-3 uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Let's build
            <br />
            <span className="gradient-text">something great.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-sm">
              I'm open to new opportunities, collaborations, and interesting projects. Drop me a
              message and I'll get back to you promptly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-500 text-xs mono">@</span>
                <span>srinivaspa374@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-500 text-xs">📍</span>
                <span>Gurgaon, Haryana, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6"
          >
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                  <CheckCircle size={24} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white font-medium mb-1">Message sent!</p>
                  <p className="text-neutral-500 text-sm">I'll get back to you soon.</p>
                </div>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-sm text-sky-400 hover:text-sky-300 transition-colors mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 mono">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1.5 mono">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1.5 mono">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-rose-400 bg-rose-400/8 border border-rose-400/15 rounded-xl px-4 py-3">
                    <AlertCircle size={14} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-white text-black text-sm font-medium px-5 py-3 rounded-xl hover:bg-neutral-200 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {formState === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
