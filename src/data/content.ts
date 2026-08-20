// ==========================================
// CENTRAL CONTENT CONFIGURATION
// All website texts, prices, FAQs, and links
// can be customized directly in this file.
// ==========================================

export interface SiteMeta {
  title: string;
  description: string;
  studioName: string;
  studioTagline: string;
  studioLocation: string;
  satisfactionGuarantee: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export const siteMeta: SiteMeta = {
  title: "Project Go — Your next launch, handled.",
  description: "A custom-built website, live in weeks. Strategy, copy, design, development, and launch support—all with one senior team.",
  studioName: "Project Go",
  studioTagline: "One clear plan. One remarkable launch.",
  studioLocation: "Independent launch studio",
  satisfactionGuarantee: "100% satisfaction guarantee",
  primaryCtaText: "START YOUR PROJECT",
  primaryCtaLink: "#contact",
  secondaryCtaText: "VIEW PRICING",
  secondaryCtaLink: "#pricing",
};

export const navigationLinks = [
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "PRICING", href: "#pricing" },
  { label: "WHY US", href: "#why-us" },
  { label: "FAQS", href: "#faqs" },
  { label: "BLOG", href: "#blog" },
];

export const heroData = {
  badge: "✦ Independent launch studio",
  subheading: "ONE PLAN. ONE TEAM. READY TO GO.",
  headline: "Your next\nlaunch, handled.",
  description: "A custom-built website, live in weeks. Strategy, copy, design, development, and launch support—all with one senior team.",
  annotationQuote: "Who wouldn't want a launch this smooth?",
  floatingCards: [
    { title: "North House", tag: "Design & Build", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&auto=format&fit=crop&q=80", rotate: "-6deg" },
    { title: "Cedar & Co.", tag: "E-Commerce", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=80", rotate: "4deg" },
    { title: "Sunday Goods", tag: "Brand Identity", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=80", rotate: "-4deg" },
    { title: "Field Office", tag: "Web Platform", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&auto=format&fit=crop&q=80", rotate: "5deg" },
    { title: "Kimble Studio", tag: "Creative Showcase", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=80", rotate: "-3deg" }
  ]
};

export const painPointsData = {
  subheading: "SOUND FAMILIAR?",
  headline: "Your website.\nLess work.",
  description: "Stop spending countless weeks micromanaging freelancers or struggling with complex agency layers.",
  checklist: [
    { text: "Test forms and integrations", tag: "I don't have time for this", tagVariant: "lime" },
    { text: "Check every browser", tag: null },
    { text: "Connect the domain", tag: "Why can't I edit it myself?", tagVariant: "lime" },
    { text: "Set up redirects", tag: null },
    { text: "Build a useful 404", tag: "The last team disappeared", tagVariant: "dark-green" },
    { text: "Review mobile layouts", tag: null },
    { text: "It looked fine until I opened it on my phone", tag: "I've been burned before", tagVariant: "lime" }
  ]
};

export const valuePropsData = {
  badge: "ONE DECISION AND YOU'RE DONE.",
  headline: "Custom sites,\nremarkably simple.",
  ctaText: "START PROJECT GO",
  ctaLink: "#contact",
  cards: [
    { number: "01", title: "One senior team", description: "Direct access to specialists who execute without layers of account managers.", isHighlighted: true },
    { number: "02", title: "One focused launch plan", description: "Clear roadmap with weekly sprints and concrete deliverables.", isHighlighted: true },
    { number: "03", title: "One point of contact", description: "Consistent communication via dedicated channel from kickoff to launch.", isHighlighted: true },
    { number: "04", title: "One clear feedback round", description: "Structured reviews that keep momentum high and eliminate endless iterations.", isHighlighted: false },
    { number: "05", title: "One predictable price", description: "Fixed investment with zero surprise invoices or hidden maintenance fees.", isHighlighted: true },
    { number: "06", title: "One site ready to grow", description: "Built with high-performance code ready to scale with your business.", isHighlighted: false }
  ]
};

export const processData = {
  badge: "A SENIOR TEAM, FROM FIRST CALL TO LAUNCH",
  headline: "Meet Project Go",
  description: "We plan it, write it, design it, build it, and help it go live. A calm, transparent process with no mystery middle.",
  badges: [
    "✦ Custom direction",
    "✦ Live in 4-6 weeks",
    "✦ Human-written copy",
    "✦ Launch QA included"
  ],
  steps: [
    {
      phase: "INITIAL DISCOVERY",
      title: "Find the signal",
      tag: "KICKOFF",
      desc: "One focused call to understand your offer, audience, goals, and the proof your site needs to communicate.",
      variant: "lime"
    },
    {
      phase: "DIRECTION & STRUCTURE",
      title: "Shape the story",
      tag: "DIRECTION",
      desc: "We turn raw material into positioning, structure, and a visual direction everyone can stand behind.",
      variant: "lime"
    },
    {
      phase: "DESIGN & FEEDBACK",
      title: "See it take form",
      tag: "FIRST LOOK",
      desc: "The full direction arrives together so you can react to a coherent site rather than disconnected fragments.",
      variant: "light"
    },
    {
      phase: "DESIGN & FEEDBACK",
      title: "Make it unmistakable",
      tag: "REFINE",
      desc: "We apply one concentrated feedback round and polish the details across every breakpoint.",
      variant: "lime"
    },
    {
      phase: "ASTRO BUILD, SEO & QA",
      title: "Make it work",
      tag: "BUILD",
      desc: "We develop the responsive site, configure forms and content, then test the whole experience thoroughly.",
      variant: "lime"
    },
    {
      phase: "GO LIVE",
      title: "Open the doors",
      tag: "GO LIVE",
      desc: "We connect the domain, run the final checklist, and give you a site you are proud to send people to.",
      variant: "lime"
    }
  ]
};

export const marqueeItems = [
  "LAUNCH SUPPORT",
  "EASY EDITING",
  "CLEAR PROCESS",
  "CUSTOM DESIGN",
  "SENIOR TEAM",
  "RESPONSIVE BUILD",
  "ASTRO POWERED",
  "LIGHTSPEED PERFORMANCE"
];

export const pricingData = {
  badge: "ONE STRAIGHTFORWARD OFFER",
  headline: "One price. One launch.",
  description: "Strategy, copy, design, development, QA, and launch support are included.",
  mainPlan: {
    tag: "THE GO PLAN",
    price: "$4,800",
    period: "one-time",
    deliveryTime: "4-6 week delivery",
    ctaText: "RESERVE YOUR START",
    ctaLink: "#contact",
    includedTitle: "WHAT'S INCLUDED:",
    features: [
      "Custom strategy and page structure",
      "Conversion-minded copywriting",
      "Responsive visual design",
      "Astro development",
      "Editable content setup",
      "SEO foundations",
      "Analytics and form setup",
      "Launch QA and handover"
    ]
  },
  addonPlan: {
    tag: "OPTIONAL",
    title: "Go further",
    subtitle: "Keep the same team close after launch for new pages, campaign work, and continuous improvements.",
    price: "+$900",
    period: "/ month",
    features: [
      "Reserved monthly capacity",
      "New landing pages",
      "Copy and design updates",
      "Monthly health check"
    ]
  },
  customScope: {
    title: "Need a larger site or a more complex integration?",
    description: "Tell us what is changing and we'll shape a clear scope around it."
  },
  portfolioDirectory: {
    title: "See work",
    subtitle: "Live sites and products shaped by the same focused process.",
    items: [
      "North House ↗",
      "Field Office ↗",
      "Sunday Goods ↗",
      "Cedar & Co. ↗",
      "Gather Journal ↗",
      "Common Ground ↗"
    ]
  }
};

export const showcaseData = {
  badge: "RECENT LAUNCHES",
  headline: "Proof in the wild.",
  description: "A few examples of the kind of clarity, character, and momentum the process is built to create.",
  projects: [
    {
      id: "01",
      name: "Common Ground",
      category: "Architecture & Design",
      year: "2026",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop&q=80"
    },
    {
      id: "02",
      name: "North House Studio",
      category: "Creative Agency",
      year: "2026",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop&q=80"
    },
    {
      id: "03",
      name: "Sunday Goods Store",
      category: "Lifestyle Brand",
      year: "2026",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=80"
    }
  ]
};

export const comparisonData = {
  badge: "WHY PARTNER WITH US?",
  headline: "A smarter way\nto get online.",
  description: "Project Go removes the delays, uncertainty, and overhead that usually turn a website into a second job.",
  annotation: "It should feel like progress, not management.",
  ctaText: "CHOOSE THE CLEANER PATH",
  ctaLink: "#contact",
  columns: ["PROJECT GO", "AGENCY", "FREELANCER", "DIY"],
  rows: [
    {
      feature: "TIMELINE",
      go: "4–6 weeks",
      agency: "3–6+ months",
      freelancer: "4–12 weeks",
      diy: "When time appears"
    },
    {
      feature: "PRICE",
      go: "One clear price",
      agency: "Large deposit",
      freelancer: "Variable quote",
      diy: "Your time"
    },
    {
      feature: "CUSTOM DESIGN",
      go: "Always custom",
      agency: "Usually custom",
      freelancer: "Depends who you hire",
      diy: "Template-led"
    },
    {
      feature: "COPY + BUILD",
      go: "Copy + build included",
      agency: "Often extra",
      freelancer: "Rarely included",
      diy: "All on you"
    },
    {
      feature: "GUARANTEE",
      go: "Launch guarantee",
      agency: "Rarely",
      freelancer: "Rarely",
      diy: "No refund on time"
    }
  ]
};

export const statsTrustData = {
  badge: "A PRACTICAL LAUNCH PARTNER",
  headline: "Why trust us with\nyour first impression?",
  description: "We have helped founders and small teams turn complicated offers into clear, confident digital experiences.",
  stats: [
    { value: "12+", label: "years shaping digital work", sub: "Senior thinking stays close to every detail", variant: "lime" },
    { value: "100+", label: "sites and products launched", sub: "Each built around a real business problem", variant: "lime" },
    { value: "14", label: "countries reached", sub: "Remote collaboration, without the distance", variant: "lime" },
    { value: "4.9/5", label: "average client rating", sub: "Clear communication is part of the deliverable", variant: "lime" }
  ],
  galleryImages: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80"
  ]
};

export const teamData = {
  badge: "THE PEOPLE BEHIND THE PLAN",
  headline: "Small team.\nSerious follow-through.",
  description: "Project Go exists for ambitious small businesses that deserve senior work without a sprawling agency process.",
  ctaText: "WORK WITH THE TEAM",
  ctaLink: "#contact",
  members: [
    {
      name: "Mara",
      role: "Strategy lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    },
    {
      name: "Jon",
      role: "Creative director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    },
    {
      name: "Mina",
      role: "Senior copywriter",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    },
    {
      name: "Theo",
      role: "Astro developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
      tag: "✦"
    }
  ]
};

export const missionQuote = {
  badge: "WHY PROJECT GO EXISTS",
  headline: "Small teams deserve\ngreat design too.",
  description: "We created Project Go because we kept meeting thoughtful founders and small teams doing excellent work—then losing trust at the exact moment someone landed on their website.\n\nWhen your digital presence matches what you actually deliver, the conversation changes. You explain less, price with more confidence, and attract clients who already understand the value.",
  ctaText: "START YOUR PROJECT",
  ctaLink: "#contact"
};

export const testimonialsData = [
  {
    quote: "The process was calm, direct, and much faster than any website project we had attempted before.",
    author: "Theo Martin",
    role: "Founder, North House",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "It feels like us, only clearer. Clients understand the offer before we even get on a call.",
    author: "Amelia Hart",
    role: "Principal, Field Office",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Outstanding work and zero theatre. Every week ended with visible progress.",
    author: "Noah Bennett",
    role: "CEO, Common Ground",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Getting this right was critical for the business. The result feels sharp, clear, and completely ours.",
    author: "Katrina Miller",
    role: "Director, Eureka Hill",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
  },
  {
    quote: "Results beyond what we could have imagined. The site truly reflects our best work.",
    author: "Syd Martin",
    role: "Partner, Fern & Fellow",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
  }
];

export const faqsData = [
  {
    question: "Who is Project Go a good fit for?",
    answer: "Project Go is designed for founders, service businesses, and high-growth teams that need a custom, high-converting digital presence without the bloat, timeline delays, and excessive pricing of traditional agencies."
  },
  {
    question: "Is the design actually custom?",
    answer: "Yes, 100%. We do not use pre-made generic templates. Every layout, typography selection, color scheme, and interaction is tailored specifically to your brand identity, messaging, and conversion goals."
  },
  {
    question: "How quickly can we launch?",
    answer: "Our standard launch timeline is 4 to 6 weeks from kickoff to deployment, provided feedback rounds are completed promptly according to our structured schedule."
  },
  {
    question: "Do you write the copy?",
    answer: "Yes! High-converting, human-written copy is included as part of The Go Plan. We interview you, extract your unique value proposition, and craft compelling messaging that speaks directly to your ideal clients."
  },
  {
    question: "Can I edit the website myself?",
    answer: "Absolutely. We build clean, intuitive content structures or connect lightweight headless CMS options so you can easily update text, add blog posts, and change images anytime."
  },
  {
    question: "Do I need a finished brand before we begin?",
    answer: "Not necessarily. If you already have brand guidelines, we adhere to them. If you only have a logo or general color direction, we refine and expand it into a cohesive, polished digital design system."
  },
  {
    question: "What does one feedback round mean?",
    answer: "Instead of dozens of chaotic micro-edits across weeks, we deliver complete, coherent milestones. You provide consolidated feedback in one structured pass, allowing us to implement all refinements efficiently."
  },
  {
    question: "What is included in launch support?",
    answer: "We configure domain DNS records, set up SSL certificates, test contact forms and integrations, verify SEO tags and sitemaps, check cross-browser compatibility, and provide a full handover guide."
  },
  {
    question: "What about hosting and ongoing costs?",
    answer: "Astro generates blazing-fast static assets which can be hosted for free or virtually zero cost on high-speed platforms like Vercel, Netlify, or Cloudflare. No mandatory monthly maintenance fees."
  },
  {
    question: "Can you migrate an existing website?",
    answer: "Yes. We preserve existing SEO URL paths or set up 301 redirects to ensure you maintain and improve your search rankings during the transition."
  },
  {
    question: "Can the site grow after launch?",
    answer: "Yes. The architecture is modular and highly scalable. You can add new landing pages, CMS collections, eCommerce features, or join our 'Go Further' monthly support plan."
  },
  {
    question: "What if I need more than the standard scope?",
    answer: "Let us know during the initial discovery call. We can provide a transparent, fixed add-on estimate for additional custom features or custom integrations."
  },
  {
    question: "What happens after launch?",
    answer: "You own 100% of the code, design, and assets with no vendor lock-in. You can self-manage the site or opt into our monthly 'Go Further' retainer for continuous iterations."
  }
];

export const impactData = {
  badge: "GIVING FORWARD",
  headline: "One launch. A\nwider impact.",
  description: "For every Project Go launch, we fund one day of skills training through a local nonprofit helping people build more independent working lives.",
  ctaText: "SEE THE INITIATIVE",
  ctaLink: "#initiative",
  collageImages: [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80"
  ]
};

export const contactData = {
  badge: "READY WHEN YOU ARE",
  headline: "Your site won't\nlaunch itself. We will.",
  description: "Tell us what you are building, what is stuck, and when you would like to go live.",
  form: {
    namePlaceholder: "Your name*",
    emailPlaceholder: "Email*",
    companyPlaceholder: "Company*",
    timelinePlaceholder: "When would you like to launch?",
    messagePlaceholder: "Tell us about the project, the offer, and what needs to change.",
    submitText: "SEND ENQUIRY"
  }
};

export const footerData = {
  brandName: "Project Go",
  readyTag: "[ Ready to go? ]",
  tagline: "One clear plan. One remarkable launch.",
  ctaText: "START NOW",
  ctaLink: "#contact",
  copyright: `© ${new Date().getFullYear()} Project Go Studio. All rights reserved.`,
  madeWith: "Built with Astro & Precision.",
  navSections: [
    {
      title: "NAVIGATE",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Work", href: "#work" },
        { label: "Blog", href: "#blog" },
        { label: "Initiative", href: "#initiative" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "CONNECT",
      links: [
        { label: "X/Twitter", href: "https://x.com" },
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Instagram", href: "https://instagram.com" }
      ]
    }
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "hello@projectgo.com", href: "mailto:hello@projectgo.com" }
  ]
};
