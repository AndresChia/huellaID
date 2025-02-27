import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <div className="h-1 w-24 bg-blue-500 mx-auto my-4"></div>
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
