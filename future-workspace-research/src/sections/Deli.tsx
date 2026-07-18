import { motion } from 'framer-motion';
import { deliEcosystem } from '../data/research';
import { Package, Printer, Tag, Monitor, ShoppingCart, Wrench, GraduationCap } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  '办公用品': Package,
  '打印': Printer,
  '标签': Tag,
  '会议': Monitor,
  '采购': ShoppingCart,
  'MRO': Wrench,
  '教育': GraduationCap,
};

export default function Deli() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="container-apple">
        <div className="fade-in-section">
          <p className="text-apple-section mb-6">PART 03</p>
          <h2 className="text-apple-title text-white mb-8">Deli</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-20 max-w-3xl">
            为什么是得力？
          </p>
        </div>

        {/* Ecosystem flow */}
        <div className="relative">
          {/* Connected nodes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4">
            {deliEcosystem.slice(0, 4).map((item, i) => {
              const Icon = iconMap[item.name] || Package;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group text-center"
                >
                  <Icon className="w-8 h-8 text-accent/70 group-hover:text-accent transition-colors mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.en}</p>
                  <p className="text-xs text-muted-foreground mt-2 opacity-60">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Arrow connector */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center py-6"
          >
            <div className="w-px h-12 bg-gradient-to-b from-white/20 to-white/5" />
          </motion.div>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {deliEcosystem.slice(4).map((item, i) => {
              const Icon = iconMap[item.name] || Package;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group text-center"
                >
                  <Icon className="w-8 h-8 text-accent/70 group-hover:text-accent transition-colors mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.en}</p>
                  <p className="text-xs text-muted-foreground mt-2 opacity-60">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
            Deli already connects offices.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl text-accent font-semibold mt-4"
          >
            It just doesn't connect intelligence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
