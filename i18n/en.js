window.I18N = window.I18N || {};

window.I18N.en = {
  "meta.title": "Gabriel Aleksandro de Paula | Software Engineering Student",
  "meta.description":
    "Systems Analysis and Development student at Unicamp doing machine learning research and building mobile and web apps. Open to software engineering internships.",
  "meta.ogLocale": "en_US",

  "skip": "Skip to content",
  "lang.switch": "Language: English. Switch to Portuguese",
  "theme.dark": "Dark theme",
  "nav.label": "Main",
  "nav.toggle": "Menu",
  "nav.research": "Research",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.skills": "Skills",
  "nav.education": "Education",
  "nav.contact": "Contact",

  "hero.photoAlt": "Photo of Gabriel Aleksandro de Paula",
  "hero.role": "Systems Analysis and Development student at Unicamp",
  "hero.summary":
    "I do machine learning research and build mobile and web apps. I deployed an AI assistant used publicly, automated data collection pipelines, and used LLMs to accelerate research and development. I'm looking for internships in software development or data.",
  "hero.resume": "Resume (PDF)",
  "hero.email": "Email",

  "resume.href": "assets/resume-en.pdf",
  "resume.file": "Gabriel-Aleksandro-Resume-EN.pdf",
  "resume.lang": ", English",

  "label.stack": "Stack",
  "label.repo": "Repository on GitHub",

  "research.title": "Research",
  "research.intro": "Undergraduate research at the School of Technology (FT), Unicamp.",
  "research.cme.title": "Predicting coronal mass ejections with deep learning",
  "research.cme.meta": "Ongoing · Article in preparation",
  "research.cme.advisor": "Advisor: Prof. Dr. Andre Leon S. Gradvohl",
  "research.cme.desc":
    "A bidirectional LSTM with attention trained on SDO/HMI SHARP time series from the SWAN-SF dataset, cross-matched with the NASA DONKI CME catalog. TSS of 0.78 on the test set (5-fold ensemble). Claude was used as an exploratory analysis partner: interpreting data before training, suggesting directions based on partial results, and accelerating architecture and pipeline decisions.",
  "research.cme.hf": "Model on Hugging Face",
  "research.bug.title": "Code metrics vs. bug-fix effort",
  "research.bug.meta": "Results presented in October 2026",
  "research.bug.advisor": "Advisors: Prof. Dr. Plinio Vilela and Prof. Dr. Pedro Ivo",
  "research.bug.desc":
    "Analyzed how cyclomatic complexity and lines of code relate to bug-fix effort, using data collected from GitHub repositories through the REST and GraphQL APIs. Statistical analysis with Spearman correlation and Kruskal-Wallis tests.",

  "projects.title": "Projects",
  "projects.solar.title": "Solar Weather Assistant",
  "projects.solar.meta": "Personal project · GenAI / RAG · Live demo",
  "projects.solar.desc":
    "RAG chatbot that answers questions about solar physics and space weather. Built the full pipeline — document ingestion, ONNX vector search, and LLM response via Groq API — and optimized memory to deploy on Render’s free tier (512 MB) without PyTorch. Live at solar-weather-assistant.onrender.com.",
  "projects.solar.demo": "Live demo",
  "projects.cme.title": "CME prediction with deep learning",
  "projects.cme.meta": "Undergraduate research · Unicamp/CNPq · Ongoing",
  "projects.cme.desc":
    "Bidirectional LSTM with attention to predict coronal mass ejections from SDO/HMI SHARP time series (SWAN-SF dataset, cross-matched with NASA DONKI). Used Claude for exploratory analysis and architecture decisions. TSS of 0.78 on the test set (5-fold ensemble).",
  "projects.cme.repoSuffix": ": CME prediction with deep learning",
  "projects.cme.hf": "Model on Hugging Face",
  "projects.metrics.title": "Code metrics vs. bug-fix effort",
  "projects.metrics.meta": "Undergraduate research · Unicamp · Results presented Oct 2026",
  "projects.metrics.desc":
    "Automated collection of bug-fix data from GitHub repositories via REST and GraphQL APIs, then analyzed how cyclomatic complexity and lines of code relate to fix effort using Spearman correlation and Kruskal-Wallis tests. Results presented at Unicamp in October 2026.",
  "projects.metrics.repoSuffix": ": code metrics vs. bug-fix effort",
  "projects.prev": "Previous projects",
  "projects.next": "Next projects",
  "projects.adopet.meta": "SI700 Mobile Programming, Unicamp · Team of 3 · In progress",
  "projects.adopet.desc":
    "Mobile app for dog and cat adoption built with Flutter and Firebase for a university course (SI700). Handled authentication, Firestore database and file storage. Built all screens and interactions.",
  "projects.memory.title": "Memory game for the web",
  "projects.memory.meta": "SI401B Web Programming, Unicamp · Final project · Team of 3",
  "projects.memory.desc":
    "Browser memory game with a Bloons TD 6 visual theme, built for a web programming course (SI401B). Responsible for most of the front-end pages and animations.",
  "projects.memory.repoSuffix": ": memory game for the web",

  "experience.title": "Experience",
  "experience.foco.role": "IT Advisor",
  "experience.foco.org": "Tecnologia em Foco, FT Unicamp",
  "experience.foco.dates": "May 2025 – Dec 2025",
  "experience.atria.role": "IT Advisor",
  "experience.atria.org": "Atria Jr., junior enterprise at FT Unicamp",
  "experience.atria.dates": "Jun 2024 – Jan 2025",
  "experience.atria.desc": "Built apps and web pages for clients with Flutter and HTML/CSS.",
  "experience.mbd.role": "QA Intern",
  "experience.mbd.org": "MBD, Lorena, SP",
  "experience.mbd.dates": "Jan 2021 – Jan 2022",
  "experience.mbd.desc": "Automated the full regression test suite in Ruby.",

  "skills.title": "Skills",
  "skills.languages": "Languages",
  "skills.frameworks": "Frameworks and libraries",
  "skills.tools": "Tools and platforms",
  "skills.ruby": "Ruby (test automation)",

  "education.title": "Education",
  "education.degree": "Technology degree in Systems Analysis and Development (TADS)",
  "education.school": "School of Technology (FT), University of Campinas (Unicamp)",
  "certs.title": "HackerRank certifications",

  "contact.title": "Contact",
  "contact.text": "Email is the best way to reach me.",
  "contact.email": "Email",
  "contact.resume": "Resume",
  "contact.resumeLink": "Download PDF"
};
