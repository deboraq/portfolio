# Portfolio — Débora Quinteros

Portfolio personal en Next.js con proyectos de [github.com/deboraq](https://github.com/deboraq).

## Arranque

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando        | Uso                |
| -------------- | ------------------ |
| `npm run dev`  | Desarrollo         |
| `npm run build`| Build de producción|
| `npm run start`| Servidor post-build|
| `npm run lint` | ESLint             |

## Contenido

Editá bio, proyectos, email y links en [`src/data/site.ts`](src/data/site.ts). No hace falta tocar el layout para cambiar textos.

## Deploy en Vercel

1. Subí el repo a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → conectá el repositorio.
3. Framework: **Next.js** (detectado solo). Deploy.

Cada push a `main` puede publicar una nueva versión según tu configuración en Vercel.
