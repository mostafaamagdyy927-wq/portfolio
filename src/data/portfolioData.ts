export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  goals: string[];
  process: string[];
  architectureFlow: { step: string; title: string; description: string }[];
  technologies: string[];
  challenges: { challenge: string; solution: string }[];
  results: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Data Science & ML" | "AI Automation" | "Web & IoT";
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  resultMetric: string;
  githubUrl: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
  isFlagship: boolean;
  caseStudy?: ProjectCaseStudy;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string;
  altText: string;
  category: "AWS & Cloud" | "Government & ITIDA" | "Data & Databases" | "Programming";
  verified: boolean;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  description: string;
  technologies: string[];
  deliverables: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  badge: string;
  description: string[];
  technologies: string[];
}

export const portfolioData = {
  personal: {
    name: "Mostafa Magdy Abdelhamid Ramadan",
    nameArabic: "مصطفى مجدي عبدالحميد رمضان",
    shortName: "Mostafa Magdy",
    title: "Data Science & AI Automation Engineer",
    tagline: "I build end-to-end data pipelines and AI-driven automation systems — from data collection to deployment.",
    heroSummary: "Fourth-year Data Science student at Helwan University with an Excellent (Emtiaz) academic standing, ranked top of cohort. DEPI Data Engineer Trainee (Cohort 5) & freelance AI automation developer building enterprise bots, ML models, and high-throughput pipelines.",
    location: "Cairo, Egypt",
    email: "mostafaamagdyy927@gmail.com",
    phone: "+20 115 979 8258",
    phoneDisplay: "+20 115 979 8258",
    availability: "Open to High-Impact Opportunities & Freelance",
    experienceLevel: "DEPI Cohort 5 Trainee + Freelance Specialist",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Intermediate (B1)" },
    ],
    social: {
      github: "https://github.com/mostafaamagdyy927-wq",
      linkedin: "https://linkedin.com/in/mostafa-magdy",
      khamsat: "https://khamsat.com/user/mostafa_magdy_ai",
      mostaql: "https://mostaql.com/u/mostafa_magdy_ai",
      whatsapp: "https://wa.me/201159798258",
    },
    cvPath: "/asset/Mostafa_Magdy_CV.pdf",
    avatarPath: "/asset/profile.jpg",
  },

  stats: [
    { label: "ML Prediction Accuracy", value: "87%", suffix: "", desc: "Egyptian Used Car Model" },
    { label: "B2B Leads Automated", value: "10,000", suffix: "+", desc: "Across 31+ Countries" },
    { label: "Gov & MCIT Projects", value: "5", suffix: "+", desc: "Digital Egypt Initiatives" },
    { label: "Academic Standing", value: "Emtiaz", suffix: "", desc: "Top of Cohort Ranking" },
  ],

  about: {
    paragraphs: [
      "Mostafa Magdy is a fourth-year Data Science student at Helwan University's Faculty of International Technology in Cairo, holding an Excellent (Emtiaz) standing and ranking among the top of his class in every term to date. He is currently a Data Engineer Trainee in Cohort 5 of the Digital Egypt Pioneers Initiative (DEPI), a government-backed program run under Egypt's Ministry of Communications and Information Technology.",
      "Alongside his studies, Mostafa works as a freelance AI Automation Developer on Khamsat and Mostaql, where he designs and delivers WhatsApp booking assistants, AI outbound calling bots, lead-generation systems, and personal AI executive assistants for real clients — handling everything himself, from data ingestion and pipeline design to deployment on self-hosted VPS infrastructure.",
      "He has worked on more than 5 projects in collaboration with Egypt's Ministry of Communications and Information Technology, and his freelance and academic work spans sales and customer-behavior analysis, profit forecasting and trend analysis, and building smart automation solutions that streamline operations and improve efficiency for clients.",
      "His post-graduation goal is to combine a role as a معيد (teaching assistant) at his faculty with a position at a company in the data/AI field, working toward his longer-term ambition of founding his own technology company.",
    ],
    highlights: [
      {
        title: "Academic Distinction",
        desc: "Consistently ranked top of cohort with Emtiaz (Excellent) marks across all university terms.",
        icon: "GraduationCap",
      },
      {
        title: "DEPI Data Engineer Trainee",
        desc: "Selected for Egypt's prestigious government-backed MCIT Digital Egypt Pioneers Initiative (Cohort 5).",
        icon: "ShieldCheck",
      },
      {
        title: "Full-Stack AI Automations",
        desc: "Delivering production WhatsApp bots, outbound AI callers, and scrapers for clients across the MENA region.",
        icon: "Cpu",
      },
      {
        title: "Future Vision",
        desc: "Aspiring university teaching assistant (معيد) and future tech enterprise founder in AI automation.",
        icon: "Rocket",
      },
    ],
  },

  skillsCategories: [
    {
      id: "programming",
      title: "Programming & Databases",
      icon: "Code",
      description: "Core languages and database engines for high-performance data systems.",
      skills: [
        { name: "Python", highlight: true },
        { name: "SQL", highlight: true },
        { name: "PostgreSQL" },
        { name: "SQLite" },
        { name: "Supabase", highlight: true },
      ],
    },
    {
      id: "data-science",
      title: "Data Science & Machine Learning",
      icon: "Brain",
      description: "Statistical modeling, predictive algorithms, exploratory analysis, and data curation.",
      skills: [
        { name: "Scikit-learn", highlight: true },
        { name: "Pandas", highlight: true },
        { name: "NumPy" },
        { name: "Machine Learning", highlight: true },
        { name: "Data Analysis" },
        { name: "Data Cleaning" },
        { name: "Exploratory Data Analysis (EDA)" },
        { name: "Excel Advanced" },
      ],
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Pipelines",
      icon: "Database",
      description: "Robust ETL architectures, resilient scrapers, and data transformation pipelines.",
      skills: [
        { name: "ETL Pipelines", highlight: true },
        { name: "Web Scraping", highlight: true },
        { name: "Apify Scraping", highlight: true },
        { name: "Elasticsearch-style APIs" },
        { name: "RESTful APIs" },
        { name: "Data Pipelines" },
        { name: "Relational Databases" },
        { name: "Docker" },
      ],
    },
    {
      id: "ai-automation",
      title: "AI & Autonomous Agents",
      icon: "Bot",
      description: "Multi-agent workflows, conversational LLMs, and webhook orchestration.",
      skills: [
        { name: "n8n Workflows", highlight: true },
        { name: "Claude API / Anthropic", highlight: true },
        { name: "Multi-Agent AI Systems", highlight: true },
        { name: "Conversational AI Agents" },
        { name: "Prompt Engineering" },
        { name: "Telegram Bots" },
        { name: "OpenAI / Groq API", highlight: true },
      ],
    },
    {
      id: "integrations",
      title: "Integrations & Cloud Infrastructure",
      icon: "Cloud",
      description: "Enterprise telephony, speech synthesis, cloud storage, and self-hosted VPS.",
      skills: [
        { name: "Twilio Telephony", highlight: true },
        { name: "ElevenLabs (Arabic TTS)", highlight: true },
        { name: "Amazon Polly" },
        { name: "Cloudinary" },
        { name: "Supabase Auth & DB" },
        { name: "VPS Linux Deployment", highlight: true },
      ],
    },
    {
      id: "web-dev",
      title: "Web Development",
      icon: "Layout",
      description: "Modern web frontends and microservice backends for interactive data dashboards.",
      skills: [
        { name: "Next.js", highlight: true },
        { name: "TypeScript" },
        { name: "Flask (Python)", highlight: true },
        { name: "HTML5 & Modern CSS" },
        { name: "JavaScript" },
        { name: "Bootstrap & Tailwind" },
      ],
    },
    {
      id: "iot",
      title: "Embedded Systems & IoT",
      icon: "Radio",
      description: "Hardware microcontrollers, sensor integration, and real-time telemetry streaming.",
      skills: [
        { name: "ESP32", highlight: true },
        { name: "Flex Sensors" },
        { name: "MPU6050 (6-Axis)" },
        { name: "Embedded C / Arduino" },
        { name: "Sensor Telemetry" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: "depi",
      role: "Data Engineer Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI), Cohort 5",
      location: "Ministry of Communications and Information Technology, Cairo, Egypt",
      period: "06/2026 – 01/2027",
      current: true,
      badge: "Government Initiative",
      description: [
        "Selected for competitive, government-sponsored national initiative under Egypt's Ministry of Communications and Information Technology (MCIT).",
        "Undergoing rigorous technical training on the dedicated Data Engineer track: architecting scalable data pipelines, automated ETL workflows, relational schema design, and enterprise data warehousing.",
        "Collaborated on 5+ ministry-affiliated data projects, implementing clean data modeling, SQL optimization, and end-to-end processing.",
      ],
      technologies: ["Python", "SQL", "ETL Pipelines", "Relational Databases", "Docker", "Data Modeling"],
    },
    {
      id: "freelance",
      role: "Freelance AI Automation Developer & Data Analyst",
      company: "Self-Employed (Khamsat & Mostaql)",
      location: "Remote | Cairo, Egypt",
      period: "2026 – Present",
      current: true,
      badge: "Client-Delivered Systems",
      description: [
        "Sourced enterprise clients via outbound LinkedIn outreach and top-rated freelance service listings on Khamsat and Mostaql.",
        "Delivered end-to-end sales and customer-behavior analysis using Python and Excel, uncovering high-margin revenue drivers and structural profit opportunities.",
        "Designed and deployed production AI WhatsApp booking assistants, outbound AI voice calling bots, and multi-agent schedulers using n8n, Twilio, Meta Cloud API, and Arabic TTS.",
        "Orchestrated large-scale B2B lead generation capturing 10,000+ targeted corporate records across 31 countries for fertilizer exporters with high data fidelity.",
        "Managed complete delivery lifecycle: requirements discovery, data cleaning, pipeline engineering, VPS hosting, and client handoff.",
      ],
      technologies: ["n8n", "Claude API", "Twilio", "Meta WhatsApp API", "ElevenLabs", "Apify", "Python", "Supabase"],
    },
  ] as ExperienceItem[],

  education: {
    degree: "B.Sc. in Data Science",
    institution: "Helwan University, Faculty of International Technology",
    location: "Cairo, Egypt",
    period: "2023 – Expected 2027",
    standing: "Excellent (Emtiaz) — Ranked Top of Cohort",
    standingNote: "Maintained Excellent (Emtiaz) marks across every semester to date, ranked among the very top students.",
    coursework: [
      "Machine Learning & Statistical Modeling",
      "Data Analysis & Exploratory Visualization",
      "Applied Statistics & Probability",
      "Relational Databases & SQL Optimization",
      "Data Structures & Algorithms",
      "Python Programming & Scientific Computing",
    ],
    aspirations: "Preparing for Department Teaching Assistant (معيد) position post-graduation while founding an applied AI automation venture.",
  },

  projects: [
    {
      id: "used-car-prediction",
      title: "Used Car Price Prediction Model",
      subtitle: "End-to-end ML pipeline predicting Egyptian vehicle resale valuations",
      category: "Data Science & ML",
      description: "An end-to-end machine learning system trained on freshly scraped Egyptian market data to provide reliable, objective used car valuations.",
      problem: "The Egyptian used car marketplace suffers from extreme price volatility and lacks transparent, data-driven pricing benchmarks, leaving buyers and sellers vulnerable to speculation.",
      solution: "Engineered an automated ingestion pipeline that extracted live listing data from hatla2ee.com via a reverse-engineered Elasticsearch-style API endpoint. Conducted extensive feature engineering, cleaned noisy localized Arabic text, and benchmarked Random Forest against Linear Regression models.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Web Scraping", "Elasticsearch API", "Data Cleaning"],
      resultMetric: "87% Accuracy (R² Score)",
      githubUrl: "https://github.com/mostafaamagdyy927-wq/used-car-price-prediction",
      demoUrl: "https://github.com/mostafaamagdyy927-wq/used-car-price-prediction#demo",
      image: "/asset/projects/used-car-model.png",
      featured: true,
      isFlagship: true,
      caseStudy: {
        overview: "A comprehensive machine learning research and engineering project designed to solve real-world price opacity in Egypt's used automotive market.",
        problem: "No official or transparent pricing dataset exists for the Egyptian used-car market. Macroeconomic inflation and currency shifts caused rapid fluctuations, making manual valuation unreliable and error-prone.",
        goals: [
          "Scrape high-volume, reliable automobile market data directly from leading Egyptian automotive portal hatla2ee.com.",
          "Preprocess, normalize, and engineer decisive features (make, model, year, transmission, odometer, location, currency trends).",
          "Train and compare multiple regression models to achieve production-grade predictive accuracy above 85%.",
          "Package model artifacts for instantaneous valuation queries.",
        ],
        process: [
          "Target Discovery: Inspected network traffic to uncover hatla2ee's Elasticsearch backend endpoint rather than relying on brittle HTML parsing.",
          "Data Ingestion: Harvested tens of thousands of active automobile records with custom rate-limiting and pagination logic.",
          "Preprocessing & Outlier Removal: Implemented IQR anomaly filters, normalized Arabic automotive text variations, and imputed missing values.",
          "Feature Engineering: Created categorical encodings for brands/models, age decay vectors, and governorate demand indicators.",
          "Model Training: Cross-validated Random Forest Regressor, Linear Regression, and Ridge models.",
          "Evaluation: Random Forest yielded superior non-linear capture, achieving an 87% R² score with minimized mean absolute error.",
        ],
        architectureFlow: [
          { step: "01", title: "API Ingestion", description: "Elasticsearch endpoint scraper pulls structured vehicle records" },
          { step: "02", title: "ETL & Cleaning", description: "Pandas pipeline deduplicates, removes currency anomalies, and normalizes" },
          { step: "03", title: "Feature Matrix", description: "One-hot encodings, mileage bins, model age decay coefficients" },
          { step: "04", title: "Model Benchmark", description: "Hyperparameter-tuned Random Forest Regressor vs Linear Regression" },
          { step: "05", title: "Inference Engine", description: "Pre-trained estimator generates real-time valuation with confidence intervals" },
        ],
        technologies: ["Python 3.10+", "Pandas", "Scikit-learn", "Requests", "NumPy", "Matplotlib / Seaborn", "Joblib"],
        challenges: [
          {
            challenge: "Egyptian automotive listings contained highly inconsistent Arabic model names and mixed currency notations.",
            solution: "Designed custom regex pattern normalization dictionaries and price boundary heuristics to standardize every listing into canonical EGP units.",
          },
          {
            challenge: "HTML page scraping was throttled and prone to DOM structure updates.",
            solution: "Discovered and reverse-engineered the internal Elasticsearch API payload used by hatla2ee, boosting ingestion speed by 10x with zero DOM fragility.",
          },
        ],
        results: [
          "Achieved an outstanding 87% R² validation score on unseen vehicle test sets.",
          "Successfully ingested and structured 135,000+ car listings across 27 Egyptian governorates.",
          "Reduced valuation variance from subjective human estimates down to a tight predictive distribution.",
        ],
        githubUrl: "https://github.com/mostafaamagdyy927-wq/used-car-price-prediction",
      },
    },

    {
      id: "project-o-assistant",
      title: 'AI Personal Executive Assistant ("Project O")',
      subtitle: "Multi-agent orchestration ecosystem automating calendars, emails, and CRM tasks",
      category: "AI Automation",
      description: "An autonomous multi-agent assistant that accepts natural language instructions via Telegram and delegates execution across 5 specialized domain sub-agents.",
      problem: "High-volume professionals lose 2+ hours daily context-switching across Gmail, Google Calendar, Google Tasks, and contact records to coordinate schedules and manage communication.",
      solution: "Engineered 'Project O', an AI agent system powered by Claude API. Incoming Telegram messages are parsed by a primary orchestrator agent that interprets intent and dispatches tasks to 5 specialized sub-agents hooked to Google Workspace APIs and a Supabase state database.",
      technologies: ["Claude API", "Python", "Telegram Bot API", "Google Calendar API", "Gmail API", "Google Tasks API", "Google Contacts API", "Supabase", "VPS Deployment"],
      resultMetric: "5 Sub-Agents Unified in Real-Time",
      githubUrl: "https://github.com/mostafaamagdyy927-wq/project-o-executive-assistant",
      demoUrl: "https://github.com/mostafaamagdyy927-wq/project-o-executive-assistant#demo",
      image: "/asset/projects/project-o-assistant.png",
      featured: true,
      isFlagship: true,
      caseStudy: {
        overview: "A state-of-the-art multi-agent executive automation system that turns a private Telegram conversation into a full operational command center.",
        problem: "Executives and freelancers struggle with administrative overhead: checking calendars before scheduling meetings, drafting routine confirmation emails, updating task lists, and maintaining CRM contacts across disparate tools.",
        goals: [
          "Create a zero-friction mobile interface via Telegram for voice and text commands.",
          "Decompose complex user requests into discrete, deterministic actions using Anthropic's Claude API.",
          "Build 5 specialized sub-agents with strict domain isolation and Google Workspace OAuth access.",
          "Persist conversational memory and execution logs securely in Supabase.",
        ],
        process: [
          "Ingestion & Routing: Telegram webhook triggers Python async gateway; Claude parses intent into JSON function schemas.",
          "Agent Delegation: Tasks are mapped to Calendar Agent, Email Agent, Task Agent, Contacts Agent, or Database Agent.",
          "Execution & Verification: Sub-agents run OAuth-authenticated operations with dry-run confirmations for sensitive writes.",
          "Response Synthesis: Results are formatted into concise Markdown and returned directly to Telegram in under 2 seconds.",
        ],
        architectureFlow: [
          { step: "01", title: "Telegram Client", description: "User sends voice note or message (e.g. 'Book a call with Dr. Ahmed tomorrow at 3pm')" },
          { step: "02", title: "Claude Core Orchestrator", description: "Performs intent recognition, entity extraction, and multi-agent dispatch" },
          { step: "03", title: "Domain Sub-Agents", description: "Calendar (GCal), Communication (Gmail), Tasks (GTasks), Contacts, CRM (Supabase)" },
          { step: "04", title: "State & Audit Log", description: "Supabase records action status, session variables, and conversation lineage" },
          { step: "05", title: "Instant Notification", description: "Telegram delivers confirmation card with meeting link and agenda details" },
        ],
        technologies: ["Claude 3.5 Sonnet", "Python AsyncIO", "Google Workspace APIs", "Supabase (PostgreSQL)", "Telegram Bot SDK", "Docker / Linux VPS"],
        challenges: [
          {
            challenge: "Ambiguous user instructions with relative dates (e.g., 'next Tuesday morning') caused calendar scheduling conflicts.",
            solution: "Built a dynamic temporal context injector that calculates user timezone offsets and prompts for clarification if two schedule slots collide.",
          },
          {
            challenge: "Token latency and rate limits on LLM API calls during rapid conversation turns.",
            solution: "Implemented prompt caching and lightweight routing heuristics that bypass the LLM for direct deterministic command matches.",
          },
        ],
        results: [
          "Replaced 5 separate browser apps with a single mobile Telegram interface.",
          "Reduced average meeting scheduling and email drafting time from 8 minutes down to 10 seconds.",
          "Maintained 99.8% uptime deployed on a self-managed Linux VPS container.",
        ],
        githubUrl: "https://github.com/mostafaamagdyy927-wq/project-o-executive-assistant",
      },
    },

    {
      id: "saip-diagnostics",
      title: "SAIP: Smart Automotive Diagnostics Platform",
      subtitle: "AI predictive maintenance platform accepted into national government competition",
      category: "Data Science & ML",
      description: "A 12-person team graduation project selected for a prestigious national government tech competition. Mostafa spearheaded the AI modeling, predictive algorithms, data analytics, and Flutter mobile telemetry.",
      problem: "Industrial vehicle fleets suffer catastrophic breakdowns due to unexpected component failures, resulting in massive downtime, safety hazards, and exorbitant repair bills.",
      solution: "Constructed an end-to-end predictive maintenance ML pipeline trained on the AI4I 2020 Predictive Maintenance Dataset. Benchmarked multiple classifiers with full exploratory data analysis, cross-validation, and serialized model weights. Partnered in developing the React + TypeScript + Vite + Tailwind web dashboard and FastAPI backend skeleton.",
      technologies: ["Python", "Scikit-learn", "React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "Flutter", "AI4I Dataset"],
      resultMetric: "National Gov Competition Finalist",
      githubUrl: "https://github.com/mostafaamagdyy927-wq/saip-diagnostics-platform",
      demoUrl: "https://github.com/mostafaamagdyy927-wq/saip-diagnostics-platform#demo",
      image: "/asset/projects/saip-automotive.png",
      featured: true,
      isFlagship: true,
      caseStudy: {
        overview: "A national award-competing automotive telematics and predictive maintenance platform engineered to prevent commercial vehicle breakdowns through machine learning.",
        problem: "Automotive fleet operators lack proactive diagnostic capabilities. Fleet telematics typically trigger alerts only after irreversible mechanical failures have already occurred.",
        goals: [
          "Engineer an AI engine capable of predicting impending tool wear, heat dissipation failures, and power strain before they happen.",
          "Analyze and validate high-frequency sensor readings (air temp, process temp, rotational speed, torque, tool wear).",
          "Deliver an interactive real-time dashboard for fleet operations managers.",
          "Compete in Egypt's national government technology challenge as a flagship engineering innovation.",
        ],
        process: [
          "Dataset Exploration: Analyzed 10,000 synthetic sensor datapoints from AI4I 2020 reflecting real milling/telemetry processes.",
          "Imbalanced Class Handling: Applied SMOTE and class-weight balancing to overcome extreme failure class rarity (< 3.5%).",
          "Model Tournament: Trained Random Forest, XGBoost, and Support Vector Classifiers; evaluated via PR-AUC and ROC-AUC rather than raw accuracy.",
          "Microservice Architecture: Connected trained models into FastAPI microservices serving inference predictions to React & Flutter frontends.",
        ],
        architectureFlow: [
          { step: "01", title: "Sensor Telemetry", description: "Torque, rotational speed, temperature differential streams ingested via API" },
          { step: "02", title: "Anomaly Detection", description: "FastAPI inference layer scores probability of 5 specific failure modes" },
          { step: "03", title: "Fleet Management UI", description: "React + TypeScript dashboard renders live gauges and risk priority queues" },
          { step: "04", title: "Mobile Alerting", description: "Flutter companion app notifies drivers and technicians with maintenance orders" },
        ],
        technologies: ["Python", "Scikit-learn", "FastAPI", "React 18", "TypeScript", "Tailwind CSS", "Vite", "Flutter"],
        challenges: [
          {
            challenge: "Heavy class imbalance in mechanical failure datasets caused naive models to predict 99% 'healthy' while missing true faults.",
            solution: "Tuned precision-recall trade-offs with cost-sensitive loss penalties and stratified K-fold validation, maximizing critical fault recall.",
          },
          {
            challenge: "Coordinating development across a 12-engineer multidisciplinary team.",
            solution: "Established strict API schema contracts via OpenAPI/Swagger, enabling AI modeling, frontend, and mobile teams to build simultaneously.",
          },
        ],
        results: [
          "Accepted and showcased in Egypt's national government technology innovation competition.",
          "Successfully predicted over 94% of component failure modes prior to critical breakdown thresholds.",
          "Built a modern, ultra-responsive dashboard in React and Flutter for both desktop control rooms and mobile technicians.",
        ],
        githubUrl: "https://github.com/mostafaamagdyy927-wq/saip-diagnostics-platform",
      },
    },

    {
      id: "whatsapp-booking-bot",
      title: "AI WhatsApp Booking Assistant",
      subtitle: "Automated rental apartment reservations and customer support on WhatsApp",
      category: "AI Automation",
      description: "An AI-powered conversational booking agent delivered for a commercial rental-apartments client, eliminating manual reservation management entirely.",
      problem: "The client was losing high-intent apartment rental leads due to delayed WhatsApp replies during off-hours and double-booking errors.",
      solution: "Built a fully autonomous n8n workflow leveraging the AI Agent pattern and Meta WhatsApp Cloud API. The bot checks live calendar availability in Google Sheets, negotiates check-in dates, captures tenant IDs, and finalizes bookings in real-time.",
      technologies: ["n8n (AI Agent Pattern)", "Meta WhatsApp Cloud API", "Google Sheets", "Webhooks", "Prompt Engineering"],
      resultMetric: "100% Automated Bookings",
      githubUrl: "https://github.com/mostafaamagdyy927-wq/ai-whatsapp-booking-assistant",
      image: "/asset/projects/whatsapp-booking.png",
      featured: false,
      isFlagship: false,
    },

    {
      id: "outbound-calling-bot",
      title: "AI Outbound Calling Bot",
      subtitle: "Automated voice agent conducting Arabic lead qualification calls",
      category: "AI Automation",
      description: "A production AI telephone agent built for agricultural export leader ROWAD EL SHAREQ EXPORT to qualify international trade leads.",
      problem: "Cold-calling thousands of export prospects manually was cost-prohibitive, inconsistent, and exhausted the internal sales staff.",
      solution: "Engineered an AI outbound telephony system orchestrated in n8n with Twilio voice trunks, OpenAI / Groq low-latency reasoning, ElevenLabs Arabic text-to-speech, and automatic Google Sheets logging.",
      technologies: ["n8n", "Twilio Voice API", "OpenAI / Groq", "ElevenLabs (Arabic TTS)", "Google Sheets", "Telegram Alerts"],
      resultMetric: "14,000+ Calls Automated",
      githubUrl: "https://github.com/mostafaamagdyy927-wq/ai-outbound-calling-bot",
      image: "/asset/projects/outbound-calling.png",
      featured: false,
      isFlagship: false,
    },

    {
      id: "b2b-lead-generation",
      title: "B2B Lead Generation at Scale",
      subtitle: "Global market intelligence pipeline capturing 10,000+ fertilizer importer leads",
      category: "Data Science & ML",
      description: "A large-scale international B2B lead acquisition project delivered for ROWAD EL SHAREQ EXPORT, mapping commercial fertilizer importers across 31+ countries.",
      problem: "The enterprise client needed a massive expansion of distributor leads across Africa, Latin America, Europe, and Asia without paying tens of thousands to data brokers.",
      solution: "Built a high-throughput Apify Google Maps scraper and enterprise directory crawler, followed by automated email verification, deduplication, and classification into a master structured Excel dataset.",
      technologies: ["Apify", "Google Maps Scraper", "Excel / Google Sheets", "Data Cleansing", "Python"],
      resultMetric: "10,480+ Leads in 31 Countries",
      githubUrl: "https://github.com/mostafaamagdyy927-wq/b2b-lead-generation-scale",
      image: "/asset/projects/b2b-leadgen.png",
      featured: false,
      isFlagship: false,
    },

    {
      id: "smart-gloves-iot",
      title: "Smart Gloves: Assistive IoT Device",
      subtitle: "Real-time sign language gesture recognition to speech system",
      category: "Web & IoT",
      description: "An assistive embedded hardware glove that translates the full English sign language alphabet into real-time spoken audio and text on a web dashboard.",
      problem: "Mute and speech-impaired individuals face severe communication barriers in daily society, with few accessible, lightweight translation solutions available.",
      solution: "Constructed hardware gloves with 5 flex sensors and an MPU6050 gyroscope connected to an ESP32 microcontroller. Wrote embedded C code to stream 50Hz telemetry to a Flask web server running a gesture classification algorithm and audio synthesizer.",
      technologies: ["ESP32", "Flex Sensors", "MPU6050", "Flask", "Python", "Bootstrap", "HTML5/CSS", "Embedded C"],
      resultMetric: "Full A-Z Alphabet Recognized",
      githubUrl: "https://github.com/mostafaamagdyy927-wq/smart-gloves-iot-assistive",
      image: "/asset/projects/smart-gloves.svg",
      featured: false,
      isFlagship: false,
    },
  ] as Project[],

  services: [
    {
      id: "data-analysis",
      title: "Data Analysis & Reporting",
      icon: "BarChart3",
      shortDesc: "Turn messy, raw operational data into pristine, actionable dashboards and executive reports.",
      description: "End-to-end sales and customer-behavior analysis. I organize unstructured, raw company data into clean, structured reports that empower stakeholders to make confident, data-backed decisions.",
      technologies: ["Python", "Pandas", "Excel", "Data Cleaning", "Matplotlib / Power BI"],
      deliverables: [
        "Customer behavior & segmentation breakdown",
        "Product margin & sales performance reports",
        "Executive summary dashboards with actionable KPIs",
        "Automated recurring reporting scripts",
      ],
    },
    {
      id: "profit-forecasting",
      title: "Profit Forecasting & Trend Analysis",
      icon: "TrendingUp",
      shortDesc: "Predict future revenue streams and market trajectories with statistical machine learning.",
      description: "Predictive models and quantitative dashboards built to analyze revenue cycles, detect seasonal demand swings, and forecast upcoming profit trends with statistical confidence intervals.",
      technologies: ["Scikit-learn", "Time Series", "Regression Models", "NumPy", "Pandas"],
      deliverables: [
        "Historical revenue and sales trend decomposition",
        "Predictive cash flow & demand forecasting",
        "Risk sensitivity analysis",
        "Interactive scenario modeling tools",
      ],
    },
    {
      id: "ai-chatbots",
      title: "AI Automation & Chatbots",
      icon: "MessageSquareCode",
      shortDesc: "24/7 autonomous WhatsApp, Telegram, and web conversational agents that close deals.",
      description: "Production conversational AI agents built with n8n and advanced LLM APIs (Claude, OpenAI, Groq). Capable of multi-step reasoning, checking calendar slots, booking appointments, and integrating directly into your CRM.",
      technologies: ["n8n", "Meta WhatsApp API", "Claude API", "OpenAI / Groq", "Supabase"],
      deliverables: [
        "WhatsApp booking and customer support bots",
        "Telegram enterprise executive bots",
        "Multi-agent reasoning workflows with tool use",
        "CRM & Google Sheets two-way sync",
      ],
    },
    {
      id: "process-automation",
      title: "Smart Process Automation",
      icon: "Workflow",
      shortDesc: "Eliminate repetitive human toil with resilient, self-healing automated workflows.",
      description: "End-to-end automation workflows that bridge your fragmented business apps. From lead capture and automated email drafting to invoicing and internal notifications, cutting hours of manual labor daily.",
      technologies: ["n8n", "Webhooks", "REST APIs", "Python", "Google Workspace APIs", "VPS"],
      deliverables: [
        "Cross-platform workflow orchestrations",
        "Automated document & invoice generation",
        "Webhook event listeners and retry mechanisms",
        "Self-hosted Linux VPS deployment for 99.9% uptime",
      ],
    },
    {
      id: "lead-generation",
      title: "B2B Lead Generation at Scale",
      icon: "Target",
      shortDesc: "Harvest thousands of validated, decision-maker B2B contacts across worldwide target markets.",
      description: "Automated, large-scale B2B lead sourcing pipelines. I build bespoke web scrapers and directory crawlers that deliver cleaned, enriched, and validated lead rosters directly into master spreadsheets.",
      technologies: ["Apify", "Web Scraping", "Google Maps Crawlers", "Email Verification", "Excel"],
      deliverables: [
        "Thousands of niche B2B leads by industry & country",
        "Verified emails, direct telephone lines, and company websites",
        "Clean, deduplicated Excel & CSV master datasets",
        "Continuous automated scraping schedules",
      ],
    },
    {
      id: "machine-learning",
      title: "Custom Machine Learning Models",
      icon: "Sparkles",
      shortDesc: "Bespoke predictive algorithms, classifiers, and recommender engines built from scratch.",
      description: "From data collection and feature engineering to model validation and API deployment. Specialized in pricing prediction, predictive maintenance, customer churn classification, and anomaly detection.",
      technologies: ["Python", "Scikit-learn", "FastAPI", "Docker", "Feature Engineering"],
      deliverables: [
        "Custom classification and regression algorithms",
        "Rigorous exploratory analysis and cross-validation reports",
        "Lightweight REST API endpoints for live inferences",
        "Documented codebases ready for production scaling",
      ],
    },
  ] as Service[],

  certifications: [
    {
      id: "aws-ai-practitioner",
      title: "AWS AI Practitioner Challenge",
      issuer: "Udacity (Accredited by Accenture)",
      date: "April 2026",
      credentialId: "Awarded to Mostafa Magdy Abdelhamid",
      image: "/asset/certificates/aws-ai-practitioner.jpeg",
      altText: "AWS AI Practitioner Challenge Certificate awarded by Udacity and Accenture to Mostafa Magdy Abdelhamid in April 2026",
      category: "AWS & Cloud",
      verified: true,
    },
    {
      id: "aws-partyrock-scholars",
      title: "AWS AI & ML Scholars — Analyze Data using AI with PartyRock",
      issuer: "Udacity + Amazon Web Services (AWS)",
      date: "2026",
      credentialId: "AWS AI & ML Scholars Project Completion",
      image: "/asset/certificates/aws-partyrock-scholars.jpeg",
      altText: "Certificate of Project Completion for Analyze Data using AI with PartyRock under the AWS AI and ML Scholars Program by Udacity and AWS",
      category: "AWS & Cloud",
      verified: true,
    },
    {
      id: "database-fundamentals-maharatech",
      title: "Database Fundamentals",
      issuer: "Mahara-Tech (ITI e-Learning Platform)",
      date: "26/04/2026",
      credentialId: "Information Technology Institute (ITI)",
      image: "/asset/certificates/database-fundamentals-maharatech.jpeg",
      altText: "Database Fundamentals Certificate of Completion issued to Mostafa Magdy Abdelhamid by Mahara-Tech ITI e-Learning Platform on April 26 2026",
      category: "Data & Databases",
      verified: true,
    },
    {
      id: "ai-course-itida-eme",
      title: "Artificial Intelligence Course (20 Hours)",
      issuer: "ITIDA • EME • QIS (Origin Integrated Systems) • CREATIVA",
      date: "19/04/2026 – 23/04/2026",
      credentialId: "MCIT & ITIDA Innovation Centers (CREATIVA)",
      image: "/asset/certificates/ai-course-itida-eme.jpeg",
      altText: "Official 20-hour Artificial Intelligence Course Certificate issued by ITIDA, EME, Origin Integrated Systems, and CREATIVA to Mostafa Magdy",
      category: "Government & ITIDA",
      verified: true,
    },
    {
      id: "intro-sql-datacamp",
      title: "Introduction to SQL",
      issuer: "DataCamp",
      date: "February 23, 2026",
      credentialId: "DataCamp Statement of Accomplishment",
      image: "/asset/certificates/intro-sql-datacamp.jpeg",
      altText: "DataCamp Statement of Accomplishment for Introduction to SQL completed by Mostafa Magdy on February 23 2026",
      category: "Data & Databases",
      verified: true,
    },
    {
      id: "itida-gigs-freelance",
      title: "ITIDA Gigs — 3-Month Freelance Training Program",
      issuer: "ITIDA & eYouth (Certificate of Achievement)",
      date: "2026",
      credentialId: "ITIDA Ministry of Communications Freelance Track",
      image: "/asset/certificates/itida-gigs-freelance.jpeg",
      altText: "Certificate of Achievement for the 3-Month Freelance Training Program ITIDA Gigs issued by ITIDA and eYouth to Mostafa Magdy",
      category: "Government & ITIDA",
      verified: true,
    },
    {
      id: "oop-it-sharks",
      title: "Object Oriented Programming (OOP)",
      issuer: "IT Sharks Platform",
      date: "01/09/2026",
      credentialId: "Cert. No. C-412967",
      image: "/asset/certificates/oop-it-sharks.jpeg",
      altText: "Object Oriented Programming Certificate No C-412967 issued to Mostafa Magdy by IT Sharks Platform on September 1 2026",
      category: "Programming",
      verified: true,
    },
    {
      id: "python-maharatech",
      title: "Python Programming Basics",
      issuer: "Mahara-Tech (ITI Cybersecurity Academy)",
      date: "2026",
      credentialId: "Cybersecurity Foundation Level — ITI",
      image: "/asset/certificates/python-maharatech.jpeg",
      altText: "Python Programming Basics Certificate issued to Mostafa Magdy by Mahara-Tech and the ITI Cybersecurity Academy",
      category: "Programming",
      verified: true,
    },
    {
      id: "tuwaiq-satr",
      title: "SATR Program Certification",
      issuer: "Tuwaiq Academy (Saudi Arabia)",
      date: "2026",
      credentialId: "Tuwaiq SATR Tech Track",
      image: "/asset/certificates/tuwaiq-satr-badge.svg",
      altText: "Tuwaiq Academy SATR Program Credential Badge in modern software and technology skills",
      category: "Programming",
      verified: true,
    },
  ] as Certification[],

  navItems: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};
