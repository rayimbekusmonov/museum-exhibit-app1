"use client";

import { Exhibit, exhibitsData } from "@/data/exhibitsData";
import { useLanguage } from "@/context/LanguageContext";
import AudioGuide from "./AudioGuide";
import CornerOrnament from "./CornerOrnament";

const AUDIO_GUIDE_LABEL: Record<string, string> = {
  en: "Audio guide",
  uz: "Audio yo'riqnoma",
  ar: "الدليل الصوتي"
};

const DIMENSIONS_LABEL: Record<string, string> = {
  en: "Dimensions",
  uz: "O'lchami",
  ar: "الأبعاد"
};

export default function ExhibitView({ exhibit }: { exhibit: Exhibit }) {
  const { language } = useLanguage();
  const t = exhibit[language];

  return (
    <article className="mx-auto max-w-xl px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
      {/* Main image */}
      <div className="relative mx-auto mb-7 max-w-md">
        <CornerOrnament className="absolute -left-2.5 -top-2.5 h-7 w-7 text-gold sm:-left-3 sm:-top-3 sm:h-8 sm:w-8" />
        <CornerOrnament className="absolute -bottom-2.5 -right-2.5 h-7 w-7 text-gold sm:-bottom-3 sm:-right-3 sm:h-8 sm:w-8" />
        <div className="overflow-hidden rounded-2xl border border-gold/30 shadow-folio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={exhibit.image}
            alt={t.title}
            loading="lazy"
            className="aspect-[4/5] w-full bg-ink-800 object-cover"
            onError={(e) => {
              // Graceful fallback while real photography is being added.
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />
        </div>
        <span className="absolute -top-3 start-3 rounded-full border border-gold/50 bg-ink-950 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-widest text-gold-soft sm:-top-3.5">
          {String(exhibit.id).padStart(2, "0")} / {exhibitsData.length}
        </span>
      </div>

      {/* Title */}
      <h1
        className={[
          "mb-1 text-balance font-display text-[1.65rem] leading-tight text-vellum sm:text-3xl",
          language === "ar" ? "font-arabic" : ""
        ].join(" ")}
      >
        {t.title}
      </h1>
      <p className="mb-6 font-mono text-xs tracking-wide text-gold-soft/80">
        {DIMENSIONS_LABEL[language]}: {t.dimensions}
      </p>

      {/* Audio guide */}
      <div className="mb-7">
        <AudioGuide
          label={AUDIO_GUIDE_LABEL[language]}
          src={`/audio/exhibit${exhibit.id}-${language}.mp3`}
        />
      </div>

      {/* Divider */}
      <div className="mb-7 flex items-center gap-3 text-gold/40">
        <span className="h-px flex-1 bg-current" />
        <CornerOrnament className="h-3.5 w-3.5" />
        <span className="h-px flex-1 bg-current" />
      </div>

      {/* Description */}
      <p
        className={[
          "text-[1.05rem] leading-[1.9] text-vellum-dim",
          language === "ar" ? "font-arabic text-[1.15rem] leading-[2.1]" : "font-body"
        ].join(" ")}
      >
        {t.description}
      </p>
    </article>
  );
}
