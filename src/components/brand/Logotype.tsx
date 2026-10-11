import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Tone = "ink" | "inverse";

/** TF cube mark (public/logo.png is white on transparent; inverted on light backgrounds). */
export function Monogram({ size = 28, tone = "ink", className }: { size?: number; tone?: Tone; className?: string }) {
	return (
		<img
			src={`${import.meta.env.BASE_URL}logo.png`}
			alt=""
			aria-hidden="true"
			width={size}
			height={size}
			decoding="async"
			className={cn("block shrink-0 select-none", tone === "ink" && "invert", className)}
		/>
	);
}

type LogotypeProps = {
	variant?: "lockup" | "full" | "monogram";
	size?: "sm" | "md" | "lg";
	tone?: Tone;
	descriptor?: string;
	to?: string;
	className?: string;
};

/** Brand signature: monogram + name (+ descriptor in mono). */
export function Logotype({
	variant = "lockup",
	size = "sm",
	tone = "ink",
	descriptor = "Me hago cargo del proyecto completo",
	to = "/",
	className,
}: LogotypeProps) {
	const scale = { sm: 15, md: 20, lg: 30 }[size];
	const inv = tone === "inverse";
	const mark = <Monogram size={Math.round(scale * 1.9)} tone={tone} />;
	const body =
		variant === "monogram" ? (
			mark
		) : (
			<span className="inline-flex items-center gap-2.5">
				{mark}
				<span className="block">
					<span
						className={cn("block font-display font-extrabold leading-none tracking-[-0.035em] whitespace-nowrap", inv ? "text-white" : "text-ink")}
						style={{ fontSize: scale }}
					>
						Tomás Fontanarrosa
					</span>
					{variant === "full" && descriptor && (
						<span
							className={cn("mt-1 block max-w-[26ch] font-mono font-medium tracking-[0.02em] leading-tight", inv ? "text-inverseMuted" : "text-gris-600")}
							style={{ fontSize: Math.max(11, Math.round(scale * 0.42)) }}
						>
							{descriptor}
						</span>
					)}
				</span>
			</span>
		);
	return (
		<Link to={to} aria-label="Tomás Fontanarrosa — inicio" className={cn("inline-flex items-center no-underline rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-900", className)}>
			{body}
		</Link>
	);
}
