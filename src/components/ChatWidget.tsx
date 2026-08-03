"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Msg = { from: "me" | "bot"; text: string };

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ChatWidget({ open, onClose }: Props) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: `¡Hola! Soy ${site.shortName}. Escribime o elegí un mensaje rápido 👇`,
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function pushUser(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { from: "me", text: trimmed }]);
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: "bot",
          text: "Perfecto. Te abro el mail para seguir la conversación ✉️",
        },
      ]);
      window.setTimeout(() => {
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          "Hola desde tu portfolio",
        )}&body=${encodeURIComponent(trimmed)}`;
      }, 700);
    }, 500);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    pushUser(input);
    setInput("");
  }

  if (!open) return null;

  return (
    <div className="chat-overlay" role="dialog" aria-modal="true" aria-label="Chat">
      <button type="button" className="chat-backdrop" aria-label="Cerrar" onClick={onClose} />
      <div className="chat-panel">
        <header className="chat-header">
          <div className="chat-header__who">
            <span className="pc-status-dot" />
            <div>
              <strong>{site.name}</strong>
              <p>{site.status}</p>
            </div>
          </div>
          <button type="button" className="chat-close" onClick={onClose} aria-label="Cerrar chat">
            ×
          </button>
        </header>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={`${msg.from}-${i}`} className={`chat-bubble chat-bubble--${msg.from}`}>
              {msg.text}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="chat-presets">
          {site.chatPresets.map((preset) => (
            <button key={preset} type="button" onClick={() => pushUser(preset)}>
              {preset}
            </button>
          ))}
        </div>

        <form className="chat-form" onSubmit={onSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribí un mensaje..."
            aria-label="Mensaje"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
