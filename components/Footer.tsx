import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-auto p-4">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {t("1017")}
      </p>
    </footer>
  );
}