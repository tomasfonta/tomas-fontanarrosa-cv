import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface SocialLinksProps {
	isDarkMode?: boolean;
	className?: string;
}

export const SocialLinks = ({ isDarkMode = true, className = '' }: SocialLinksProps) => {
	const socialLinks = [
		{
			name: 'GitHub',
			icon: Github,
			url: 'https://github.com/tomasfonta',
			color: isDarkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'
		},
		{
			name: 'LinkedIn',
			icon: Linkedin,
			url: 'https://www.linkedin.com/in/tomas-fontanarrosa',
			color: isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
		},
		{
			name: 'Email',
			icon: Mail,
			url: 'mailto:fontanarrosatomas@gmail.com',
			color: isDarkMode ? 'hover:text-green-400' : 'hover:text-green-600'
		},
		{
			name: 'Twitter',
			icon: Twitter,
			url: 'https://twitter.com/tomasfonta',
			color: isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
		}
	];

	return (
		<div className={`flex gap-4 ${className}`}>
			{socialLinks.map((social) => {
				const Icon = social.icon;
				return (
					<a
						key={social.name}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${social.color} transition-all duration-300 transform hover:scale-110`}
						aria-label={social.name}
					>
						<Icon className="w-5 h-5 sm:w-6 sm:h-6" />
					</a>
				);
			})}
		</div>
	);
};
