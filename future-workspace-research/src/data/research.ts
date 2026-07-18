export interface ResearchDataPoint {
  id: string;
  source: string;
  year: string;
  title: string;
  description: string;
  url?: string;
  category: 'industry' | 'ai' | 'workspace' | 'theory' | 'competition';
}

export const researchLibrary: ResearchDataPoint[] = [
  {
    id: 'ms-work-trend-2026',
    source: 'Microsoft',
    year: '2026',
    title: 'Work Trend Index 2026',
    description: '组织环境对AI价值的影响超过个人因素两倍。真正的瓶颈开始转向工作方式和组织能力，而不是工具本身。',
    url: 'https://www.microsoft.com/en-us/worklab/work-trend-index',
    category: 'industry',
  },
  {
    id: 'ms-frontier-firms',
    source: 'Microsoft Research',
    year: '2025',
    title: 'Frontier Firms: AI-Native Organization Design',
    description: '领先企业的共同点不是拥有更多AI，而是重构了人与AI、Agent之间的协作模式。',
    category: 'ai',
  },
  {
    id: 'brynjolfsson-ai-productivity',
    source: 'Brynjolfsson et al.',
    year: '2023',
    title: 'Generative AI at Work (NBER Working Paper)',
    description: '生成式AI能显著提升个人生产率（14%+），但真正持续的收益来自把AI嵌入工作流程，而不是单点使用。',
    category: 'ai',
  },
  {
    id: 'copilot-adoption-study',
    source: 'Microsoft / Forrester',
    year: '2024',
    title: 'The Total Economic Impact of Microsoft 365 Copilot',
    description: 'AI对结构化任务帮助明显，但要实现长期价值，需要与具体组织流程、培训和治理结合。',
    category: 'ai',
  },
  {
    id: 'gartner-ai-agents',
    source: 'Gartner',
    year: '2025',
    title: 'Predicts 2026: AI Agents Transform the Digital Workplace',
    description: '到2028年，75%的企业软件工程师将使用AI代码助手，AI Agent将成为新的工作节点。',
    category: 'industry',
  },
  {
    id: 'idc-future-of-work',
    source: 'IDC',
    year: '2025',
    title: 'Worldwide Future of Work 2025 Predictions',
    description: '到2027年，全球2000强企业中将有40%使用AI编排工作流，取代传统的BPM系统。',
    category: 'industry',
  },
  {
    id: 'mckinsey-ai-state',
    source: 'McKinsey & Company',
    year: '2025',
    title: 'The State of AI in 2025',
    description: 'AI采用率在一年内从55%跃升至78%，但只有21%的组织实现了有意义的业务影响。',
    category: 'industry',
  },
  {
    id: 'mckinsey-generative-ai',
    source: 'McKinsey Global Institute',
    year: '2024',
    title: 'A New Future of Work: The Race to Deploy AI',
    description: '到2030年，生成式AI可能自动化当前工作活动中60-70%的任务，但需要组织层面的重新设计。',
    category: 'ai',
  },
  {
    id: 'deloitte-human-capital',
    source: 'Deloitte',
    year: '2025',
    title: 'Global Human Capital Trends 2025',
    description: '组织边界正在溶解：工作不再是"去一个地方"，而是"进入一个流动的状态"。',
    category: 'workspace',
  },
  {
    id: 'bcg-ai-maturity',
    source: 'BCG',
    year: '2025',
    title: 'From AI Experiments to AI at Scale',
    description: '只有11%的企业实现了AI规模化部署，最大的障碍不是技术而是组织惯性。',
    category: 'ai',
  },
  {
    id: 'apple-continuity',
    source: 'Apple Inc.',
    year: '2014-2025',
    title: 'Continuity: The Invisible Architecture of Apple Ecosystem',
    description: '苹果的Continuity不是功能叠加，而是让多个设备像一个系统一样工作——这就是Flow的雏形。',
    category: 'competition',
  },
  {
    id: 'feishu-advanced',
    source: '飞书 (Lark)',
    year: '2024',
    title: '飞书：从文档到组织操作系统',
    description: '飞书试图用文档+多维表格+机器人构建"组织OS"，但仍停留在单一平台内。',
    category: 'competition',
  },
  {
    id: 'google-workspace',
    source: 'Google Workspace',
    year: '2025',
    title: 'Duet AI & Workspace Integration',
    description: 'Google通过Gemini将AI深度整合进Workspace，但缺少跨平台连接的底层协议。',
    category: 'competition',
  },
  {
    id: 'deli-annual-report',
    source: '得力集团年报',
    year: '2024',
    title: '得力集团：从办公用品到智慧办公生态',
    description: '得力已覆盖办公用品、打印、标签、会议、采购、MRO、教育等全链路，但各环节尚未智能化连接。',
    category: 'workspace',
  },
  {
    id: 'platform-revolution',
    source: 'Parker, Van Alstyne & Choudary',
    year: '2016',
    title: 'Platform Revolution',
    description: '平台商业模式的核心不是拥有资源，而是促进连接。网络效应是平台价值的乘数。',
    category: 'theory',
  },
  {
    id: 'network-effect',
    source: 'Katz & Shapiro / Rochet & Tirole',
    year: '1985-2003',
    title: 'Network Effects & Two-Sided Markets',
    description: '网络的价值的增长与节点的平方成正比（Metcalfe\'s Law），而连接的质量决定了平台的上限。',
    category: 'theory',
  },
  {
    id: 'flow-theory',
    source: 'Mihaly Csikszentmihalyi',
    year: '1990',
    title: 'Flow: The Psychology of Optimal Experience',
    description: 'Flow状态是人类最佳体验状态——当挑战与能力匹配时，人会完全沉浸在活动中。办公也需要Flow。',
    category: 'theory',
  },
  {
    id: 'connection-economy',
    source: 'Seth Godin / Various',
    year: '2020+',
    title: 'The Connection Economy',
    description: '在后工业时代，价值不再来自标准化生产，而来自独特的连接和关系网络。',
    category: 'theory',
  },
];

