const TECH: Record<string, { slug: string; color: string }> = {
  React: { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "FFFFFF" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  "HTML/CSS": { slug: "html5", color: "E34F26" },
  HTML: { slug: "html5", color: "E34F26" },
  Tailwind: { slug: "tailwindcss", color: "06B6D4" },
  Python: { slug: "python", color: "3776AB" },
  Flask: { slug: "flask", color: "E5E7EB" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  Prisma: { slug: "prisma", color: "E5E7EB" },
  Firebase: { slug: "firebase", color: "FFCA28" },
  Supabase: { slug: "supabase", color: "3ECF8E" },
  "Git/GitHub": { slug: "github", color: "E5E7EB" },
  "WhatsApp API": { slug: "whatsapp", color: "25D366" },
  WhatsApp: { slug: "whatsapp", color: "25D366" },
  "Gemini AI": { slug: "googlegemini", color: "8E75B2" },
  Vercel: { slug: "vercel", color: "E5E7EB" },
  "Apps Script": { slug: "googlesheets", color: "34A853" },
  "QA Automation": { slug: "cypress", color: "69D3A7" },
  Vite: { slug: "vite", color: "646CFF" },
  npm: { slug: "npm", color: "CB3837" },
  Cypress: { slug: "cypress", color: "69D3A7" },
  MySQL: { slug: "mysql", color: "4479A1" },
  AWS: { slug: "amazonwebservices", color: "FF9900" },
  "Amazon EC2": { slug: "amazonec2", color: "FF9900" },
  "Amazon S3": { slug: "amazons3", color: "569A31" },
  "AWS IAM": { slug: "amazonwebservices", color: "FF9900" },
  CloudFormation: { slug: "amazonwebservices", color: "FF9900" },
  "Testing Manual": { slug: "selenium", color: "43B02A" },
  "Análisis de requerimientos": { slug: "notion", color: "E5E7EB" },
  Postman: { slug: "postman", color: "FF6C37" },
};

export function techIconUrl(name: string, mono = false) {
  const tech = TECH[name] ?? { slug: "javascript", color: "FFFFFF" };
  const color = mono ? "FFFFFF" : tech.color;
  // Iconify sirve todos los slugs de Simple Icons (AWS incluido).
  // cdn.simpleicons.org falla con varios logos de Amazon.
  return `https://api.iconify.design/simple-icons:${tech.slug}.svg?color=%23${color}`;
}

export const marqueeIcons = [
  "AWS",
  "Amazon EC2",
  "Amazon S3",
  "Cypress",
  "Python",
  "MySQL",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "Tailwind",
  "Firebase",
  "Git/GitHub",
  "Postman",
  "npm",
  "Vercel",
  "WhatsApp",
] as const;
