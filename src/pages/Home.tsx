import { useEffect } from "react";
import { NavBar } from "@/components/brand/NavBar";
import { Footer } from "@/components/brand/Footer";
import { Hero, Problemas, Capacidades, Proceso, Trabajos, Contacto } from "@/components/home/Sections";

const Home = () => {
	useEffect(() => {
		document.title = "Tomás Fontanarrosa — Hasta que el problema deja de existir";
	}, []);

	return (
		<div className="min-h-screen bg-white font-sans text-grafito">
			<NavBar />
			<main>
				<Hero />
				<Problemas />
				<Capacidades />
				<Proceso />
				<Trabajos />
				<Contacto />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
