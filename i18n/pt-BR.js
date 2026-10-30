window.I18N = window.I18N || {};

window.I18N["pt-BR"] = {
  "meta.title": "Gabriel Aleksandro de Paula | Estudante de Engenharia de Software",
  "meta.description":
    "Estudante de Análise e Desenvolvimento de Sistemas na Unicamp, com pesquisa em machine learning e projetos de apps mobile e web. Em busca de estágio em desenvolvimento de software.",
  "meta.ogLocale": "pt_BR",

  "skip": "Pular para o conteúdo",
  "lang.switch": "Idioma: português. Mudar para inglês",
  "theme.dark": "Tema escuro",
  "nav.label": "Principal",
  "nav.toggle": "Menu",
  "nav.research": "Pesquisa",
  "nav.projects": "Projetos",
  "nav.experience": "Experiência",
  "nav.skills": "Competências",
  "nav.education": "Formação",
  "nav.contact": "Contato",

  "hero.photoAlt": "Foto de Gabriel Aleksandro de Paula",
  "hero.role": "Estudante de Análise e Desenvolvimento de Sistemas na Unicamp",
  "hero.summary":
    "Faço pesquisa em machine learning e desenvolvo apps mobile e web. Também automatizei toda a suíte de testes de regressão como estagiário de QA. Estou em busca de estágio em desenvolvimento de software ou dados.",
  "hero.resume": "Currículo (PDF)",
  "hero.email": "E-mail",

  "resume.href": "assets/resume-pt.pdf",
  "resume.file": "Gabriel-Aleksandro-Curriculo-PT.pdf",
  "resume.lang": ", em português",

  "label.overview": "Visão geral",
  "label.role": "Minha atuação",
  "label.stack": "Tecnologias",
  "label.repo": "Repositório no GitHub",

  "research.title": "Pesquisa",
  "research.intro": "Iniciação científica na Faculdade de Tecnologia (FT) da Unicamp.",
  "research.cme.title": "Previsão de ejeções de massa coronal com deep learning",
  "research.cme.meta": "Em andamento · Artigo em preparação",
  "research.cme.advisor": "Orientador: Prof. Dr. Andre Leon S. Gradvohl",
  "research.cme.desc":
    "Rede LSTM bidirecional com mecanismo de atenção, treinada com séries temporais SHARP do SDO/HMI (base SWAN-SF) e cruzadas com o catálogo de CMEs DONKI, da NASA.",
  "research.bug.title": "Métricas de código e esforço de correção de bugs",
  "research.bug.meta": "Resultados apresentados em outubro de 2026",
  "research.bug.advisor": "Orientadores: Prof. Dr. Plinio Vilela e Prof. Dr. Pedro Ivo",
  "research.bug.desc":
    "Análise da relação entre complexidade ciclomática, linhas de código e o esforço para corrigir bugs, com dados coletados de repositórios do GitHub pelas APIs REST e GraphQL. Análise estatística com correlação de Spearman e teste de Kruskal-Wallis.",

  "projects.title": "Projetos",
  "projects.solar.title": "Solar Weather Assistant",
  "projects.solar.meta": "Projeto pessoal · GenAI / RAG · Deploy público",
  "projects.solar.overview":
    "Assistente de IA especializado em física solar e clima espacial. Usa RAG (retrieval-augmented generation) com ChromaDB, LangChain e LLaMA para responder perguntas sobre previsão de flares e CMEs com base em artigos científicos.",
  "projects.solar.role":
    "Desenvolvi o pipeline RAG completo: ingestão de documentos, busca vetorial com embeddings ONNX e geração de respostas via API Groq. Deploy no Render com otimização de memória para caber no free tier (512 MB).",
  "projects.solar.demo": "Demo ao vivo",
  "projects.cme.title": "Previsão de CMEs com deep learning",
  "projects.cme.meta": "Iniciação científica · UNICAMP/CNPq · Em andamento",
  "projects.cme.overview":
    "Rede LSTM bidirecional com mecanismo de atenção para prever ejeções de massa coronal (CMEs) a partir de séries temporais SHARP do SDO/HMI, cruzadas com o catálogo DONKI da NASA.",
  "projects.cme.role":
    "Construí o pipeline completo: coleta e cruzamento dos dados (SWAN-SF + DONKI), pré-processamento das séries temporais, arquitetura biLSTM com atenção, validação com GroupKFold por HARPNUM e métrica TSS.",
  "projects.cme.repoSuffix": ": previsão de CMEs com deep learning",
  "projects.metrics.title": "Métricas de código vs. esforço de correção de bugs",
  "projects.metrics.meta": "Iniciação científica · UNICAMP · Resultados apresentados em out. 2026",
  "projects.metrics.overview":
    "Estudo da relação entre complexidade ciclomática, linhas de código e o esforço para corrigir bugs em repositórios open source do GitHub.",
  "projects.metrics.role":
    "Coletei dados via APIs REST e GraphQL do GitHub, realizei análise estatística com correlação de Spearman e teste de Kruskal-Wallis e apresentei os resultados em outubro de 2026.",
  "projects.metrics.repoSuffix": ": métricas de código vs. esforço de correção de bugs",
  "projects.prev": "Projetos anteriores",
  "projects.next": "Próximos projetos",
  "projects.adopet.meta": "Disciplina SI700 (programação mobile), Unicamp · Equipe de 3 pessoas · Em andamento",
  "projects.adopet.overview":
    "App para adoção de cães e gatos, com autenticação, banco de dados e armazenamento de arquivos no Firebase.",
  "projects.adopet.role": "Desenvolvi todas as telas e interações do app até agora.",
  "projects.memory.title": "Jogo da memória para web",
  "projects.memory.meta": "Disciplina SI401B (programação web), Unicamp · Projeto final · Equipe de 3 pessoas",
  "projects.memory.overview":
    "Jogo da memória que roda no navegador, com visual inspirado no Bloons TD 6.",
  "projects.memory.role": "Desenvolvimento front-end: fiz a maior parte das páginas e animações do site.",
  "projects.memory.repoSuffix": ": jogo da memória para web",

  "experience.title": "Experiência",
  "experience.foco.role": "Assessor de TI",
  "experience.foco.org": "Tecnologia em Foco, FT Unicamp",
  "experience.foco.dates": "mai. 2025 – dez. 2025",
  "experience.atria.role": "Assessor de TI",
  "experience.atria.org": "Atria Jr., empresa júnior da FT Unicamp",
  "experience.atria.dates": "jun. 2024 – jan. 2025",
  "experience.atria.desc": "Desenvolvi apps e páginas web para clientes com Flutter e HTML/CSS.",
  "experience.mbd.role": "Estagiário de QA",
  "experience.mbd.org": "MBD, Lorena (SP)",
  "experience.mbd.dates": "jan. 2021 – jan. 2022",
  "experience.mbd.desc": "Automatizei toda a suíte de testes de regressão em Ruby.",

  "skills.title": "Competências",
  "skills.languages": "Linguagens",
  "skills.frameworks": "Frameworks e bibliotecas",
  "skills.tools": "Ferramentas e plataformas",
  "skills.ruby": "Ruby (automação de testes)",

  "education.title": "Formação",
  "education.degree": "Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)",
  "education.school": "Faculdade de Tecnologia (FT), Universidade Estadual de Campinas (Unicamp)",
  "certs.title": "Certificações HackerRank",

  "contact.title": "Contato",
  "contact.text": "O jeito mais rápido de falar comigo é por e-mail.",
  "contact.email": "E-mail",
  "contact.resume": "Currículo",
  "contact.resumeLink": "Baixar PDF"
};
