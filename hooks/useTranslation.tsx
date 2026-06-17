"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

import en from "@/locales/en.json";
import vi from "@/locales/vi.json";

type Locale = "en" | "vi";

const translations: Record<
  Locale,
  Record<string, string>
> = { en, vi };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useTranslation must be used within a LanguageProvider",
    );
  }

  const { locale, setLocale } = context;

  const t = useCallback(
    (key: string): string => {
      return translations[locale][key] ?? key;
    },
    [locale],
  );

  return { t, locale, setLocale };
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(
      "locale",
    ) as Locale | null;
    if (stored && (stored === "en" || stored === "vi")) {
      setLocaleState(stored);
    }
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
