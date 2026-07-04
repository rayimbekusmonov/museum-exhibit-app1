"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { exhibitsData } from "@/data/exhibitsData";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryRail({ activeId }: { activeId: number }) {
  const { language } = useLanguage();
  const railRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Keep the current exhibit centered when the rail mounts or the
  // language/direction changes.
  useEffect(() => {
    activeRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }, [activeId, language]);

  return (
    <nav
      aria-label="All exhibits"
      className="border-b border-gold/15 bg-ink-950/95 pt-14 sm:pt-4"
    >
      <div
        ref={railRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-2 overflow-x-auto px-3 pb-3 pt-2 sm:gap-3 sm:px-6"
      >
        {exhibitsData.map((exhibit) => {
          const t = exhibit[language];
          const active = exhibit.id === activeId;
          return (
            <Link
              key={exhibit.id}
              ref={active ? activeRef : undefined}
              href={`/exhibit/${exhibit.id}`}
              className={[
                "group flex w-[92px] shrink-0 snap-start flex-col items-center gap-1 rounded-xl border px-2 py-2 text-center transition-all sm:w-[104px]",
                active
                  ? "border-gold bg-gold/10 shadow-gilt"
                  : "border-white/10 hover:border-gold/40"
              ].join(" ")}
            >
              <span
                className={[
                  "font-mono text-[0.7rem] tracking-widest",
                  active ? "text-gold-soft" : "text-vellum-dim/50"
                ].join(" ")}
              >
                {String(exhibit.id).padStart(2, "0")}
              </span>
              <span
                className={[
                  "line-clamp-2 font-body text-[0.72rem] leading-tight",
                  active ? "text-vellum" : "text-vellum-dim/70"
                ].join(" ")}
              >
                {t.shortTitle}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
