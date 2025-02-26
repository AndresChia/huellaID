"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">{t("navigation.logo")}</div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-primary text-black">
                {t("common.home")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary text-black">
                {t("navigation.about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary text-black">
                {t("navigation.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
