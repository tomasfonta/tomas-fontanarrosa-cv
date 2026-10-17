import {
	Table2, EyeOff, Unlink, Repeat, Globe, Lightbulb,
	Receipt, MonitorPlay, KeyRound, Users, FileText, UserCheck,
	type LucideIcon,
} from "lucide-react";

export const CONTACT = {
	email: "fontanarrosatomas@gmail.com",
	phoneDisplay: "+34 649 006 569",
	whatsapp: "https://wa.me/34649006569",
	site: "fontanarrosatomas.online",
	location: "Palma de Mallorca · trabajo remoto y presencial según el proyecto",
	github: "https://github.com/tomasfonta",
};

export const PROBLEMAS: { icon: LucideIcon; t: string; d: string }[] = [
	{ icon: Table2, t: "Procesos manuales que no escalan", d: "El negocio creció y sigue funcionando con planillas, carga doble de datos y coordinación por WhatsApp." },
	{ icon: EyeOff, t: "Falta de visibilidad", d: "Nadie puede responder cómo va el negocio sin pedirle a tres personas que armen un reporte a mano." },
	{ icon: Unlink, t: "Herramientas que no se hablan", d: "El CRM, la facturación y el stock viven en mundos separados y alguien los sincroniza a mano." },
	{ icon: Repeat, t: "Tareas repetitivas que consumen horas", d: "Trabajo que una persona hace todos los días y que una máquina podría hacer sola." },
	{ icon: Globe, t: "Presencia digital que no convierte", d: "Un sitio que existe pero no genera consultas, no posiciona o no se puede actualizar sin llamar a alguien." },
	{ icon: Lightbulb, t: "Una idea de producto sin quien la construya", d: "Hay claridad sobre qué hacer y falta el equipo técnico para hacerlo." },
];

export const CAPACIDADES: { k: string; d: string }[] = [
	{ k: "Software", d: "Desarrollo a medida, integraciones, automatizaciones, tableros de datos, agentes con IA aplicada, sitios y plataformas." },
	{ k: "Procesos", d: "Rediseño de cómo se trabaja antes de automatizar nada. No sirve automatizar un proceso roto." },
	{ k: "Equipamiento", d: "Definición, compra e instalación del hardware y la infraestructura que el proyecto necesite." },
	{ k: "Mantenimiento", d: "La solución sigue funcionando después de la entrega. No te dejamos con algo que no sabés sostener." },
	{ k: "Asesoría", d: "Acompañamiento en las decisiones técnicas, incluidas las que terminan en “esto no lo construyas”." },
];

export const ETAPAS = ["Presentación", "Propuesta y alcance", "Plan de entrega", "Cierre"];

export const ETAPAS_DETALLE: string[] = [
	"Media hora para entender el problema y ver si hay algo para hacer.",
	"Documento con alcance, hitos y precio cerrado. Sin letra chica.",
	"Qué se demuestra en cada hito y cuándo. Avance sobre el producto, no sobre diapositivas.",
	"Entrega, accesos, código y el plan de mantenimiento. Todo queda de tu lado.",
];

export const REGLAS: { icon: LucideIcon; t: string; d: string }[] = [
	{ icon: Receipt, t: "Precio cerrado por alcance definido", d: "Sabés cuánto sale antes de empezar." },
	{ icon: MonitorPlay, t: "Demos sobre el producto funcionando", d: "El avance se muestra corriendo, no en diapositivas." },
	{ icon: KeyRound, t: "El código y los accesos son tuyos", d: "Desde el primer día, sin discusión." },
	{ icon: Users, t: "Equipo que escala por proyecto", d: "Se suma gente según lo que el trabajo necesite." },
];

export type Trabajo = {
	rubro: string;
	prob: string;
	hizo: string;
	res: string;
	tag: string;
	rol?: string;
	link?: { label: string; href: string };
};

export const TRABAJOS: Trabajo[] = [
	{
		rubro: "Gastronomía y hotelería",
		prob: "Restaurantes y hoteles compraban insumos por teléfono y WhatsApp a varios proveedores, sin comparar precios ni tener historial de pedidos.",
		hizo: "RestoCompras: marketplace B2B con catálogo de proveedores, pedidos online y seguimiento, construido completo desde cero.",
		res: "Un solo lugar para pedir a todos los proveedores.",
		tag: "E-commerce B2B",
		rol: "Fundador",
		link: { label: "restocompras.store", href: "https://www.restocompras.store/" },
	},
	{
		rubro: "Fintech",
		prob: "Personas y pymes pagaban comisiones altas y esperaban días para mover dinero entre Latinoamérica y Europa.",
		hizo: "Plataforma boutique de transferencias internacionales con tipo de cambio competitivo y seguimiento digital de cada operación.",
		res: "Pagos entre países sin pasar por el banco tradicional.",
		tag: "Pagos",
		rol: "Cofundador",
	},
	{
		rubro: "Trading",
		prob: "Las señales de estrategias en TradingView había que ejecutarlas a mano, con demoras y errores de carga.",
		hizo: "Servicio que recibe las alertas por webhook, procesa la lógica de la señal y envía las órdenes a Interactive Brokers.",
		res: "Entradas y salidas 100% automáticas en acciones y futuros.",
		tag: "Automatización",
	},
	{
		rubro: "Laboratorio",
		prob: "Un laboratorio de análisis en Nebraska manejaba sus procesos administrativos y operativos en sistemas separados.",
		hizo: "Back-office completo con .NET Core, React y PostgreSQL para la administración y la operación diaria.",
		res: "Operación administrativa y de laboratorio en un sistema único.",
		tag: "Procesos",
		rol: "Con Primero Systems",
	},
	{
		rubro: "Turismo",
		prob: "La operación comercial de una isla privada (tiendas, gastronomía, reservas y servicios al huésped) corría en módulos desconectados.",
		hizo: "Plataforma de módulos interconectados en Java y Spring con aplicaciones Android para el personal en la isla.",
		res: "Toda la operación comercial de la isla en una plataforma.",
		tag: "Plataforma",
		rol: "Con OZ, para Royal Caribbean",
	},
];

// Hero figures. The first one is derived from TRABAJOS so the stat and the list never drift apart.
export const STATS: { value: string; label: string; icon?: LucideIcon }[] = [
	{ value: String(TRABAJOS.length), label: "Proyectos entregados" },
	{ value: "4", label: "Etapas documentadas", icon: FileText },
	{ value: "1", label: "Contraparte responsable", icon: UserCheck },
	{ value: "0", label: "Sorpresas de precio", icon: Receipt },
];

export const TIPOS_PROYECTO = [
	"Proceso manual que no escala",
	"Falta de visibilidad / reportes",
	"Integrar herramientas",
	"Equipamiento e infraestructura",
	"Idea de producto desde cero",
	"Todavía no sé",
];
