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
      about:
        "Plataforma integral para que los colaboradores consulten temas de RRHH por chat web o WhatsApp. Un mismo bot responde en ambos canales con una base de conocimiento por empresa, sucursal y área; cuando no puede resolver, deriva la conversación a un agente con un resumen generado por IA. Incluye panel de atención, comunicados masivos, estadísticas y automatizaciones con n8n.",
      sections: [
        {
          title: "Chat con colaboradores",
          items: [
            "Chat web en tiempo real y canal de WhatsApp con el mismo bot",
            "Detección automática de empresa, sucursal y área",
            "Análisis de sentimiento en consultas no resueltas",
            "Botón para hablar con una persona en cualquier momento",
          ],
        },
        {
          title: "Panel de atención",
          items: [
            "Bandeja de conversaciones derivadas con asignación automática entre agentes",
            "Respuesta en tiempo real por web y WhatsApp",
            "Resumen automático de la conversación al derivar (Gemini AI)",
            "Avisos por email y notificaciones push",
          ],
        },
        {
          title: "Comunicados y conocimiento",
          items: [
            "Envíos masivos por WhatsApp con adjuntos y progreso en vivo",
            "Comunicados programados que se disparan solos",
            "FAQs generadas desde PDF con IA y sincronizadas desde Google Drive",
          ],
        },
        {
          title: "Gestión",
          items: [
            "Dashboard con KPIs, temas más consultados y tiempos de atención",
            "Historial completo con filtros y exportación a CSV",
            "Multiempresa, legajos digitales, usuarios con roles y permisos",
          ],
        },
      ],
      stack: ["Python", "Flask", "Firebase", "Gemini AI", "WhatsApp", "n8n", "Cloud Run"],
      repo: "https://github.com/deboraq/ChatBotRRHH",
      demo: null,
      cover: "/proyectos/portadas/chatbots.jpg",
      images: [
        "/proyectos/chatbots-01-estadisticas-v2.jpg",
        "/proyectos/chatbots-02-panel-v2.jpg",
        "/proyectos/chatbots-03-historial-v2.jpg",
        "/proyectos/chatbots-04-comunicados-v2.jpg",
        "/proyectos/chatbots-05-legajos-v2.jpg",
        "/proyectos/chatbots-06-configuracion-v2.jpg",
      ],
      featured: true,
      accent: "#c084fc",
    },
    {
      title: "Sangre Nómade",
      subtitle: "Tienda de trekking",
      description:
        "E-commerce de ropa y equipamiento outdoor: catálogo en Firestore, panel de administración y checkout por WhatsApp.",
      about:
        "Tienda web multimarca de ropa y equipamiento de trekking para un emprendimiento. Los clientes arman el carrito y finalizan la compra por WhatsApp; productos, categorías y portada se administran desde la propia web, sin tocar código.",
      sections: [
        {
          title: "Tienda",
          items: [
            "Catálogo de productos por categorías",
            "Carrito de compras",
            "Checkout que envía el pedido por WhatsApp",
            "Cartel animado en la portada con mensajes de la tienda",
          ],
        },
        {
          title: "Panel de administración",
          items: [
            "Acceso con usuario y contraseña",
            "Alta, edición y borrado de productos",
            "Fotos por URL o subidas desde la computadora",
            "Edición de categorías y del texto de la portada",
          ],
        },
      ],
      stack: ["Next.js", "React", "TypeScript", "Firebase", "Tailwind", "Vercel"],
      repo: "https://github.com/deboraq/tienda-trekk",
      demo: "https://sangrenomadeadventure.vercel.app",
      cover: "/proyectos/portadas/sangre-nomade.jpg",
      images: [],
      featured: true,
      accent: "#e879f9",
    },
    {
      title: "Menú diario",
      subtitle: "Pedidos corporativos",
      description:
        "App web para menú del día, pedidos y administración. Persistencia con Prisma y Supabase, desplegada en Vercel.",
      about:
        "Aplicación web para gestionar el menú corporativo: publicar el menú del día, recibir los pedidos de los colaboradores y administrarlos. Base de datos PostgreSQL en Supabase con Prisma, desplegada en Vercel.",
      sections: [
        {
          title: "Funcionalidades",
          items: [
            "Publicación del menú del día",
            "Pedidos de los colaboradores",
            "Panel de administración",
          ],
        },
      ],
      stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "PostgreSQL", "Vercel"],
      repo: "https://github.com/deboraq/menu-diario",
      demo: null,
      cover: "/proyectos/portadas/menu-diario.jpg",
      images: [],
      featured: false,
      accent: "#a78bfa",
    },
    {
      title: "Ejercicio y comida",
      subtitle: "Rutina y nutrición",
      description:
        "Registro de ejercicios, rutinas de gimnasio, comidas y suplementos, con estadísticas por período y sync opcional en la nube.",
      about:
        "App web instalable (PWA) para el seguimiento fitness: actividad, rutinas de gimnasio, nutrición, plan alimenticio de 30 días, peso y medidas, suplementos y consejos personalizados. Funciona sin cuenta en el dispositivo o con sincronización en la nube, roles de alumno, entrenador y administrador, y modo sin conexión.",
      sections: [
        {
          title: "Inicio y ejercicios",
          items: [
            "Dashboard del día: calorías, macros, peso, IMC, medidas y racha",
            "Consejos personalizados según comidas, entrenamiento y objetivo",
            "Registro de actividad con kcal estimadas e historial con filtros",
          ],
        },
        {
          title: "Rutina",
          items: [
            "Rutinas propias o asignadas por el entrenador",
            "Registro de series, repeticiones y peso con calendario",
            "Progreso por ejercicio y exportación a PDF",
          ],
        },
        {
          title: "Comida y plan",
          items: [
            "Diario nutricional con catálogo de ~650 alimentos",
            "Plan alimenticio de 30 días en tablero tipo Kanban",
            "Hidratación, favoritos y metas de calorías y macros",
          ],
        },
        {
          title: "Entrenadores y cuenta",
          items: [
            "Panel para vincular alumnos y enviarles rutinas",
            "Panel de administración con menú por rol",
            "Modo offline con sincronización al reconectar",
            "Exportación a Excel, CSV y JSON",
          ],
        },
      ],
      stack: ["React", "Vite", "Supabase", "PWA", "Vercel"],
      repo: "https://github.com/deboraq/ejercicio-comida",
      demo: "https://ejercicio-comida.vercel.app",
      cover: "/proyectos/portadas/ejercicio-comida.jpg",
      images: [
        "/proyectos/ejercicio-comida-01-inicio-v2.jpg",
        "/proyectos/ejercicio-comida-02-rutina.jpg",
        "/proyectos/ejercicio-comida-03-comida.jpg",
        "/proyectos/ejercicio-comida-04-ejercicios.jpg",
      ],
      featured: false,
      accent: "#f472b6",
    },
    {
      title: "Horas transporte",
      subtitle: "Control de asistencia y extras",
      description:
        "Sistema para cargar asistencia, calcular horas normales/extras/feriados y sincronizar con Google Drive vía Apps Script.",
      about:
        "Sistema para el delegado de transporte: carga la asistencia diaria, calcula las horas de cada colaborador según las reglas del convenio y permite consultar el mes completo. Funciona como aplicación web de Google Apps Script con los datos en una carpeta compartida de Drive.",
      sections: [
        {
          title: "Carga y consulta",
          items: [
            "Carga por día de entrada, salida y citación, con feriados y francos",
            "Vista por colaborador con todos los días del período, editable",
            "Alta y baja de personal",
          ],
        },
        {
          title: "Cálculo automático",
          items: [
            "Horas normales y extras al 50 % o al 100 % según horario",
            "Domingos y feriados al 100 % con mínimo de horas",
            "Cenas por franja nocturna y descanso entre jornadas",
          ],
        },
        {
          title: "Datos",
          items: [
            "Sincronización con Google Drive y respaldos automáticos",
            "Exportación a Excel general o por colaborador",
            "Scripts en Python para generar planillas",
          ],
        },
      ],
      stack: ["HTML", "JavaScript", "Apps Script", "Google Drive", "Python"],
      repo: "https://github.com/deboraq/horas-transporte",
      demo: null,
      cover: "/proyectos/portadas/horas-transporte.jpg",
      images: ["/proyectos/horas-transporte-01-por-dia.jpg"],
      featured: false,
      accent: "#818cf8",
    },
    {
      title: "Control limpieza móviles",
      subtitle: "Operaciones de flota",
      description:
        "Herramienta para el seguimiento de limpieza de móviles, pensada para uso operativo en el día a día.",
      about:
        "Panel web para supervisores: se carga el Excel de control de limpieza de la flota y muestra gráficos, una tabla filtrable y exportaciones. Todo se procesa en el navegador, así que los datos nunca salen de la computadora.",
      sections: [
        {
          title: "Funcionalidades",
          items: [
            "Lectura del Excel de control (una solapa por día de inspección)",
            "Resumen con gráficos del estado de cada móvil",
            "Tabla con filtros y búsqueda",
            "Exportación a Excel y PDF para supervisores",
            "Publicado en GitHub Pages, sin instalación",
          ],
        },
      ],
      stack: ["HTML", "JavaScript", "Excel", "Python"],
      repo: "https://github.com/deboraq/control-limpieza-moviles",
      demo: null,
      cover: "/proyectos/portadas/control-limpieza.jpg",
      images: [],
      featured: false,
      accent: "#c084fc",
    },
  ],
} as const;

export type Project = Omit<(typeof site.projects)[number], "images"> & {
  images: readonly string[];
};
