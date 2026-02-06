export const LOGO_URL = 'https://sigsolutions-production.up.railway.app/images/logo.png';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Technology', href: '/technology' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Contact', href: '/contact' },
];

export const CONTACT_URL = '/contact';

export type IconName =
  | 'Target' | 'Handshake' | 'Coins' | 'LineChart'
  | 'Headphones' | 'Phone' | 'Users' | 'Banknote'
  | 'MonitorSmartphone' | 'Database' | 'Megaphone' | 'CreditCard' | 'Workflow' | 'BarChart3'
  | 'Shield' | 'Lock' | 'Eye' | 'FileCheck' | 'ServerCog';

export const STATS = [
  { value: 100, suffix: '+', label: 'Active Call Centre Agents', icon: 'Headphones' as IconName },
  { value: 500, suffix: 'K+', label: 'Outbound Calls Made', icon: 'Phone' as IconName },
  { value: 50, suffix: 'K+', label: 'Leads Processed', icon: 'Users' as IconName },
  { value: 10, prefix: 'R', suffix: 'M+', label: 'Rands in Recurring Collections', icon: 'Banknote' as IconName },
];

export const PRIMARY_SERVICES = [
  {
    icon: 'Target' as IconName,
    title: 'Lead Generation & Paid Media',
    description: 'We generate qualified leads across Meta, Google, and TikTok. Built for conversion, not vanity metrics.',
    points: [
      'Lead source control across paid and organic data channels',
      'Qualification logic aligned to sales and collections outcomes',
      'Lead performance measured by downstream revenue, not cost-per-lead',
    ],
  },
  {
    icon: 'Handshake' as IconName,
    title: 'Outbound Sales & Telesales',
    description: 'Trained agents running structured outbound campaigns at scale.',
    points: [
      'Consistent follow-up from first contact to commitment',
      'Sales activity tracking, QA, and performance management',
      'No leads go cold. Every prospect is worked systematically',
    ],
  },
];

export const SECONDARY_SERVICES = [
  {
    icon: 'Coins' as IconName,
    title: 'Collections & Payment Recovery',
    description: 'Subscription and fund collection workflows with failed payment recovery (DebiCheck-enabled). Reporting on collected revenue, not promises.',
  },
  {
    icon: 'LineChart' as IconName,
    title: 'Campaign Strategy & Consulting',
    description: 'Funnel architecture and conversion optimisation. Offer design and market expansion strategies. Growth experiments and demand system design.',
  },
];

export const PROCESS_STEPS = [
  { number: '01', title: 'Scope', description: 'Revenue pipeline scoped end-to-end' },
  { number: '02', title: 'Define', description: 'Responsibilities defined upfront' },
  { number: '03', title: 'Track', description: 'Performance tracked continuously' },
  { number: '04', title: 'Report', description: 'Reporting focused on outcomes, not activity' },
];

export const FIT_ITEMS = [
  'Your revenue is recurring or subscription-based',
  'You rely on people, not just software',
  'You care about retention and cashflow stability',
  'You need operational scale, not just marketing',
];

export const NOT_FIT_ITEMS = [
  'You want a once-off campaign',
  'You want vanity metrics',
  'You avoid operational transparency',
];

export const LEADERS = [
  {
    name: 'Johannes Stoker',
    title: 'Managing Director | CEO',
    summary: 'CEO responsible for strategic leadership, governance, and overall performance of SIG Solutions.',
    responsibilities: [
      'Overall company leadership and strategic direction',
      'End-to-end business performance',
      'Governance, risk, executive decision-making',
      'Senior client and partner relationships',
    ],
  },
  {
    name: 'Franz Badenhorst',
    title: 'Managing Director | CSO',
    summary: 'CSO responsible for revenue growth, demand generation, and sales strategy across digital and call-centre channels.',
    responsibilities: [
      'Revenue growth and sales strategy',
      'Lead generation strategy and execution',
      'Paid media (Meta, Google, TikTok)',
      'Funnel architecture, conversion optimisation, offer design',
      'Market expansion and demand systems',
    ],
  },
  {
    name: 'Ivan Taljard',
    title: 'Managing Director | COO',
    summary: 'COO overseeing operational execution, call-centre delivery, and scalable service performance.',
    responsibilities: [
      'Day-to-day operations',
      'Call centre delivery (inbound & outbound)',
      'Agent management, QA, training, performance',
      'Capacity planning and scalability',
      'Operational systems reliability',
    ],
  },
  {
    name: 'Charles Castle',
    title: 'Managing Director | CFO',
    summary: 'CFO responsible for financial governance, sustainability, and commercial oversight.',
    responsibilities: [
      'Financial strategy and oversight',
      'Pricing models and profitability',
      'Cash flow, forecasting, budgeting',
      'Commercial structures and client billing models',
      'Financial risk and compliance',
    ],
  },
];

