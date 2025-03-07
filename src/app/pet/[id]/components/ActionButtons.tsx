"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type VeterinaryContact = {
  phone: string;
  countryCode: string;
};

type Location = {
  latitude: number;
  longitude: number;
} | null;

export default function ActionButtons({
  phone,
  countryCode,
}: VeterinaryContact) {
  const t = useTranslations();
  const [location, setLocation] = useState<Location>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error obteniendo ubicación:", error);
      }
    );
  }, []);

  const handleReportFound = () => {
    const locationUrl = location
      ? `https://maps.google.com/?q=${location.latitude},${location.longitude}`
      : "";

    const message = encodeURIComponent(
      t("actions.foundPetMessage", { location: locationUrl })
    );

    const whatsappUrl = `https://wa.me/${countryCode}${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row gap-3">
      <button
        className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
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
