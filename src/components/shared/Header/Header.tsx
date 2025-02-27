"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Logo from "../Logo/Logo";

const Header = () => {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-primary text-white">
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:text-gray-300 transition">
              <Logo />
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0
            absolute md:relative left-0 right-0 top-full md:top-auto
            bg-primary md:bg-transparent
            shadow-lg md:shadow-none
            p-4 md:p-0
            z-50
            border-t border-gray-700 md:border-0
            animate-fadeIn`}
          >
            <li>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition block"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("common.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition block"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.about")}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition block"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navigation.services")}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition block"
                onClick={() => setIsMenuOpen(false)}
              >
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