export const timelineData = [
  { year: '2019', event: 'Pre-AI Era', description: '传统办公软件主导，协作工具初步普及', icon: 'Building2' },
  { year: '2020', event: 'Remote Work Revolution', description: '疫情推动全球远程办公实验，Zoom市值超Exxon', icon: 'Globe' },
  { year: '2022', event: 'ChatGPT Launch', description: '生成式AI进入主流，办公方式开始发生根本性变化', icon: 'Sparkles' },
  { year: '2023', event: 'Copilot Era', description: 'Microsoft 365 Copilot发布，AI嵌入办公套件', icon: 'Bot' },
  { year: '2024', event: 'AI Agent Emergence', description: 'Agent概念兴起，AI从"工具"向"协作者"转变', icon: 'Network' },
  { year: '2025', event: 'Multi-Agent Systems', description: '多Agent协同成为新范式，但互操作性仍缺失', icon: 'GitBranch' },
  { year: '2026', event: 'Organization Redesign', description: '微软Work Trend Index揭示：组织能力>AI能力', icon: 'Building2' },
  { year: '2028', event: 'Workspace OS Emergence', description: '预计跨平台办公操作系统开始出现', icon: 'Cpu' },
  { year: '2030', event: 'Flow Economy', description: '办公从"工具集合"进化为"Flow网络"', icon: 'Zap' },
];

export const deliEcosystem = [
  { name: '办公用品', en: 'Office Supplies', desc: '3000+ SKU，覆盖全品类' },
  { name: '打印', en: 'Printing', desc: '打印机、耗材、云打印' },
  { name: '标签', en: 'Labeling', desc: '工业标签、条码系统' },
  { name: '会议', en: 'Meeting', desc: '会议设备、智能白板' },
  { name: '采购', en: 'Procurement', desc: '企业采购数字化平台' },
  { name: 'MRO', en: 'MRO', desc: '工业维护、维修、运营' },
  { name: '教育', en: 'Education', desc: '智慧教室、教育装备' },
];

