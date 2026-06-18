"use client";

import { useTranslation as useI18nextTranslation } from "react-i18next";
import i18n from "@/i18n/config";
import { I18nextProvider } from "react-i18next";

export function useTranslation(namespace: string = "translation") {
  const { t, i18n, ready } = useI18nextTranslation(namespace);
  return { t, i18n, ready };
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
