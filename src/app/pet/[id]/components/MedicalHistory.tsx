"use client";
import { useTranslations } from "next-intl";
import { Vaccination } from "@/interfaces/form";
import dayjs from "dayjs";

type VeterinaryContact = {
  name: string;
  phone: string;
  address: string;
};

type MedicalHistoryProps = {
  allergies: string[];
  medications: string[];
  conditions: string[];
  vaccinations: Vaccination[];
  veterinaryContact: VeterinaryContact | undefined;
  requireVeterinaryInfo: boolean;
  showAllergies: boolean;
  showConditions: boolean;
  showMedications: boolean;
  showVaccinations: boolean;
};

export default function MedicalHistory({
  allergies = [],
  medications = [],
  conditions = [],
  vaccinations = [],
  veterinaryContact = undefined,
  requireVeterinaryInfo = false,
  showAllergies = false,
  showConditions = false,
  showMedications = false,
  showVaccinations = false,
}: MedicalHistoryProps) {
  const t = useTranslations();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-primary mb-6">
        {t("medical.history")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showVaccinations && vaccinations.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💉</span>
              </div>
              <h3 className="text-lg font-semibold text-black">
                {t("medical.vaccinations")}
              </h3>
            </div>
            <div className="space-y-4">
              {vaccinations.map((vaccination) => (
                <div key={vaccination.name}>
                  <div className="bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100">
                    <p className="font-medium text-black capitalize">
                      {vaccination.name}
                    </p>
                    <p className="text-black/60 text-sm mb-4">
                      {dayjs(vaccination.lastApplied as string).format(
                        "DD/MM/YYYY"
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {showMedications && medications.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-lg font-semibold text-black">
                {t("medical.currentMedications")}
              </h3>
            </div>
            <div className="space-y-4">
              {medications.map((medication) => (
                <div
                  key={medication}
                  className="bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100"
                >
                  <p className="font-medium text-black capitalize">
                    {medication}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {showAllergies && allergies.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-lg font-semibold text-black">
                {t("common.allergies")}
              </h3>
            </div>
            <div className="space-y-4">
              {allergies.map((allergy) => (
                <div
                  key={allergy}
                  className="bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100"
                >
                  <p className="font-medium text-black capitalize">{allergy}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {showConditions && conditions.length > 0 && (
          <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-lg font-semibold text-black">
                {t("medical.conditions")}
              </h3>
            </div>
            <div className="space-y-4">
              {conditions.map((condition) => (
                <div
                  key={condition}
                  className="bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100"
                >
                  <p className="font-medium text-black capitalize">
                    {condition}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {requireVeterinaryInfo && veterinaryContact && (
        <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
            <h3 className="text-lg font-semibold text-black">
              {t("medical.veterinaryContact")}
            </h3>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-black mb-2">
              {veterinaryContact.name}
            </h4>
            <p className="text-black/60 text-sm mb-4">
              {veterinaryContact.phone}
              <br />
              {veterinaryContact.address}
            </p>
            <div className="flex gap-3">
              <button
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors"
                onClick={() =>
                  window.open(`tel:${veterinaryContact.phone}`, "_blank")
                }
              >
                {t("medical.callClinic")}
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() =>
                  window.open(
                    `https://maps.google.com/?q=${veterinaryContact.address}`,
                    "_blank"
                  )
                }
              >
                {t("actions.viewMap")}
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