export const benchmarkData = [
  {
    company: 'Apple',
    icon: 'Apple',
    strength: 'Continuity',
    insight: '苹果通过Continuity让设备间无缝切换。这不是功能叠加，而是系统设计哲学——让连接"隐形"。',
    lesson: 'Flow应该是不可见的，像空气一样自然存在。',
  },
  {
    company: 'Microsoft',
    icon: 'Windows',
    strength: 'Ecosystem Depth',
    insight: '微软拥有最完整的办公生态，但Copilot仍以"功能嵌入"的方式存在，没有重构底层协作模式。',
    lesson: 'AI不应该只是功能，而应该是连接的中枢。',
  },
  {
    company: '飞书',
    icon: 'MessageSquare',
    strength: 'All-in-One',
    insight: '飞书用文档、多维表格、机器人构建"组织OS"，但所有能力局限在单一平台内。',
    lesson: '真正的OS应该是开放的，连接所有工具而非替代它们。',
  },
  {
    company: 'Google',
    icon: 'Chrome',
    strength: 'Open Web',
    insight: 'Google Workspace基于开放Web标准，但AI能力（Gemini）与传统办公场景的融合仍在探索中。',
    lesson: '开放标准是跨平台Flow的基础。',
  },
];

export const theoryFramework = [
  {
    layer: 'Platform',
    description: '底层平台：不是单一应用，而是承载多种工作流的操作系统级底座。',
    keywords: ['Modularity', 'Extensibility', 'API-first'],
  },
  {
    layer: 'Network Effect',
    description: '网络效应：平台价值随参与节点数量指数增长，但前提是节点之间能够高效连接。',
    keywords: ['Metcalfe\'s Law', 'Two-Sided Market', 'Critical Mass'],
  },
  {
    layer: 'Flow',
    description: 'Flow：信息、任务、决策在不同工具、人和AI之间的无缝流动。这是Workspace OS的核心价值主张。',
    keywords: ['Information Flow', 'Task Orchestration', 'Context Continuity'],
  },
  {
    layer: 'Workspace OS',
    description: 'Workspace OS：不是一个新的办公软件，而是一个连接所有办公软件的操作系统。',
    keywords: ['Interoperability', 'Protocol', 'Abstraction Layer'],
  },
  {
    layer: 'Open Ecosystem',
    description: '开放生态：任何工具都可以接入Workspace OS，通过标准协议实现互操作。',
    keywords: ['Open Standards', 'Plugin Architecture', 'Federation'],
  },
  {
    layer: 'Connection Economy',
    description: '连接经济：竞争优势从"拥有更好的AI"转向"拥有更好的AI连接能力"。',
    keywords: ['Network Advantage', 'Coordination Value', 'Ecosystem Lock-in'],
  },
];

export const statsData = [
  { label: 'AI Adoption Rate (2025)', value: 78, suffix: '%', source: 'McKinsey', trend: '+23% YoY' },
  { label: 'Enterprise AI Impact Gap', value: 21, suffix: '%', source: 'McKinsey', trend: 'Meaningful ROI' },
  { label: 'AI Coding Assistant Adoption (2028E)', value: 75, suffix: '%', source: 'Gartner', trend: 'Projected' },
  { label: 'Workflow Automation (2027E)', value: 40, suffix: '%', source: 'IDC', trend: 'Global 2000' },
  { label: 'Organizational Factor Impact', value: 2, suffix: 'x', source: 'Microsoft WTI', trend: 'vs Individual' },
  { label: 'Task Automation Potential (2030E)', value: 65, suffix: '%', source: 'McKinsey', trend: 'of Activities' },
];

export const ourViewContent = {
  title: 'Workspace OS: The Theory of Flow',
  subtitle: 'A new paradigm for the next decade of work',
  coreConcepts: [
    {
      title: 'Flow Node',
      description: '每一个工作实体（人、AI Agent、应用、数据源）都是一个Flow Node，通过标准协议接入Workspace OS。',
    },
    {
      title: 'Workspace Protocol',
      description: '一个开放的、标准化的通信协议，让不同工具和Agent之间能够像互联网一样互联互通。',
    },
    {
      title: 'Connection as Competitive Advantage',
      description: '未来企业的竞争优势不是拥有最强的AI，而是拥有最强的AI连接能力——让AI、人和工具高效协作。',
    },
  ],
  thesis: 'The competitive advantage of the future shifts from "who has better AI" to "who connects AI better."',
};
