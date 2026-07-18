import { motion } from 'framer-motion';
import { statsData } from '../data/research';
import { TrendingUp, BarChart3, Activity, Zap } from 'lucide-react';

export default function DataCenter() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="container-apple">
        <div className="fade-in-section">
          <p className="text-apple-section mb-6">PART 07</p>
          <h2 className="text-apple-title text-white mb-8">Data Center</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-20 max-w-3xl">
            数据可视化：用数字讲述未来办公的故事
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />

              <div className="relative z-10">
                <p className="text-[11px] font-medium text-muted-foreground tracking-wider uppercase mb-6">
                  {stat.label}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xl text-accent/70">{stat.suffix}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-muted-foreground">{stat.source}</span>
                  <span className="text-[11px] text-accent/60 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual chart placeholder - Apple style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-white">
              AI Adoption vs. Organizational Impact
            </h3>
          </div>

          {/* Bar chart - styled */}
          <div className="space-y-5">
            {[
              { label: 'AI Adoption Rate', value: 78, color: 'bg-accent', sub: 'of enterprises' },
              {
                label: 'Meaningful Business Impact',
                value: 21,
                color: 'bg-white/30',
                sub: 'achieved ROI',
              },
              {
                label: 'AI at Scale (Mature)',
                value: 11,
                color: 'bg-white/20',
                sub: 'full deployment',
              },
              {
                label: 'Organizational Redesign',
                value: 8,
                color: 'bg-white/10',
                sub: 'in progress',
              },
            ].map((bar, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">{bar.label}</span>
                  <span className="text-sm text-white/50">{bar.sub}</span>
                </div>
                <div className="relative h-2 rounded-full bg-white/[0.05] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
                    className={`absolute inset-y-0 left-0 rounded-full ${bar.color}`}
                  />
                </div>
                <span className="text-xs text-accent font-medium">{bar.value}%</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Sources: McKinsey State of AI 2025, BCG AI Maturity Report, Microsoft WTI 2026
          </p>
        </motion.div>

        {/* Insight boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {[
            {
              icon: Activity,
              title: 'Adoption ≠ Impact',
              desc: '78%采用率 vs 21%有意义影响：差距是57个百分点。',
            },
            {
              icon: Zap,
              title: 'The 2x Factor',
              desc: '组织环境对AI价值的影响是个人因素的2倍以上。',
            },
            {
              icon: TrendingUp,
              title: 'Connection Gap',
              desc: 'AI越来越多，但工具间的连接和协作仍严重碎片化。',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="p-6 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.03] transition-all"
            >
              <item.icon className="w-5 h-5 text-accent/70 mb-4" />
              <h4 className="text-sm font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
