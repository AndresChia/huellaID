"use client";
import { useTranslations } from "next-intl";

interface MedicalContentProps {
  petId: string;
}

export default function MedicalContent({ petId }: MedicalContentProps) {
  const t = useTranslations();

  return (
    <div className="space-y-8">
      <div className="flex gap-3">
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          {t("actions.downloadRecords")}
        </button>
        <button className="bg-success text-white px-4 py-2 rounded-lg hover:bg-success-dark transition-colors">
          {t("actions.addNewEntry")}
        </button>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-black mb-4">
          {t("medical.recentCheckups")}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center gap-4">
              <span className="text-black/60">15/06/2023</span>
              <span className="font-medium text-black">Annual Checkup</span>
            </div>
            <span className="text-black/60">Dr. Garcia</span>
          </div>
          {/* Add more checkups */}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-black mb-4">
          {t("medical.vaccinations")}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <p className="font-medium text-black">Rabies</p>
              <p className="text-sm text-black/60">10/05/2023</p>
            </div>
            <span className="text-success">
              {t("medical.validUntil")} 10/05/2024
            </span>
          </div>
          {/* Add more vaccinations */}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Current Medications</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center">
              <span className="text-primary">💊</span>
            </div>
            <div>
              <p className="font-medium">Heartworm Prevention</p>
              <p className="text-sm text-gray-600">
                Once monthly, last dose: 01/07/2023
              </p>
            </div>
          </div>
          {/* Add more medications */}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">Allergies & Conditions</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600">⚠️</span>
            </div>
            <div>
              <p className="font-medium">Food Sensitivity</p>
              <p className="text-sm text-gray-600">
                Avoid chicken-based products
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-black mb-4">
          {t("medical.veterinaryContact")}
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-black mb-2">
            Clinica Veterinaria Madrid
          </h4>
          <p className="text-black/60 text-sm mb-4">
            Dr. Garcia Martinez Tel: +34 912 345 678
            <br />
            Calle Veterinaria 45, Madrid
          </p>
          <div className="flex gap-3">
            <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors">
              {t("medical.callClinic")}
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              {t("actions.viewMap")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
