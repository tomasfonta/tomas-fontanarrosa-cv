import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Archivo', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
				display: ['Archivo', '"Archivo Expanded"', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
			colors: {
				/* Brand tokens — Tomás Fontanarrosa design system */
				ink: '#101010',
				grafito: { DEFAULT: '#2a2a2a', 700: '#303030' },
				lima: {
					DEFAULT: '#defe52',
					100: '#f4f8e7',
					200: '#f5fed3',
					300: '#ebfea5',
					400: '#e3fe71',
					500: '#defe52',
					600: '#d9fc00',
					900: '#5c6b00',
				},
				gris: {
					0: '#ffffff',
					50: '#f9f9f9',
					100: '#e5e5e5',
					200: '#cfcfcf',
					400: '#9d9d9d',
					600: '#696969',
				},
				teal: { 100: '#c0d4d2', 300: '#4ecfcb', 500: '#00d0c8', 900: '#00706b' },
				verde: { 300: '#bed6a6', 500: '#b8e265', 700: '#8ff400' },
				arena: { DEFAULT: '#efe7d5', 300: '#dad7d0', 500: '#efe7d5' },
				alerta: '#c98a00',
				error: '#b4231f',
				inverseMuted: '#b8b8b8',
				inverseBorder: '#3d3d3d',

				/* shadcn tokens (kept for the CV page and ui/ components) */
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				/* brand radii */
				input: '6px',
				icon: '10px',
				card: '14px',
				panel: '20px',
				'2xl': '28px',
			},
			boxShadow: {
				1: '0 1px 2px rgba(16,16,16,.08)',
				2: '0 2px 6px rgba(16,16,16,.09)',
				3: '0 6px 18px rgba(16,16,16,.10)',
				4: '0 16px 40px rgba(16,16,16,.14)',
				solid: '3px 3px 0 #101010',
				'solid-sm': '2px 2px 0 #101010',
				'solid-lima': '3px 3px 0 #defe52',
				'glow-lima': '0 0 0 3px rgba(222,254,82,.45)',
			},
			transitionTimingFunction: {
				'out-brand': 'cubic-bezier(.2,.8,.3,1)',
			},
			letterSpacing: {
				display: '-0.03em',
				heading: '-0.02em',
				label: '0.08em',
			},
			maxWidth: {
				container: '1180px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
