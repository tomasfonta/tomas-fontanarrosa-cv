import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { NavBar } from "@/components/brand/NavBar";
import { Footer } from "@/components/brand/Footer";
import { BrandButton } from "@/components/brand/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-grafito">
      <NavBar />
      <main className="mx-auto flex w-full max-w-container flex-1 flex-col justify-center px-5 py-20 sm:px-6 lg:px-10">
        <span className="font-mono text-[11px] font-medium uppercase tracking-label text-lima-900">Error 404</span>
        <h1 className="mt-3 max-w-[17ch] font-display text-[40px] font-extrabold leading-[1.02] tracking-display text-ink sm:text-[52px]">
          Esta página no existe.
        </h1>
        <p className="mt-4 max-w-[48ch] text-[17px] text-gris-600">La dirección está mal o la página se movió. El resto del sitio sigue funcionando.</p>
        <div className="mt-7">
          <BrandButton to="/" variant="primary" size="lg">
            <ArrowLeft /> Volver al inicio
          </BrandButton>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
