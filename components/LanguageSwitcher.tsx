"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/exhibitsData";

const OPTIONS: { code: Language; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" }
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="fixed top-3 z-50 rounded-full border border-gold/40 bg-ink-950/80 p-1 shadow-gilt backdrop-blur-md end-3 sm:top-4 sm:end-4"
      role="group"
      aria-label="Language"
    >
      <div className="flex gap-1">
        {OPTIONS.map((opt) => {
          const active = opt.code === language;
          return (
            <button
              key={opt.code}
              onClick={() => setLanguage(opt.code)}
              aria-pressed={active}
              className={[
                "min-w-[2.75rem] rounded-full px-3 py-1.5 font-mono text-xs tracking-widest transition-colors",
                active
                  ? "bg-gold text-ink-950 shadow-sm"
                  : "text-vellum-dim hover:text-gold-soft"
              ].join(" ")}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