export const TECH_CATEGORIES = [
  {
    title: 'Telephony & Dialler Infrastructure',
    icon: 'MonitorSmartphone' as IconName,
    items: [
      'Vicidial: high-volume outbound campaigns',
      '3CX: inbound, blended, and hybrid environments',
      'SIP-based telephony infrastructure',
    ],
  },
  {
    title: 'CRM & Data Management',
    icon: 'Database' as IconName,
    items: [
      'Custom CRM solutions (PostgreSQL / Supabase-based)',
      'Client-specific CRM integrations',
      'Lead capture via forms, APIs, and webhooks',
    ],
  },
  {
    title: 'Advertising Platforms',
    icon: 'Megaphone' as IconName,
    items: [
      'Meta Ads (Facebook & Instagram)',
      'Google Ads (Search, Display, YouTube)',
      'TikTok Ads',
    ],
  },
  {
    title: 'Payments & Collections',
    icon: 'CreditCard' as IconName,
    items: [
      'Netcash',
      'DebiCheck-enabled debit order providers',
      'Subscription and recurring billing integrations',
    ],
  },
  {
    title: 'Automation & Orchestration',
    icon: 'Workflow' as IconName,
    items: [
      'n8n (self-hosted)',
      'Make.com (premium)',
      'Webhooks & Conversion API pipelines',
      'Custom automation flows: lead > call > sale > billing',
    ],
  },
  {
    title: 'Reporting & Analytics',
    icon: 'BarChart3' as IconName,
    items: [
      'Custom internal dashboards',
      'Agent-level, funnel-level, and campaign-level reporting',
      'Client-facing performance summaries',
    ],
  },
];

export const COMPLIANCE_ITEMS = [
  { icon: 'Shield' as IconName, title: 'POPIA Compliant', description: 'Fully compliant with the Protection of Personal Information Act across all data handling and processing operations.' },
  { icon: 'Lock' as IconName, title: 'Secure Data Handling', description: 'Secure data handling with encryption at rest and in transit, strict access controls, and comprehensive audit trails.' },
  { icon: 'Eye' as IconName, title: 'Role-Based Access', description: 'Role-based permissions across all systems ensure data is only accessible to authorised personnel.' },
  { icon: 'FileCheck' as IconName, title: 'Audit-Friendly Workflows', description: 'All data workflows are designed to be audit-friendly with full traceability and documentation.' },
  { icon: 'ServerCog' as IconName, title: 'PCI-DSS Compliant Payments', description: 'Payments processed via PCI-DSS compliant third-party providers ensuring secure financial transactions.' },
];

