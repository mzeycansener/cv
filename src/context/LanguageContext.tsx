"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  // Load saved preference on mount (optional)
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved && (saved === "tr" || saved === "en")) {
      setLanguage(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "tr" ? "en" : "tr";
      localStorage.setItem("portfolio_lang", newLang);
      document.documentElement.lang = newLang;
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
