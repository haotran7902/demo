import { Files, FileSearch, Plus } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function DeepDiveIntro() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col relative z-10 w-full max-w-5xl mx-auto gap-8">
      <h1 className="text-4xl font-extrabold custom-text mb-2">
        DeepDive
      </h1>

      <div className="flex gap-3">
        <div className="w-full flex flex-col gap-5 custom-text">
          <p className="text-2xl">
            {t("1024")}
          </p>
          <p>
            {t("1025")}
          </p>
          <p className="text-sm">
            {t("1026")}
          </p>
        </div>
          <div>
            <Files size={250} className="text-slate-400 dark:text-gray-500" />
          </div>

      </div>

      <div className="flex w-full gap-3">
        <button className="flex w-fit  items-center gap-1 mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-xl">
          <Plus size={24} />
          <p>{t("1027")}</p>
        </button>
        <button className="flex w-fit  items-center gap-1 mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-xl">
          <Plus size={24} />
          <p>{t("1028")}</p>
        </button>
        <button className="flex w-fit  items-center gap-1 mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold rounded-xl">
          <Plus size={24} />
          <p>{t("1029")}</p>
        </button>
      </div>
    </section>
  );
}
