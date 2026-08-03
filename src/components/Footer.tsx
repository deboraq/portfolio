import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p className="footer__stack">Hecho con Next.js + React</p>
    </footer>
  );
}
