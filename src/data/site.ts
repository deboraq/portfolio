export const site = {
  name: "Débora Aylén Quinteros",
  shortName: "Débora",
  initials: "DQ",
  handle: "@Débora Quinteros",
  role: "Analista Funcional / QA",
  roleSecondary: "Desarrolladora fullstack",
  company: "BACAR SA",
  status: "En línea",
  typingPhrases: [
    "Analista Funcional | QA",
    "Desarrolladora fullstack",
    "Implementación de sistemas",
    "Mejora de procesos",
    "QA Automation · Cypress · Python",
    "AWS · React · Next.js · Python",
  ],
  headline: "Analizo, valido e implemento soluciones que mejoran el día a día.",
  tagline:
    "Analista Funcional / QA en BACAR SA · Desarrolladora fullstack. Más de 5 años en implementación de sistemas, pruebas funcionales/automatizadas y mejora continua de procesos. Desarrollo soluciones web de extremo a extremo: desde chatbots y paneles internos hasta apps que los equipos usan todos los días.",
  github: "https://github.com/deboraq",
  githubUser: "deboraq",
  linkedin: "https://www.linkedin.com/in/d%C3%A9bora-ayl%C3%A9n-quinteros-32456a146/",
  email: "debocab2@gmail.com",
  phone: "+54 351 541-6836",
  phoneHref: "tel:+543515416836",
  location: "Argentina",
  avatar: "/foto.jpg",
  about: [
    "Actualmente me desempeño como Analista Funcional y QA en BACAR SA: análisis de requerimientos, diseño de soluciones internas y validación de implementaciones en sistemas ERP y de gestión.",
    "Además soy desarrolladora fullstack: construyo herramientas internas (chatbots, paneles, e-commerce y apps web) con React, Next.js, Python, Firebase y Supabase. Combino análisis, QA e implementación para que las soluciones se usen de verdad.",
  ],
  skillGroups: [
    {
      title: "QA & Análisis",
      items: ["Cypress", "Python", "MySQL", "Testing Manual", "Análisis de requerimientos"],
    },
    {
      title: "Cloud & Sistemas",
      items: ["AWS", "Amazon EC2", "Amazon S3", "AWS IAM", "CloudFormation"],
    },
    {
      title: "Dev y herramientas",
      items: ["React", "Next.js", "JavaScript", "Git/GitHub", "Firebase"],
    },
  ],
  certifications: [
    "QA Automation — Santex",
    "CSQA — XAcademy",
    "Python — Cisco",
    "MySQL — TodoCode",
    "AWS — Coderhouse"
  ],
  projects: [
    {
      title: "Chatbots",
      subtitle: "Asistente virtual para colaboradores",
      description:
        "Plataforma de atención vía web y WhatsApp, con panel de gestión, base de conocimiento con IA, comunicados masivos y métricas en tiempo real.",
      stack: ["Python", "Flask", "Firebase", "Gemini AI", "WhatsApp"],
      repo: "https://github.com/deboraq/ChatBotRRHH",
      demo: null,
      featured: true,
      accent: "#c084fc",
    },
    {
      title: "Sangre Nómade",
      subtitle: "Tienda de trekking",
      description:
        "E-commerce de ropa y equipamiento outdoor: catálogo en Firestore, panel de administración y checkout por WhatsApp.",
      stack: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind"],
      repo: "https://github.com/deboraq/tienda-trekk",
      demo: null,
      featured: true,
      accent: "#e879f9",
    },
    {
      title: "Menú diario",
      subtitle: "Pedidos corporativos",
      description:
        "App web para menú del día, pedidos y administración. Persistencia con Prisma y Supabase, desplegada en Vercel.",
      stack: ["TypeScript", "Prisma", "Supabase", "Next.js"],
      repo: "https://github.com/deboraq/menu-diario",
      demo: null,
      featured: false,
      accent: "#a78bfa",
    },
    {
      title: "Ejercicio y comida",
      subtitle: "Rutina y nutrición",
      description:
        "Registro de ejercicios, rutinas de gimnasio, comidas y suplementos, con estadísticas por período y sync opcional en la nube.",
      stack: ["React", "Vite", "Supabase"],
      repo: "https://github.com/deboraq/ejercicio-comida",
      demo: "https://ejercicio-comida.vercel.app",
      featured: false,
      accent: "#f472b6",
    },
    {
      title: "Horas transporte",
      subtitle: "Control de asistencia y extras",
      description:
        "Sistema para cargar asistencia, calcular horas normales/extras/feriados y sincronizar con Google Drive vía Apps Script.",
      stack: ["HTML", "JavaScript", "Apps Script", "Python"],
      repo: "https://github.com/deboraq/horas-transporte",
      demo: null,
      featured: false,
      accent: "#818cf8",
    },
    {
      title: "Control limpieza móviles",
      subtitle: "Operaciones de flota",
      description:
        "Herramienta para el seguimiento de limpieza de móviles, pensada para uso operativo en el día a día.",
      stack: ["HTML", "Python"],
      repo: "https://github.com/deboraq/control-limpieza-moviles",
      demo: null,
      featured: false,
      accent: "#c084fc",
    },
  ],
  chatPresets: [
    "Hola Débora, vi tu portfolio 👋",
    "¿Estás abierta a oportunidades?",
    "Quiero hablar de un proyecto",
  ],
} as const;

export type Project = (typeof site.projects)[number];
