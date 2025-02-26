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
            <a href="/terms" className="text-gray-600 hover:text-gray-900">
              Términos
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacidad
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
