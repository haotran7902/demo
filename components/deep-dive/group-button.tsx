import {
  MessageSquare,
  PieChart,
  Presentation,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const buttonClass = "flex items-center custom-bg custom-border custom-text custom-hover-bg custom-hover-text gap-2 px-2.5 py-px rounded-xl font-medium cursor-pointer"

export default function GroupButton() {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 flex-2 justify-center">
      <button className={buttonClass}>
        <MessageSquare size={12} />
        <span>{t("1014")}</span>
      </button>
      <button className={buttonClass}>
        <PieChart size={12} />
        <span>{t("1021")}</span>
      </button>
      <button className={buttonClass}>
        <Presentation size={12} />
        <span>{t("1022")}</span>
      </button>
    </div>
  );
}
