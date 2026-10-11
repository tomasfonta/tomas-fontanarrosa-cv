import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Logotype } from "./Logotype";
import { BrandButton } from "./Button";
import { cn } from "@/lib/utils";

import { NAV_ITEMS, CONTACT_HREF } from "./nav";

/** Sticky light nav: 64px, white 90% + blur. Mobile: CTA + drawer. */
export function NavBar({ active }: { active?: string }) {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	const onHome = pathname === "/";
	const resolve = (href: string) => (href.startsWith("#") && !onHome ? `/${href}` : href);

	return (
		<nav className="sticky top-0 z-30 h-16 border-b border-gris-100 bg-white/90 backdrop-blur-[10px] backdrop-saturate-[1.4]">
			<div className="mx-auto flex h-full w-full max-w-container items-center gap-4 px-5 sm:px-6 lg:px-10">
				<Logotype variant="lockup" size="sm" />

				<div className="hidden flex-1 items-center gap-5 md:flex">
					{NAV_ITEMS.map((it) => {
						const on = it.label === active;
						const cls = cn(
							"pb-0.5 text-[13px] font-medium leading-tight transition-colors duration-150",
							on ? "text-ink shadow-[inset_0_-2px_0_#101010]" : "text-gris-600 hover:text-ink",
						);
						return it.route ? (
							<Link key={it.label} to={it.href} className={cls}>
								{it.label}
							</Link>
						) : (
							<a key={it.label} href={resolve(it.href)} className={cls}>
								{it.label}
							</a>
						);
					})}
				</div>

				<div className="ml-auto flex items-center gap-2">
					<BrandButton href={resolve(CONTACT_HREF)} variant="primary" size="sm">
						Hablemos <ArrowRight />
					</BrandButton>

					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<button
								type="button"
								aria-label="Abrir menú"
								className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-gris-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 md:hidden"
							>
								<Menu className="h-5 w-5" />
							</button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[86vw] max-w-sm border-l border-gris-100 bg-white p-0 font-sans">
							<SheetTitle className="sr-only">Menú</SheetTitle>
							<SheetDescription className="sr-only">Secciones del sitio</SheetDescription>
							<div className="flex h-16 items-center border-b border-gris-100 px-5">
								<Logotype variant="lockup" size="sm" />
							</div>
							<ul className="grid gap-1 p-3">
								{NAV_ITEMS.map((it) => {
									const cls = "flex h-12 items-center rounded-icon px-3 text-[17px] font-semibold text-ink transition-colors hover:bg-gris-50";
									return (
										<li key={it.label}>
											{it.route ? (
												<Link to={it.href} className={cls} onClick={() => setOpen(false)}>
													{it.label}
												</Link>
											) : (
												<a href={resolve(it.href)} className={cls} onClick={() => setOpen(false)}>
													{it.label}
												</a>
											)}
										</li>
									);
								})}
							</ul>
							<div className="mt-2 grid gap-2 px-5">
								<BrandButton href={resolve(CONTACT_HREF)} variant="accent" size="lg" full onClick={() => setOpen(false)}>
									Contame tu problema <ArrowRight />
								</BrandButton>
								<p className="mt-1 font-mono text-[11px] uppercase tracking-label text-gris-600">
									Palma de Mallorca · remoto y presencial
								</p>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	);
}
