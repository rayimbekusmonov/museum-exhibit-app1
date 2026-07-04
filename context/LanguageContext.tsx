"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { Language, languageMeta } from "@/data/exhibitsData";

interface LanguageContextValue {
  language: Language;
  dir: "ltr" | "rtl";
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "museum_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // Restore last-used language (per-visitor convenience only — no server state).
  useEffect(() => {
    const saved = typeof window !== "undefined"
      ? (window.localStorage.getItem(STORAGE_KEY) as Language | null)
      : null;
    if (saved && languageMeta[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const dir = languageMeta[language].dir;

  // Critical RTL support: inject dir on the root <html> element so every
  // descendant (flex directions, text-align, scrollbars) flips correctly.
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language);
  }, [dir, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const value = useMemo(
    () => ({ language, dir, setLanguage }),
    [language, dir]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
