export type NavItem = { label: string; href: string; route?: boolean };

export const NAV_ITEMS: NavItem[] = [
	{ label: "Qué resolvemos", href: "#que-resolvemos" },
	{ label: "Cómo trabajamos", href: "#como-trabajamos" },
	{ label: "Trabajos", href: "#trabajos" },
	{ label: "CV", href: "/cv", route: true },
];

export const CONTACT_HREF = "#contacto";
