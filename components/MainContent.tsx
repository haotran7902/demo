import { useTranslation } from "@/hooks/useTranslation";
import { TabId } from "@/app/page";
import DeepDive from "./deep-dive/DeepDive";

interface MainContentProps {
  activeTab: TabId;
}

export default function MainContent({ activeTab }: MainContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "docs":
        return <DocsContent />;
      case "deep-dive":
        return <DeepDive />;
      case "tools":
        return <ToolsContent />;
      case "about":
        return <AboutContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DocsContent />;
    }
  };

  return (
    <main className="flex grow px-6 custom-bg">
      {renderContent()}
    </main>
  );
}

function DocsContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t("1014")} {t("1036")}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
        {t("1037")}
      </p>
    </div>
  );
}

function ToolsContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t("1016")} {t("1036")}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
        {t("1038")}
      </p>
    </div>
  );
}

function AboutContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t("1018")} {t("1036")}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
        {t("1039")}
      </p>
    </div>
  );
}

function SettingsContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t("1019")} {t("1036")}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
        {t("1040")}
      </p>
    </div>
  );
}
