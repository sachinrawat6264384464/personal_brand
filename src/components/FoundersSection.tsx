import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const founderStats = [
  {
    label: 'Projects Completed',
    value: '15+',
    note: 'Industry-leading digital solutions',
  },
  {
    label: 'Technologies Used',
    value: '5+',
    note: 'Modern stack across all domains',
  },
  {
    label: 'Creative Solutions',
    value: '16+',
    note: 'Award-winning brand experiences',
  },
  {
    label: 'Years Together',
    value: '1+',
    note: 'Proven partnership and excellence',
  },
];

const circleMotion = {
  animate: {
    y: [0, -16, 0],
  },
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export default function FoundersSection() {
  const navigate = useNavigate();

  return (
    <section id="founders" className="relative overflow-hidden px-6 pb-24 pt-10 sm:px-10 lg:px-16 lg:pb-32">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_22%)] opacity-90" />
      <div className="pointer-events-none absolute left-0 top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_auto_1.1fr]">
        <motion.div
          className="relative flex justify-center lg:justify-end cursor-pointer"
          {...circleMotion}
          whileHover={{ scale: 1.08 }}
          onClick={() => navigate('/founder/ritik')}
        >
          <div className="relative flex h-[330px] w-[330px] items-center justify-center rounded-full border border-white/10 bg-slate-950/60 shadow-[0_40px_120px_rgba(56,189,248,0.16)] backdrop-blur-2xl hover:shadow-[0_40px_120px_rgba(56,189,248,0.32)] transition-shadow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-violet-500/10 blur-xl" />
            <div className="absolute inset-4 rounded-full border border-white/10 bg-slate-950/85 backdrop-blur-xl" />
            <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(79,212,255,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_24%)]" />
            <div className="absolute inset-0 rounded-full border border-white/5" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 rounded-full px-6 text-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 text-4xl font-semibold text-white/90 backdrop-blur-xl font-playfair">
                R
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white font-playfair">Ritik</p>
                <p className="mt-1 text-sm uppercase tracking-[0.28em] text-cyan-200/70">Co-Founder & CTO</p>
                <p className="mt-2 text-xs text-slate-400">Click to learn more</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-full border border-cyan-400/10 blur-sm" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-2xl space-y-8 text-center lg:mx-0 lg:text-left">
          <div className="relative inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-cyan-200/80 backdrop-blur-xl font-pro-bold">
            FOUNDERS • INNOVATORS • CREATORS
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl font-playfair">
              R&S SERVICES: Redefining Digital Excellence
            </h2>
            <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg font-pro-bold">
              We are strategic thinkers and skilled developers passionate about creating transformative digital experiences. Our mission is to elevate brands through innovative solutions and exceptional execution.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {founderStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-2xl shadow-premium transition-smooth hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="text-xl font-semibold text-white font-playfair">{stat.value}</p>
                <h3 className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-300 font-pro-bold">{stat.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{stat.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative flex justify-center lg:justify-start cursor-pointer"
          {...circleMotion}
          whileHover={{ scale: 1.08 }}
          onClick={() => navigate('/founder/sachin')}
        >
          <div className="relative flex h-[330px] w-[330px] items-center justify-center rounded-full border border-white/10 bg-slate-950/60 shadow-[0_40px_120px_rgba(168,85,247,0.16)] backdrop-blur-2xl hover:shadow-[0_40px_120px_rgba(168,85,247,0.32)] transition-shadow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/10 blur-xl" />
            <div className="absolute inset-4 rounded-full border border-white/10 bg-slate-950/85 backdrop-blur-xl" />
            <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.18),transparent_24%)]" />
            <div className="absolute inset-0 rounded-full border border-white/5" />
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 rounded-full px-6 text-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 text-4xl font-semibold text-white/90 backdrop-blur-xl font-playfair">
                S
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tight text-white font-playfair">Sachin</p>
                <p className="mt-1 text-sm uppercase tracking-[0.28em] text-cyan-200/70">Co-Founder & CCO</p>
                <p className="mt-2 text-xs text-slate-400">Click to learn more</p>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-full border border-violet-400/10 blur-sm" />
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </section>
  );
}
