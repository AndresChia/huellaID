"use client";
import { useTranslations } from "next-intl";
import { PetData } from "@/utils/pets";
import { Calendar, User, Phone, MapPin } from "lucide-react";

interface PetInfoProps {
  pet: PetData;
}

export default function PetInfo({ pet }: PetInfoProps) {
  const t = useTranslations();

  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
          <Calendar size={16} className="text-primary" />
        </div>
        <div>
          <p className="text-sm text-black/60">{t("common.age")}</p>
          <p className="font-medium text-black">
            {pet.age} {t("common.years")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
          <User size={16} className="text-primary" />
        </div>
        <div>
          <p className="text-sm text-black/60">{t("common.owner")}</p>
          <p className="font-medium text-black">{pet.owner}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <Phone size={16} className="text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-black/60">Celular</p>
          <p className="font-medium text-black">{pet.phone}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <MapPin size={16} className="text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-black/60">Dirección</p>
          <p className="font-medium text-black">{pet.address}</p>
        </div>
      </div>
    </div>
  );
}