export const SERVICE_DETAILS = [
  {
    id: 'lead-generation',
    icon: 'Target' as IconName,
    title: 'Lead Generation & Paid Media',
    headline: 'Qualified leads built for conversion, not vanity metrics.',
    description: 'We manage the full lead generation process, from ad creative and targeting to qualification and handover. Every lead is measured by what happens downstream, not just cost-per-click.',
    capabilities: [
      'Paid campaign management across Meta Ads (Facebook & Instagram), Google Ads (Search, Display, YouTube), TikTok Ads',
      'Lead capture via forms, APIs, and webhooks',
      'Funnel architecture and conversion optimisation',
      'Lead qualification aligned to downstream sales and collections performance',
      'Full-funnel accountability: we own the quality, not just the volume',
    ],
    breaks: [
      'Cheap leads that never convert',
      'Marketing and sales blaming each other',
      'No accountability for lead quality',
      'Wasted ad spend with no downstream tracking',
    ],
    owns: [
      'End-to-end lead source control',
      'Qualification logic tied to revenue outcomes',
      'Continuous optimisation based on conversion data',
      'Transparent reporting on lead-to-revenue performance',
    ],
  },
  {
    id: 'outbound-sales',
    icon: 'Handshake' as IconName,
    title: 'Outbound Sales & Telesales',
    headline: 'Structured outbound execution at scale. No leads die silently.',
    description: 'Our trained agent teams run structured outbound campaigns with consistent follow-up cadences, quality assurance, and performance tracking. Every prospect is worked systematically until resolution.',
    capabilities: [
      'High-volume outbound calling via Vicidial',
      'Blended inbound/outbound environments via 3CX',
      'Trained agent teams with structured scripts and QA',
      'Sales activity tracking and performance management',
      'Consistent follow-up cadences. No leads die silently',
    ],
    breaks: [
      'Leads going cold from inconsistent follow-up',
      'Staff turnover killing momentum',
      'No visibility into sales conversations',
      'Deals dying silently in the pipeline',
    ],
    owns: [
      'Trained agents running structured follow-ups',
      'Sales activity tracking and accountability',
      'Consistent execution from first contact to commitment',
      'QA and performance management across all campaigns',
    ],
  },
  {
    id: 'collections',
    icon: 'Coins' as IconName,
    title: 'Collections & Payment Recovery',
    headline: 'Revenue protection through systematic collection workflows.',
    description: 'We manage subscription billing, debit order processing, and failed payment recovery. Our reporting focuses on collected revenue, not promises or projections.',
    capabilities: [
      'Subscription and recurring billing management',
      'Debit order processing via Netcash and DebiCheck-enabled providers',
      'Failed payment recovery workflows',
      'Cash flow reporting on actual collected revenue',
    ],
    breaks: [
      'Failed debit orders with no recovery process',
      'Unpredictable cashflow month to month',
      'Burnt-out internal teams chasing payments',
      'Revenue leaking through administrative gaps',
    ],
    owns: [
      'Subscription and fund collection workflows',
      'Failed payment recovery with structured follow-up',
      'Reporting on actual collected revenue',
      'Predictable cashflow management',
    ],
  },
  {
    id: 'campaign-strategy',
    icon: 'LineChart' as IconName,
    title: 'Campaign Strategy & Consulting',
    headline: 'Strategic growth architecture for sustainable demand generation.',
    description: 'We design and optimise the systems that drive demand: from offer design and funnel architecture to market expansion strategies and conversion experiments.',
    capabilities: [
      'Growth strategy and market expansion',
      'Offer design and demand generation systems',
      'Conversion rate optimisation',
      'Campaign performance analysis and iteration',
    ],
    breaks: [
      'Random campaigns with no strategic framework',
      'No testing or iteration process',
      'Growth plateaus with no clear next move',
      'Disconnected marketing and sales funnels',
    ],
    owns: [
      'Funnel architecture and conversion optimisation',
      'Offer design and market positioning',
      'Growth experiments and demand system design',
      'Data-driven campaign iteration',
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote: 'SIG Solutions took over our entire outbound sales process and within 90 days we saw a 40% increase in qualified appointments. Their agents are professional and the reporting is exceptional.',
    name: 'Operations Director',
    company: 'National NGO',
    metric: '40% more qualified appointments',
  },
  {
    quote: 'We were losing thousands every month to failed debit orders. SIG implemented a recovery process that recaptured revenue we had written off. They treat our money like their own.',
    name: 'Finance Manager',
    company: 'Subscription Business',
    metric: 'Significant revenue recovered monthly',
  },
  {
    quote: 'The difference is accountability. Before SIG, leads went into a black hole. Now every lead is tracked, followed up, and reported on. We finally have visibility into our pipeline.',
    name: 'Managing Director',
    company: 'Insurance Brokerage',
    metric: 'Full pipeline visibility achieved',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How quickly can you get started?',
    answer: 'Typically within 2 to 4 weeks. We scope the pipeline, set up systems, onboard agents, and begin execution. Complex campaigns may take slightly longer for proper QA and training.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We specialise in NGOs, membership organisations, subscription businesses, insurance, legal services, and advocacy sectors. Any organisation with recurring revenue or high-volume sales processes is a strong fit.',
  },
  {
    question: 'Do you replace our internal team?',
    answer: 'Not necessarily. We can operate as your full outsourced sales and collections team, or work alongside your existing staff to handle overflow, specific campaigns, or specialised functions.',
  },
  {
    question: 'How do you measure success?',
    answer: 'We report on outcomes, not activity. That means leads that convert, calls that close, and revenue that is actually collected. You will receive transparent dashboards tracking every metric that matters.',
  },
  {
    question: 'What is the minimum contract period?',
    answer: 'We typically work on 3-month initial engagements. This gives enough time to set up, optimise, and demonstrate measurable results. Most clients continue long-term once they see the impact.',
  },
  {
    question: 'How is pricing structured?',
    answer: 'Pricing depends on the scope of services, team size, and campaign complexity. We offer transparent, performance-aligned pricing models. Book a strategy call to get a tailored proposal.',
  },
];
