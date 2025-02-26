import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            © 2024 VetCare. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              Términos
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacidad
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
