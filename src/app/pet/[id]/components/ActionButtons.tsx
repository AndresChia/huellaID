"use client";

import { useTranslations } from "next-intl";

type VeterinaryContact = {
  phone: string;
  countryCode: string;
};

export default function ActionButtons({
  phone,
  countryCode,
}: VeterinaryContact) {
  const t = useTranslations();

  const handleReportFound = async () => {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );

      const { latitude, longitude } = position.coords;
      const locationUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
      const message = encodeURIComponent(
        t("actions.foundPetMessage", { location: locationUrl })
      );
      window.open(
        `https://wa.me/${countryCode}${phone}?text=${message}`,
        "_blank"
      );
    } catch (error) {
      console.error("Error getting location:", error);
      window.open(`https://wa.me/${countryCode}${phone}`, "_blank");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <button
        className="w-full bg-info text-white px-4 py-2 rounded-lg hover:bg-info-dark transition-colors"
        onClick={() => window.open(`tel:${phone}`, "_blank")}
      >
        {t("actions.call")}
      </button>
      <button
        className="w-full bg-success text-white px-4 py-2 rounded-lg hover:bg-success-dark transition-colors"
        onClick={() =>
          window.open(`https://wa.me/${countryCode}${phone}`, "_blank")
        }
      >
        {t("actions.sendMessage")}
      </button>
      <button
        className="w-full bg-alert text-white px-4 py-2 rounded-lg hover:bg-alert-dark transition-colors"
        onClick={handleReportFound}
      >
        {t("actions.reportFound")}
      </button>
    </div>
  );
}
