import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { researchLibrary, type ResearchDataPoint } from '../data/research';
import { ExternalLink, BookOpen, Search, X } from 'lucide-react';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'industry', label: 'Industry Reports' },
  { key: 'ai', label: 'AI Research' },
  { key: 'workspace', label: 'Workspace' },
  { key: 'theory', label: 'Theory' },
  { key: 'competition', label: 'Competition' },
];

export default function ResearchLibrary() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<ResearchDataPoint | null>(null);

  const filtered = researchLibrary.filter((item) => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch =
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      <div className="container-apple">
        <div className="fade-in-section">
          <p className="text-apple-section mb-6">PART 06</p>
          <h2 className="text-apple-title text-white mb-8">Research Library</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 max-w-3xl">
            完整证据链：所有论点可追溯到权威研究
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: '18+', label: '权威研究' },
            { value: '8+', label: '顶级机构' },
            { value: '100%', label: '可溯源' },
            { value: '实时更新', label: '持续追踪' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
            >
              <p className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Search and filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索研究报告、作者、关键词..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent/30 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-accent text-black'
                    : 'border border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Research grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedItem(item)}
              className="group relative p-6 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-semibold tracking-wider text-accent/70 uppercase">
                      {item.source}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">未找到匹配的研究资料</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-semibold tracking-wider text-accent uppercase">
                  {selectedItem.source}
                </span>
                <span className="text-[10px] text-muted-foreground">{selectedItem.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{selectedItem.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                {selectedItem.description}
              </p>
              {selectedItem.url && (
                <a
                  href={selectedItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-black text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  查看原文 <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
