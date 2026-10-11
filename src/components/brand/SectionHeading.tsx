import { cn } from "@/lib/utils";

type Props = {
	eyebrow?: string;
	title: string;
	lead?: string;
	tone?: "default" | "inverse" | "accent";
	as?: "h1" | "h2" | "h3";
	className?: string;
};

export function SectionHeading({ eyebrow, title, lead, tone = "default", as: Tag = "h2", className }: Props) {
	const inv = tone === "inverse";
	return (
		<header className={cn("grid max-w-[58ch] gap-3", className)}>
			{eyebrow && (
				<span className={cn("font-mono text-[11px] font-medium uppercase tracking-label", inv ? "text-lima" : "text-lima-900")}>
					{eyebrow}
				</span>
			)}
			<Tag className={cn("font-display text-[28px] font-bold leading-[1.15] tracking-heading sm:text-[34px]", inv ? "text-white" : "text-ink")}>
				{title}
			</Tag>
			{lead && <p className={cn("max-w-[52ch] text-[17px] leading-relaxed", inv ? "text-inverseMuted" : "text-gris-600")}>{lead}</p>}
		</header>
	);
}
