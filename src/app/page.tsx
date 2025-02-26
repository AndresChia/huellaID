import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Bienvenido a Mi Sitio</h1>
        <p className="text-lg">
          Este es el contenido principal de la página de inicio.
        </p>
      </main>
      <Footer />
    </div>
  );
}
