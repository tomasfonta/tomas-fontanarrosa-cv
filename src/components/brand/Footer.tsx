import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { Logotype } from "./Logotype";

export function Footer() {
	return (
		<footer className="border-t border-gris-100 bg-white">
			<div className="mx-auto flex w-full max-w-container flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
				<Logotype variant="full" size="sm" />
				<div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-gris-400">
					<Link to="/cv" className="transition-colors hover:text-ink">
						CV
					</Link>
					<a
						href="https://github.com/tomasfonta"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
					>
						<Github className="h-3 w-3" /> github.com/tomasfonta
					</a>
					<span>© {new Date().getFullYear()} · fontanarrosatomas.online</span>
				</div>
			</div>
		</footer>
	);
}
