"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import MedicalContent from "./MedicalContent";

interface MedicalHistoryProps {
  petId: string;
}

export default function MedicalHistory({ petId }: MedicalHistoryProps) {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("medical");

  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="flex gap-6">
          <button
            className={`py-4 px-2 -mb-px ${
              activeTab === "medical"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("medical")}
          >
            {t("medical.history")}
          </button>
          <button
            className={`py-4 px-2 -mb-px ${
              activeTab === "photos"
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("photos")}
          >
            {t("medical.photos")}
          </button>
        </nav>
      </div>
      <div className="mt-6">
        {activeTab === "medical" && <MedicalContent petId={petId} />}
        {activeTab === "photos" && <div>Photos Content</div>}
      </div>
    </div>
  );
}
