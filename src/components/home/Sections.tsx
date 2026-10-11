import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ExternalLink, Mail, MapPin, MessageCircle, ChevronDown, Workflow } from "lucide-react";
import { BrandButton } from "@/components/brand/Button";
import { SectionHeading } from "@/components/brand/SectionHeading";
import { cn } from "@/lib/utils";
import { CAPACIDADES, CONTACT, ETAPAS, ETAPAS_DETALLE, PROBLEMAS, REGLAS, STATS, TIPOS_PROYECTO, TRABAJOS } from "./data";

const container = "mx-auto w-full max-w-container px-5 sm:px-6 lg:px-10";
const sectionY = "py-14 sm:py-20 lg:py-24";
const label = "font-mono text-[11px] font-medium uppercase tracking-label";

/* ---------------------------------------------------------------- Hero */
export function Hero() {
	return (
		<section aria-label="Presentación" className="relative overflow-hidden bg-white">
			{/* The only graphic resource allowed: a rotated lime rectangle clipped by the section */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-24 -right-16 z-0 h-[260px] w-[260px] rotate-12 rounded-2xl bg-lima-200 sm:-bottom-28 sm:-right-20 sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
			/>
			<div className={cn(container, "relative z-10 pb-14 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24")}>
				<h1 className="max-w-[17ch] font-display text-[40px] font-extrabold leading-[1.02] tracking-display text-ink sm:text-[52px] lg:text-[62px]">
					Hasta que el problema deja de existir.
				</h1>
				<p className="mt-5 max-w-[56ch] text-[17px] leading-relaxed text-gris-600">
					Tu operación llegó a un techo: planillas, carga doble, herramientas que no se hablan. Nos hacemos cargo del proyecto completo
					—proceso, equipamiento, software y mantenimiento— con precio cerrado y avance por hitos.
				</p>
				<div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
					<BrandButton href="#contacto" variant="accent" size="lg" className="sm:w-auto">
						Contame tu problema <ArrowRight />
					</BrandButton>
					<BrandButton href="#como-trabajamos" variant="secondary" size="lg" className="sm:w-auto">
						<Workflow /> Cómo trabajamos
					</BrandButton>
				</div>

				<div className="mt-10 grid grid-cols-2 gap-5 rounded-card border border-gris-100 bg-white p-5 shadow-2 sm:gap-8 sm:p-7 lg:grid-cols-4">
					{STATS.map((s) => (
						<div key={s.label} className="grid gap-1.5">
							<span className={cn(label, "flex items-center gap-1.5 text-gris-600")}>
								{s.icon && <s.icon className="h-3 w-3" />}
								{s.label}
							</span>
							<span className="font-display text-[30px] font-extrabold leading-none tracking-display text-ink sm:text-[34px]">{s.value}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

/* ----------------------------------------------------------- Problemas */
export function Problemas() {
	return (
		<section id="que-resolvemos" aria-label="Qué resolvemos" className={cn(sectionY, "bg-gris-50")}>
			<div className={container}>
				<SectionHeading eyebrow="Qué resolvemos" title="Seis problemas concretos" lead="Si te reconocés en uno de estos, hay algo para hacer." />
				<ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
					{PROBLEMAS.map((p) => (
						<li
							key={p.t}
							className="rounded-card border border-gris-100 bg-white p-6 shadow-1 transition-[box-shadow,transform] duration-200 ease-out-brand hover:-translate-y-0.5 hover:shadow-3 sm:p-7"
						>
							<span className="grid h-9 w-9 place-items-center rounded-icon bg-lima text-ink">
								<p.icon className="h-[18px] w-[18px]" strokeWidth={2} />
							</span>
							<h3 className="mt-4 text-[17px] font-semibold leading-[1.2] text-ink">{p.t}</h3>
							<p className="mt-2 text-[13px] leading-relaxed text-gris-600">{p.d}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

/* --------------------------------------------------------- Capacidades */
export function Capacidades() {
	return (
		<section id="capacidades" aria-label="Con qué lo resolvemos" className={cn(sectionY, "bg-ink")}>
			<div className={container}>
				<SectionHeading
					tone="inverse"
					eyebrow="Con qué lo resolvemos"
					title="El proyecto completo, no sólo la parte que se programa"
					lead="La herramienta se elige después de entender el problema, nunca antes."
				/>
				{/* Mobile: horizontal snap rail. Desktop: 5 columns */}
				<ol className="scrollbar-hide -mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
					{CAPACIDADES.map((c, i) => (
						<li
							key={c.k}
							className={cn(
								"min-w-[76%] snap-start rounded-card p-5 sm:min-w-[46%] lg:min-w-0",
								i === 0 ? "bg-lima text-ink" : "bg-grafito text-white",
							)}
						>
							<span className={cn(label, i === 0 ? "text-grafito" : "text-gris-400")}>{String(i + 1).padStart(2, "0")}</span>
							<h3 className="mt-2.5 text-[17px] font-semibold leading-[1.2]">{c.k}</h3>
							<p className={cn("mt-2 text-[13px] leading-relaxed", i === 0 ? "text-grafito" : "text-inverseMuted")}>{c.d}</p>
						</li>
					))}
				</ol>
				<p className="mt-3 font-mono text-[11px] text-gris-400 lg:hidden">Deslizá para ver las cinco →</p>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------- Proceso */
export function Proceso() {
	const current = 2;
	return (
		<section id="como-trabajamos" aria-label="Cómo trabajamos" className={cn(sectionY, "bg-white")}>
			<div className={container}>
				<SectionHeading eyebrow="Cómo trabajamos" title="Cuatro etapas, un documento en cada una" />

				<ol className="mt-8 grid gap-4 rounded-card border border-gris-100 bg-white p-5 shadow-1 sm:p-7 md:grid-cols-4 md:gap-0">
					{ETAPAS.map((s, i) => {
						const done = i < current;
						const on = i === current;
						return (
							<li key={s} className="relative grid gap-2.5 md:min-w-0">
								<div className="flex items-center gap-2">
									<span
										className={cn(
											"grid h-7 w-7 shrink-0 place-items-center rounded-full font-mono text-[11px] font-bold md:h-6 md:w-6",
											done ? "bg-ink text-lima" : on ? "bg-lima text-ink" : "bg-gris-100 text-gris-600",
										)}
									>
										{done ? <Check className="h-3 w-3" strokeWidth={3} /> : String(i + 1).padStart(2, "0")}
									</span>
									<span className={cn("text-[15px] font-semibold text-ink md:hidden")}>{s}</span>
									{i < ETAPAS.length - 1 && <span className={cn("hidden h-0.5 flex-1 md:block", done ? "bg-ink" : "bg-gris-100")} />}
								</div>
								<span className={cn("hidden pr-3 text-[13px] md:block", on ? "font-semibold text-ink" : "text-gris-600")}>{s}</span>
								<p className="pl-9 text-[13px] leading-relaxed text-gris-600 md:pl-0 md:pr-4">{ETAPAS_DETALLE[i]}</p>
							</li>
						);
					})}
				</ol>

				<ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{REGLAS.map((r) => (
						<li key={r.t} className="grid gap-2.5">
							<r.icon className="h-[19px] w-[19px] text-ink" strokeWidth={2} />
							<strong className="text-[13px] font-semibold leading-snug text-ink">{r.t}</strong>
							<span className="text-[13px] leading-relaxed text-gris-600">{r.d}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------ Trabajos */
export function Trabajos() {
	const [sel, setSel] = useState(TRABAJOS[0].rubro);
	const cur = TRABAJOS.find((t) => t.rubro === sel) ?? TRABAJOS[0];
	return (
		<section id="trabajos" aria-label="Trabajos" className={cn(sectionY, "bg-arena")}>
			<div className={container}>
				<SectionHeading eyebrow="Trabajos" title="Problema, qué se construyó, qué resultado dio" />

				<div role="tablist" aria-label="Rubros" className="scrollbar-hide -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-wrap lg:px-0">
					{TRABAJOS.map((t) => {
						const on = t.rubro === sel;
						return (
							<button
								key={t.rubro}
								type="button"
								role="tab"
								aria-selected={on}
								onClick={() => setSel(t.rubro)}
								className={cn(
									"h-9 shrink-0 rounded-full border px-3.5 text-[13px] font-medium transition-colors duration-150 ease-out-brand lg:h-7 lg:px-3",
									on ? "border-ink bg-ink text-white" : "border-gris-200 bg-white text-grafito hover:bg-gris-50",
								)}
							>
								{t.rubro}
							</button>
						);
					})}
				</div>

				<article className="mt-4 grid grid-cols-1 gap-6 rounded-card border border-gris-100 bg-white p-6 shadow-2 sm:p-7 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8">
					<div>
						<span className={cn(label, "text-gris-600")}>El problema</span>
						<p className="mt-2 text-[15px] leading-relaxed text-grafito">{cur.prob}</p>
						<div className="mt-3.5 flex flex-wrap items-center gap-2">
							<span className="inline-flex h-[22px] items-center rounded-full border border-ink bg-ink px-2.5 text-xs font-semibold text-white">{cur.tag}</span>
							{cur.rol && <span className="inline-flex h-[22px] items-center rounded-full border border-gris-100 bg-gris-50 px-2.5 text-xs font-semibold text-grafito">{cur.rol}</span>}
						</div>
					</div>
					<div>
						<span className={cn(label, "text-gris-600")}>Qué se construyó</span>
						<p className="mt-2 text-[15px] leading-relaxed text-grafito">{cur.hizo}</p>
						{cur.link && (
							<a
								href={cur.link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-3 inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-teal-900 underline-offset-4 hover:text-ink hover:underline"
							>
								{cur.link.label} <ExternalLink className="h-3.5 w-3.5" />
							</a>
						)}
					</div>
					<div className="rounded-icon bg-lima p-4 lg:-m-1">
						<span className={cn(label, "text-grafito")}>Resultado</span>
						<p className="mt-2 font-display text-[20px] font-bold leading-tight tracking-heading text-ink">{cur.res}</p>
					</div>
				</article>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------ Contacto */
const inputCls =
	"w-full rounded-input border border-gris-200 bg-white px-3 text-base text-ink outline-none transition-[border-color,box-shadow] duration-150 ease-out-brand placeholder:text-gris-400 focus:border-ink focus:shadow-glow-lima sm:text-[13px]";

export function Contacto() {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [tipo, setTipo] = useState("");
	const [problema, setProblema] = useState("");

	const body = () => {
		const lines = [`Nombre y empresa: ${nombre}`, `Email: ${email}`];
		if (tipo) lines.push(`Tipo de proyecto: ${tipo}`);
		lines.push("", problema);
		return lines.join("\n");
	};

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		const subject = `Consulta desde la web${nombre ? ` — ${nombre}` : ""}`;
		window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body())}`;
	};

	const waHref = `${CONTACT.whatsapp}?text=${encodeURIComponent(problema ? `Hola Tomás. ${problema}` : "Hola Tomás, quiero contarte un problema de mi operación.")}`;

	return (
		<section id="contacto" aria-label="Contacto" className={cn(sectionY, "bg-ink")}>
			<div className={cn(container, "grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14")}>
				<div>
					<SectionHeading
						tone="inverse"
						eyebrow="Hablemos"
						title="Contame el problema, no la solución"
						lead="Media hora alcanza para saber si hay algo para hacer y cuánto costaría."
					/>
					<ul className="mt-8 grid gap-3 font-mono text-[14px] text-white">
						<li className="flex items-center gap-3">
							<Mail className="h-4 w-4 shrink-0 text-lima" />
							<a href={`mailto:${CONTACT.email}`} className="break-all hover:underline">{CONTACT.email}</a>
						</li>
						<li className="flex items-center gap-3">
							<MessageCircle className="h-4 w-4 shrink-0 text-lima" />
							<a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">
								WhatsApp {CONTACT.phoneDisplay}
							</a>
						</li>
						<li className="flex items-start gap-3">
							<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lima" />
							<span>{CONTACT.location}</span>
						</li>
					</ul>
				</div>

				<form onSubmit={onSubmit} className="grid gap-4 rounded-panel bg-white p-5 shadow-4 sm:p-7">
					<div className="grid gap-1.5">
						<label htmlFor="c-nombre" className="flex gap-1 text-xs font-semibold text-ink">
							Nombre y empresa <span className="text-error">*</span>
						</label>
						<input id="c-nombre" required autoComplete="name" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ana · Distribuidora Norte" className={cn(inputCls, "h-11 sm:h-[38px]")} />
					</div>
					<div className="grid gap-1.5">
						<label htmlFor="c-email" className="flex gap-1 text-xs font-semibold text-ink">
							Email <span className="text-error">*</span>
						</label>
						<input id="c-email" type="email" required autoComplete="email" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ana@empresa.com" className={cn(inputCls, "h-11 sm:h-[38px]")} />
					</div>
					<div className="grid gap-1.5">
						<label htmlFor="c-tipo" className="text-xs font-semibold text-ink">Qué tipo de proyecto es</label>
						<span className="relative block">
							<select id="c-tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} className={cn(inputCls, "h-11 appearance-none pr-9 sm:h-[38px]", !tipo && "text-gris-600")}>
								<option value="">Elegir...</option>
								{TIPOS_PROYECTO.map((t) => (
									<option key={t} value={t}>{t}</option>
								))}
							</select>
							<ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gris-600" />
						</span>
					</div>
					<div className="grid gap-1.5">
						<label htmlFor="c-problema" className="text-xs font-semibold text-ink">Contame el problema</label>
						<textarea id="c-problema" rows={4} value={problema} onChange={(e) => setProblema(e.target.value)} placeholder="Cargamos los pedidos dos veces: en WhatsApp y en el sistema." className={cn(inputCls, "resize-y py-2.5 leading-relaxed")} />
						<span className="text-xs text-gris-600">Dos líneas alcanzan.</span>
					</div>
					<BrandButton type="submit" variant="accent" size="lg" full>
						Enviar <ArrowRight />
					</BrandButton>
					<BrandButton href={waHref} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" full>
						<MessageCircle /> Escribime por WhatsApp
					</BrandButton>
				</form>
			</div>
		</section>
	);
}
