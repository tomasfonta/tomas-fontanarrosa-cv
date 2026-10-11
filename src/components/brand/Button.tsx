import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
	"inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold tracking-[-0.005em] whitespace-nowrap select-none " +
	"transition-[background-color,color,border-color,box-shadow,transform] duration-150 ease-out-brand " +
	"active:translate-y-px active:shadow-none " +
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
	"disabled:opacity-40 disabled:cursor-not-allowed [&_svg]:shrink-0";

const sizes: Record<Size, string> = {
	sm: "h-[30px] px-3.5 text-xs [&_svg]:size-[15px]",
	md: "h-[38px] px-[18px] text-[13px] [&_svg]:size-[15px]",
	lg: "h-[46px] px-6 text-[15px] [&_svg]:size-[17px]",
};

const variants: Record<Variant, string> = {
	primary: "bg-ink text-white shadow-1 hover:bg-grafito",
	accent: "bg-lima text-ink shadow-1 hover:bg-lima-600",
	secondary: "bg-white text-ink border-gris-200 hover:border-ink hover:bg-gris-50",
	ghost: "bg-transparent text-grafito hover:bg-gris-50",
	inverse: "bg-white text-ink hover:bg-gris-100",
};

type StyleProps = { variant?: Variant; size?: Size; full?: boolean; className?: string };

type AsButton = StyleProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };
type AsAnchor = StyleProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };
type AsLink = StyleProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { to: string; href?: undefined };

export type BrandButtonProps = AsButton | AsAnchor | AsLink;

const classesFor = ({ variant = "primary", size = "md", full, className }: StyleProps) =>
	cn(base, sizes[size], variants[variant], full && "w-full", className);

/** Brand button: pill, compact, no bounce. Renders <Link>, <a> or <button>. */
export function BrandButton(props: BrandButtonProps) {
	if (isLink(props)) {
		const { to, variant, size, full, className, ...rest } = props;
		return <Link to={to} className={classesFor({ variant, size, full, className })} {...rest} />;
	}
	if (isAnchor(props)) {
		const { href, variant, size, full, className, ...rest } = props;
		return <a href={href} className={classesFor({ variant, size, full, className })} {...rest} />;
	}
	const { variant, size, full, className, type = "button", ...rest } = props;
	return <button type={type} className={classesFor({ variant, size, full, className })} {...rest} />;
}

const isLink = (p: BrandButtonProps): p is AsLink => typeof p.to === "string";
const isAnchor = (p: BrandButtonProps): p is AsAnchor => typeof p.href === "string";
