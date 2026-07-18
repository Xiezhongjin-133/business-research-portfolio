import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollAnimation';

export default function Problem() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative min-h-screen bg-black py-32">
      <div className="container-apple">
        {/* PART Label */}
        <div ref={ref} className={isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}>
          <p className="text-apple-section mb-6">PART 01</p>
          <h2 className="text-apple-title text-white mb-8">The Problem</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-20 max-w-3xl">
            未来办公正在发生什么？
          </p>
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              source: 'Microsoft Work Trend Index 2026',
              quote:
                '随着AI和Agent承担越来越多执行工作，组织真正的瓶颈开始转向工作方式和组织能力，而不是工具本身。报告显示，组织环境对AI价值的影响超过个人因素两倍。',
            },
            {
              source: 'McKinsey State of AI 2025',
              quote:
                'AI采用率从55%跃升至78%，但只有21%的组织实现了有意义的业务影响——这说明部署AI不等于获得AI价值。',
            },
            {
              source: 'BCG AI Maturity Report',
              quote:
                '只有11%的企业实现了AI规模化部署，最大的障碍不是技术，而是组织惯性和碎片化的工作流。',
            },
            {
              source: 'Gartner Predicts 2026',
              quote:
                '到2028年，75%的企业软件工程师将使用AI代码助手，但AI Agent之间的互操作性将成为新的瓶颈。',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative p-8 md:p-10 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <p className="text-xs font-medium tracking-[0.15em] text-accent uppercase mb-4">
                {item.source}
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                "{item.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual metaphor: AI complexity */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-5">
            {['AI × N', 'Agent × N', 'Tool × N', 'SaaS × N', 'Workflow × N'].map(
              (item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                  className="px-6 py-3 rounded-full border border-white/10 text-sm text-white/60 bg-white/[0.03]"
                >
                  {item}
                </motion.span>
              )
            )}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2 }}
            className="mt-10 text-xl text-muted-foreground"
          >
            More AI. More Agents. More Complexity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 2.3 }}
            className="mt-2 text-2xl text-accent font-semibold"
          >
            Less Flow.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
