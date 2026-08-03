"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function Typewriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1600,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const doneTyping = text === current;
    const doneDeleting = text === "";

    let delay = deleting ? deletingSpeed : typingSpeed;
    if (doneTyping && !deleting) delay = pauseMs;
    if (doneDeleting && deleting) delay = 280;

    const timer = window.setTimeout(() => {
      if (!deleting && !doneTyping) {
        setText(current.slice(0, text.length + 1));
        return;
      }
      if (!deleting && doneTyping) {
        setDeleting(true);
        return;
      }
      if (deleting && !doneDeleting) {
        setText(current.slice(0, text.length - 1));
        return;
      }
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="typewriter" aria-live="polite">
      {text}
      <span className="typewriter__cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
