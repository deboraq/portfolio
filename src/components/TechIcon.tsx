"use client";

import { useState } from "react";
import { techIconUrl } from "@/lib/tech";

type Props = {
  name: string;
  mono?: boolean;
  size?: number;
  className?: string;
};

export function TechIcon({ name, mono = false, size = 22, className }: Props) {
  const [failed, setFailed] = useState(false);
  const src = techIconUrl(name, mono);

  if (failed) {
    return (
      <span
        className={`tech-icon-fallback ${className ?? ""}`}
        style={{ width: size, height: size }}
        title={name}
        aria-hidden="true"
      >
        {name.slice(0, 1)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
