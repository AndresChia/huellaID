"use client";
import { useTranslations } from "next-intl";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import ScaleIcon from "@mui/icons-material/Scale";
import PetsIcon from "@mui/icons-material/Pets";
import PaletteIcon from "@mui/icons-material/Palette";

interface PetInfoProps {
  age: number;
  weight: number;
  breed: string;
  colorMarkings: string;
  species: string;
}

export default function PetInfo({
  age,
  weight,
  breed,
  colorMarkings,
  species,
}: PetInfoProps) {
  const t = useTranslations("common");
  const catBreeds = useTranslations("breeds.cat");
  const dogBreeds = useTranslations("breeds.dog");

  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
          <CalendarMonthIcon sx={{ fontSize: 16 }} className="text-primary" />
        </div>
        <div>
          <p className="text-sm text-black/60">{t("age")}</p>
          <p className="font-medium text-black">
            {age} {t("years")}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <ScaleIcon sx={{ fontSize: 16 }} className="text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-black/60">{t("weight")}</p>
          <p className="font-medium text-black">{weight} kg</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
          <PetsIcon sx={{ fontSize: 16 }} className="text-pink-600" />
        </div>
        <div>
          <p className="text-sm text-black/60">{t("breed")}</p>
          <p className="font-medium text-black">
            {species === "cat" ? catBreeds(breed) : dogBreeds(breed)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
          <PaletteIcon sx={{ fontSize: 16 }} className="text-yellow-600" />
        </div>
        <div>
          <p className="text-sm text-black/60">{t("colorMarkings")}</p>
          <p className="font-medium text-black capitalize">{colorMarkings}</p>
        </div>
      </div>
    </div>
  );
}
