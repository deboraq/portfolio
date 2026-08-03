"use client";

import Image from "next/image";
import { useCallback, useRef, useState, type CSSProperties } from "react";
import { site } from "@/data/site";

type Props = {
  onContact: () => void;
};

export function ProfileCard({ onContact }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [vars, setVars] = useState({
    x: "50%",
    y: "50%",
    rx: "0deg",
    ry: "0deg",
    fromCenter: "0",
    fromTop: "0.5",
    fromLeft: "0.5",
    bgX: "50%",
    bgY: "50%",
  });

  const update = useCallback((clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    const fromCenter = Math.min(
      1,
      Math.hypot(px - 0.5, py - 0.5) / 0.5,
    );

    setVars({
      x: `${(px * 100).toFixed(2)}%`,
      y: `${(py * 100).toFixed(2)}%`,
      rx: `${((px - 0.5) * 14).toFixed(2)}deg`,
      ry: `${((0.5 - py) * 14).toFixed(2)}deg`,
      fromCenter: fromCenter.toFixed(3),
      fromTop: py.toFixed(3),
      fromLeft: px.toFixed(3),
      bgX: `${(px * 100).toFixed(2)}%`,
      bgY: `${(py * 100).toFixed(2)}%`,
    });
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper${active ? " active" : ""}`}
      style={
        {
          "--pointer-x": vars.x,
          "--pointer-y": vars.y,
          "--rotate-x": vars.rx,
          "--rotate-y": vars.ry,
          "--pointer-from-center": vars.fromCenter,
          "--pointer-from-top": vars.fromTop,
          "--pointer-from-left": vars.fromLeft,
          "--background-x": vars.bgX,
          "--background-y": vars.bgY,
        } as CSSProperties
      }
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => {
        setActive(false);
        setVars({
          x: "50%",
          y: "50%",
          rx: "0deg",
          ry: "0deg",
          fromCenter: "0",
          fromTop: "0.5",
          fromLeft: "0.5",
          bgX: "50%",
          bgY: "50%",
        });
      }}
      onPointerMove={(e) => update(e.clientX, e.clientY)}
    >
      <article className="pc-card" aria-label={`Perfil de ${site.name}`}>
        <div className="pc-inside" />
        <div className="pc-shine" />
        <div className="pc-glare" />
        <div className="pc-avatar-content">
          <Image
            className="avatar"
            src={site.avatar}
            alt={site.name}
            width={480}
            height={640}
            priority
          />
        </div>
        <div className="pc-content">
          <div className="pc-details">
            <h3>{site.shortName}</h3>
            <p>
              {site.role} · {site.roleSecondary}
            </p>
          </div>
        </div>
        <div className="pc-user-info">
          <div className="pc-user-details">
            <div className="pc-mini-avatar">
              <Image src={site.avatar} alt="" width={48} height={48} />
            </div>
            <div className="pc-user-text">
              <span className="pc-handle">{site.handle}</span>
              <span className="pc-status">
                <span className="pc-status-dot" />
                {site.status}
              </span>
            </div>
          </div>
          <button type="button" className="pc-contact-btn" onClick={onContact}>
            Contactame
          </button>
        </div>
      </article>
    </div>
  );
}
