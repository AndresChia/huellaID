import { useTranslations } from "next-intl";

export default function ActionButtons() {
  const t = useTranslations();

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
        {t("actions.call")}
      </button>
      <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
        {t("actions.sendMessage")}
      </button>
      <button className="w-full bg-alert text-white px-4 py-2 rounded-lg hover:bg-alert-dark transition-colors">
        {t("actions.reportFound")}
      </button>
    </div>
  );
}
